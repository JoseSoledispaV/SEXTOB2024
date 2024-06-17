// src/repositories/canalRepository.ts
import Canal, { CanalDocument } from '../entities/canal';

const createCanal = async (nombre: string): Promise<CanalDocument> => {
  return await Canal.create({ nombre });
};

const getCanalById = async (id: string): Promise<CanalDocument | null> => {
  return await Canal.findById(id).populate('guias').exec();
};

const getAllCanales = async (): Promise<CanalDocument[]> => {
  return await Canal.find().populate('guias').exec();
};

export default {
  createCanal,
  getCanalById,
  getAllCanales
};
