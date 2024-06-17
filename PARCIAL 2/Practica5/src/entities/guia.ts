// src/entities/guia.ts
import mongoose, { Document, Schema } from 'mongoose';
import { CanalDocument } from './canal';
import { ProgramaDocument } from './programa';

export interface GuiaDocument extends Document {
  fecha: string;
  horatransmision: string;
  escalarating: string;
  canal: CanalDocument['_id'];
  programa: ProgramaDocument['_id'];
}

const GuiaSchema = new Schema({
  fecha: { type: String, required: true },
  horatransmision: { type: String, required: true },
  escalarating: { type: String, required: true },
  canal: { type: Schema.Types.ObjectId, ref: 'Canal', required: true },
  programa: { type: Schema.Types.ObjectId, ref: 'Programa', required: true },
});

export default mongoose.model<GuiaDocument>('Guia', GuiaSchema);
