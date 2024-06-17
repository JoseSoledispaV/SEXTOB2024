// src/repositories/guiaRepository.ts
import Guia, { GuiaDocument } from '../entities/guia';

const createGuia = async (fecha: string, horatransmision: string, escalarating: string, canalId: string, programaId: string): Promise<GuiaDocument> => {
  return await Guia.create({ fecha, horatransmision, escalarating, canal: canalId, programa: programaId });
};

const getGuiaById = async (id: string): Promise<GuiaDocument | null> => {
  return await Guia.findById(id).populate('canal').populate('programa').exec();
};
const getAllGuias = async (): Promise<GuiaDocument[]> => {
  return await Guia.find().populate('canal').populate('programa').exec();
};

export default {
  createGuia,
  getGuiaById,
  getAllGuias,
};