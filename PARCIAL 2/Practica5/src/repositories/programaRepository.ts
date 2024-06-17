// src/repositories/programaRepository.ts
import Programa, { ProgramaDocument } from '../entities/programa';

const createPrograma = async (programatv: string, categoria: string, tipo: string): Promise<ProgramaDocument> => {
  return await Programa.create({ programatv, categoria, tipo });
};

const getProgramaById = async (id: string): Promise<ProgramaDocument | null> => {
  return await Programa.findById(id).populate('guias').exec();
};

const getAllProgramas = async (): Promise<ProgramaDocument[]> => {
  return await Programa.find().populate('guias').exec();
};

export default {
  createPrograma,
  getProgramaById,
  getAllProgramas,
};