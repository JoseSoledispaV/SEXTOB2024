const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PCSchema = new Schema({
  id: { type: String, required: true },
  descripcion: { type: String, required: true },
  serie: { type: String, required: true },
  partes:    {type: String, required: true } ,
  piezas:  { type: String, required: true },
  activo: { type: Boolean, default:true }


});

const PCModel = mongoose.model('PC', PCSchema);

module.exports = PCModel;
