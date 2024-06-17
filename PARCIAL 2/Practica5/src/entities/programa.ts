// src/entities/programa.ts
import mongoose, { Document, Schema } from 'mongoose';
import { GuiaDocument } from './guia';

export interface ProgramaDocument extends Document {
  programatv: string;
  categoria: string;
  tipo: string;
  guias: GuiaDocument['_id'][];
}

const ProgramaSchema = new Schema({
  programatv: { type: String, required: true },
  categoria: { type: String, required: true },
  tipo: { type: String, required: true },
  guias: [{ type: Schema.Types.ObjectId, ref: 'Guia' }],
});

export default mongoose.model<ProgramaDocument>('Programa', ProgramaSchema);
