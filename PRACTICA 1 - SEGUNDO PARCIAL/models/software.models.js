const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SoftwareSchema = new Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  requerimientos: { type: String, required: true },
  idioma: { type: String, required: true },
  activo: { type: Boolean, default:true }
});

const SoftwareModel = mongoose.model('Software', SoftwareSchema);

module.exports = SoftwareModel;
