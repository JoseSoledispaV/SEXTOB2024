// src/canal/canal.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CreateCanalInput } from './dto/create-canal.input';
import { UpdateCanalInput } from './dto/update-canal.input';

@Controller('canal')
export class CanalController {
  constructor(private readonly canalService: CanalService) {}

  @Post()
  create(@Body() createCanalDto: CreateCanalInput) {
    return this.canalService.create(createCanalDto);
  }

  @Get()
  findAll(@Query('estado') estado?: string) {
    const estadoBoolean = estado === 'true' ? true : estado === 'false' ? false : undefined;
    return this.canalService.findAll(estadoBoolean);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanalDto: UpdateCanalInput) {
    return this.canalService.update(id, updateCanalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canalService.remove(id);
  }
}
