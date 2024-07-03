import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { TransaccionService } from './transaccion/transaccion.service';
import { CreateTransaccionInput } from './transaccion/dto/create-transaccion.input';
import { ConexionService } from './conexion/conexion.service';

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly transaccionService: TransaccionService,
    private readonly conexionService: ConexionService
  ) {}

  async handleConnection(client: Socket, ...args: any[]): Promise<void> {
    const userId = client.handshake.query.userId as string;
    if (!userId) {
      client.disconnect();
      return;
    }

    const conexiones = await this.conexionService.findByUserId(userId);
    if (conexiones.length >= 3) {
      client.disconnect();
      return;
    }

    await this.conexionService.create(userId, client.id);
    this.emitConnectedUsers(client.id);
  }

  async handleDisconnect(client: Socket): Promise<void> {
    await this.conexionService.deleteBySocketId(client.id);
    this.emitConnectedUsers(client.id);
  }

  emitConnectedUsers(userId: string): void {
    this.conexionService.findByUserId(userId).then(conexiones => {
      const userList = conexiones.map(conexion => conexion.userId);
      this.server.emit('usuarios-conectados', userList);
    });
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAgregarTransaccion(client: Socket, payload: CreateTransaccionInput): Promise<void> {
    const transaccionGuardada = await this.transaccionService.create(payload);
    this.server.emit('transaccion-agregada', transaccionGuardada);
  }

  @SubscribeMessage('consultar-activos')
  async handleConsultarActivos(client: Socket): Promise<void> {
    const transaccionesActivas = await this.transaccionService.findAll();
    client.emit('activos', transaccionesActivas);
  }

  @SubscribeMessage('eliminar-transaccion')
  async handleEliminarTransaccion(client: Socket, id: number): Promise<void> {
    await this.transaccionService.softDelete(id);
    this.server.emit('transaccion-eliminada', id);
  }
}
