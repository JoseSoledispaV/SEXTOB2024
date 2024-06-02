const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuditoriaSchema = new Schema({
  detalle: { type: String, required: true },
  fecha: { type: Date, required: true },
  id_auditado: {
    type:String, required:true
  },
  activo:{type:Boolean, default:true}
});

const AuditoriaModel = mongoose.model('Auditoria', AuditoriaSchema);

module.exports = AuditoriaModel;
