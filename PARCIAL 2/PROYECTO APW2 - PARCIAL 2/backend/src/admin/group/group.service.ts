import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {

  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) { }

  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  async findAll() {
    const groups = await this.groupRepository.find();
    return { groups };
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
