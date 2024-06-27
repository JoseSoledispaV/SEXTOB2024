// src/guia/guia.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GuiaService } from './guia.service';
import { Guia } from './entities/guia.entity';
import { CreateGuiaInput } from './dto/create-guia.input';
import { UpdateGuiaInput } from './dto/update-guia.input';

@Resolver(() => Guia)
export class GuiaResolver {
  constructor(private readonly guiaService: GuiaService) {}

  @Mutation(() => Guia)
  createGuia(@Args('createGuiaInput') createGuiaInput: CreateGuiaInput) {
    return this.guiaService.create(createGuiaInput);
  }

  @Query(() => [Guia], { name: 'guias' })
  findAll(@Args('estado', { type: () => Boolean, nullable: true }) estado?: boolean) {
    return this.guiaService.findAll(estado);
  }

  @Query(() => Guia, { name: 'guia' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.guiaService.findOne(id);
  }

  @Mutation(() => Guia)
  updateGuia(@Args('updateGuiaInput') updateGuiaInput: UpdateGuiaInput) {
    return this.guiaService.update(updateGuiaInput.id, updateGuiaInput);
  }

  @Mutation(() => Guia)
  removeGuia(@Args('id', { type: () => String }) id: string) {
    return this.guiaService.remove(id);
  }
}
