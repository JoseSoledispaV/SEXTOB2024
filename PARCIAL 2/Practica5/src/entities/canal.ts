// src/entities/canal.ts
import mongoose, { Document, Schema } from 'mongoose';
import { GuiaDocument } from './guia';

export interface CanalDocument extends Document {
  nombre: string;
  guias: GuiaDocument['_id'][];
}

const CanalSchema = new Schema({
  nombre: { type: String, required: true },
  guias: [{ type: Schema.Types.ObjectId, ref: 'Guia' }],
});

export default mongoose.model<CanalDocument>('Canal', CanalSchema);
