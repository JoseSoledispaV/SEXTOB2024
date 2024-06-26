
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CanalService } from './canal.service';
import { Canal } from './entities/canal.entity';
import { CreateCanalInput } from './dto/create-canal.input';
import { UpdateCanalInput } from './dto/update-canal.input';

@Resolver(() => Canal)
export class CanalResolver {
  constructor(private readonly canalService: CanalService) {}

  @Mutation(() => Canal)
  createCanal(@Args('createCanalInput') createCanalInput: CreateCanalInput) {
    return this.canalService.create(createCanalInput);
  }

  @Query(() => [Canal], { name: 'canales' })
  findAll(@Args('estado', { type: () => Boolean, nullable: true }) estado?: boolean) {
    return this.canalService.findAll(estado);
  }

  @Query(() => Canal, { name: 'canal' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.canalService.findOne(id);
  }

  @Mutation(() => Canal)
  updateCanal(@Args('updateCanalInput') updateCanalInput: UpdateCanalInput) {
    return this.canalService.update(updateCanalInput.id, updateCanalInput);
  }

  @Mutation(() => Canal)
  removeCanal(@Args('id', { type: () => String }) id: string) {
    return this.canalService.remove(id);
  }
}
