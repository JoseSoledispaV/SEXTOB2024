import { Injectable } from '@nestjs/common';
import { CreateCursoVirtualDto } from './dto/create-curso-virtual.dto';
import { UpdateCursoVirtualDto } from './dto/update-curso-virtual.dto';
import { CursoVirtual } from './entities/curso-virtual.entity';

@Injectable()
export class CursoVirtualService {
  private cursos: CursoVirtual[] = [];
  private currentId = 1;

  create(createCursoVirtualDto: CreateCursoVirtualDto) {
    const newCurso = {
      id: this.currentId++,
      ...createCursoVirtualDto,
    };
    this.cursos.push(newCurso);
    return newCurso;
  }

  findAll() {
    return this.cursos;
  }

  findOne(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }

  findByCodigo(codigo: string) {
    return this.cursos.find(curso => curso.codigo === codigo);
  }

  findWithMoreThanHundredHours() {
    return this.cursos.filter(curso => curso.numeroHoras > 100);
  }

  update(id: number, updateCursoVirtualDto: UpdateCursoVirtualDto) {
    const cursoIndex = this.cursos.findIndex(curso => curso.id === id);
    if (cursoIndex === -1) {
      return null;
    }
    this.cursos[cursoIndex] = {
      ...this.cursos[cursoIndex],
      ...updateCursoVirtualDto,
    };
    return this.cursos[cursoIndex];
  }

  remove(id: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
  }

  softRemove(id: number) {
    const curso = this.cursos.find(curso => curso.id === id);
    if (curso) {
      curso.isDeleted = true;
    }
  }
}
