import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';

@Controller('canal')
export class CanalController {
  constructor(private readonly canalService: CanalService) {}

  @Get()
  findAll() {
    return this.canalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canalService.findOne(id);
  }

  @Post()
  create(@Body() createCanalDto: CreateCanalDto) {
    return this.canalService.create(createCanalDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCanalDto: UpdateCanalDto) {
    return this.canalService.update(id, updateCanalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canalService.remove(id);
  }
}
