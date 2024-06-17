const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BitacoraSchema = new Schema({
  id: { type: String, required: true },
  idpc: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "PC",
    required: true
  },
  idsoftware: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Software",
    required: true
  },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  detalleinstalacion: { type: String, required: true },
  activo: { type: Boolean, default:true }
});

const BitacoraModel = mongoose.model('Bitacora', BitacoraSchema);

module.exports = BitacoraModel;
