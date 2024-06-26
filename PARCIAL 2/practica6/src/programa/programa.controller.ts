// src/programa/programa.controller.ts
import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';

@Controller('programa')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Get()
  findAll() {
    return this.programaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaService.findOne(id);
  }

  @Post()
  create(@Body() createProgramaDto: CreateProgramaDto) {
    return this.programaService.create(createProgramaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programaService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programaService.remove(id);
  }
}
