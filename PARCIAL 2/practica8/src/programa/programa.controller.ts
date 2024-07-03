// src/programa/programa.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { CreateProgramaInput } from './dto/create-programa.input';
import { UpdateProgramaInput } from './dto/update-programa.input';

@Controller('programa')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Post()
  create(@Body() createProgramaDto: CreateProgramaInput) {
    return this.programaService.create(createProgramaDto);
  }

  @Get()
  findAll(@Query('estado') estado?: string) {
    const estadoBoolean = estado === 'true' ? true : estado === 'false' ? false : undefined;
    return this.programaService.findAll(estadoBoolean);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaInput) {
    return this.programaService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programaService.remove(id);
  }
}
