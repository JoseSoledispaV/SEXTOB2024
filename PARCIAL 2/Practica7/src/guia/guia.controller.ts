// src/guia/guia.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { CreateGuiaInput } from './dto/create-guia.input';
import { UpdateGuiaInput } from './dto/update-guia.input';

@Controller('guia')
export class GuiaController {
  constructor(private readonly guiaService: GuiaService) {}

  @Post()
  create(@Body() createGuiaDto: CreateGuiaInput) {
    return this.guiaService.create(createGuiaDto);
  }

  @Get()
  findAll(@Query('estado') estado?: string) {
    const estadoBoolean = estado === 'true' ? true : estado === 'false' ? false : undefined;
    return this.guiaService.findAll(estadoBoolean);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guiaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuiaDto: UpdateGuiaInput) {
    return this.guiaService.update(id, updateGuiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guiaService.remove(id);
  }
}
