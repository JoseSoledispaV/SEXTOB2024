// src/programa/programa.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgramaService } from './programa.service';
import { Programa } from './entities/programa.entity';
import { CreateProgramaInput } from './dto/create-programa.input';
import { UpdateProgramaInput } from './dto/update-programa.input';

@Resolver(() => Programa)
export class ProgramaResolver {
  constructor(private readonly programaService: ProgramaService) {}

  @Mutation(() => Programa)
  createPrograma(@Args('createProgramaInput') createProgramaInput: CreateProgramaInput) {
    return this.programaService.create(createProgramaInput);
  }

  @Query(() => [Programa], { name: 'programas' })
  findAll(@Args('estado', { type: () => Boolean, nullable: true }) estado?: boolean) {
    return this.programaService.findAll(estado);
  }

  @Query(() => Programa, { name: 'programa' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.programaService.findOne(id);
  }

  @Mutation(() => Programa)
  updatePrograma(@Args('updateProgramaInput') updateProgramaInput: UpdateProgramaInput) {
    return this.programaService.update(updateProgramaInput.id, updateProgramaInput);
  }

  @Mutation(() => Programa)
  removePrograma(@Args('id', { type: () => String }) id: string) {
    return this.programaService.remove(id);
  }
}
