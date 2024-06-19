// src/guia/guia.controller.ts
import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';

@Controller('guia')
export class GuiaController {
  constructor(private readonly guiaService: GuiaService) {}

  @Get()
  findAll() {
    return this.guiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guiaService.findOne(id);
  }

  @Post()
  create(@Body() createGuiaDto: CreateGuiaDto) {
    return this.guiaService.create(createGuiaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGuiaDto: UpdateGuiaDto) {
    return this.guiaService.update(id, updateGuiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guiaService.remove(id);
  }
}
