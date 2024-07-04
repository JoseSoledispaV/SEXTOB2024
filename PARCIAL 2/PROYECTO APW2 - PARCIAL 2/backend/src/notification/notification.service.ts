import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Session } from '../auth/entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilterKM } from '../common/glob/filter';
import { Order } from '../client/market/entities/order.entity';
import { StatusOrder } from 'src/common/glob/status';
import { Company } from 'src/admin/company/entities/company.entity';
import { Store } from 'src/admin/store/entities/store.entity';

@Injectable()
export class NotificationService {

  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,

    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,

  ) {
    const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIAL_JSON);
    firebase.initializeApp({ credential: firebase.credential.cert(firebaseCredentials) });
  }

  async notify(userId: number, data: { [key: string]: string; }) {
    const sessions = await this.sessionRepository.createQueryBuilder('s')
      .select(['s.tokenPush'])
      .where('s.userId = :userId', { userId: userId }).getMany();

    const tokens = sessions.map(session => session.tokenPush);
    if (tokens.length > 0) firebase.messaging().sendMulticast({ tokens, data, android: { ttl: 0 } });
  }

  async notifyOrder(orderId: number, storeId: number, latitude: number, longitude: number, data: { [key: string]: string; }) {

    const store = await this.storeRepository.findOne({ where: { id: storeId }, select: { company: { id: true, restricted: true } }, relations: { company: true } });

    let sessionsDeliveryman: Session[];

    if (store.company.restricted == 1) {
      sessionsDeliveryman = await this.sessionRepository.createQueryBuilder('s')
        .select(['s.tokenPush'])
        .innerJoin("s.user", "user")
        .innerJoinAndMapMany("user.companiesRider", "company_rider", 'rider', 'user.id = rider.userId AND rider.companyId = :companyId', { companyId: store.company.id })
        .where(this.sqlFilterDeliveryMan(latitude, longitude), { km: FilterKM.DELIVERYMAN }).getMany();
    } else {
      sessionsDeliveryman = await this.sessionRepository.createQueryBuilder('s')
        .select(['s.tokenPush'])
        .innerJoin("s.user", "user")
        .leftJoinAndMapMany("user.companiesRider", "company_rider", 'rider', 'user.id = rider.userId AND rider.companyId = :companyId', { companyId: store.company.id })
        .where(this.sqlFilterDeliveryMan(latitude, longitude), { km: FilterKM.DELIVERYMAN }).getMany();
    }

    const tokensDeliveryman = sessionsDeliveryman.map(session => session.tokenPush);
    let count = 0;
    if (tokensDeliveryman.length > 0) this.sendOrder(orderId, tokensDeliveryman, data, count);

    const order = await this.orderRepository.createQueryBuilder('p')
      .select(['p.id', 'store.id', 'user.id',])
      .innerJoin("p.store", "store")
      .innerJoin("store.user", "user")
      .where('p.id = :orderId', { orderId })
      .getOne();
    // Notifies the order to the user who registered the store (rol manager)
    this.notify(order.store.user.id, { ...data, 'companyType': '${order.store.company.type}' });
  }

  async sendOrder(orderId: number, tokens: string[], data: { [key: string]: string; }, count: number) {
    firebase.messaging().sendMulticast({ tokens, data, android: { ttl: 0 } });
    count++;
    if (count > 4) return;
    await new Promise(resolve => setTimeout(resolve, 8000));
    const order = await this.orderRepository.createQueryBuilder('p').select(['p.id'])
      .where("p.id = :orderId AND p.status = :status", { orderId, status: StatusOrder.STARTED }).getOne();
    if (order) this.sendOrder(orderId, tokens, data, count);
  }

  private sqlFilterDeliveryMan = (latitude: number, longitude: number):
    string =>
    `
    s.isOnline = true AND s.location IS NOT NULL AND
    ST_DistanceSphere( 
    ST_GeomFromText('POINT(${latitude} ${longitude})'), 
      s.location::geometry) 
    <= :km
    `;

}
