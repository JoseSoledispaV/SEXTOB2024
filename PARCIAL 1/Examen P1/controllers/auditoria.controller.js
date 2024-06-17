const db = require("../models");
const Auditoria = db.auditoria;
const PC = db.pc;
const Software = db.software;
const Bitacora = db.bitacora;


exports.createAuditoria = async (req, res) => {
  try {
    const auditoria = new Auditoria({
      ...req.body,
    });

    await auditoria.save();

    return res.status(201).json({ message: "Auditoría creada exitosamente." });
  } catch (error) {
    console.error("Error al crear auditoría:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getAllAuditorias = async (req, res) => {
  try {
    const auditorias = await Auditoria.find();
    return res.status(200).json(auditorias);
  } catch (error) {
    console.error("Error al obtener todas las auditorías:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getAuditoriaById = async (req, res) => {
  try {
    const auditoriaId = req.params.auditoriaId;
    const auditoria = await Auditoria.findById(auditoriaId);

    if (!auditoria) {
      return res.status(404).json({ message: "Auditoría no encontrada." });
    }

    return res.status(200).json(auditoria);
  } catch (error) {
    console.error("Error al obtener auditoría por ID:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.updateAuditoria = async (req, res) => {
  try {
    

    const auditoriaId = req.params.auditoriaId;
    const auditoria = await Auditoria.findByIdAndUpdate(auditoriaId, req.body);

    if (!auditoria) {
      return res.status(404).json({ message: "Auditoría no encontrada." });
    }

    return res.status(200).json({ message: "Auditoría actualizada exitosamente." });
  } catch (error) {
    console.error("Error al actualizar auditoría:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

//SOFTWARE
exports.deleteAuditoriaMasiva = async (req, res) => {
  try {
    const count = await Auditoria.countDocuments();

    if (count === 0) {
      return res.status(404).json({ message: "No existen documentos en la tabla de auditoría." });
    }

    // Eliminar todos los documentos de la tabla de auditoría
    await Auditoria.deleteMany();

    // Restaurar el estado activo en todas las entidades
    await Software.updateMany({ activo: true });
    await PC.updateMany({ activo: true });
    await Bitacora.updateMany({ activo: true });

    return res.status(200).json({ message: "Todos los elementos han sido eliminados de la tabla de auditoría de forma masiva." });
  } catch (error) {
    console.error("Error al eliminar auditoría masivamente:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};


//SOFTWARE
exports.deleteAuditoriaSoftware = async (req, res) => {
  try {
    const auditoriaId = req.params.auditoriaId;

    const {id_auditado} = await Auditoria.findById(auditoriaId);

    const software = await Software.findByIdAndUpdate(id_auditado, { activo: true });
  

    const auditoria = await Auditoria.findByIdAndDelete(auditoriaId);

    if (!auditoria) {
      return res.status(404).json({ message: "Auditoría no encontrada." });
    }
    

    return res.status(200).json({ message: "Auditoría eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar auditoría:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};


//PC
exports.deleteAuditoriaPC = async (req, res) => {
  try {
    const auditoriaId = req.params.auditoriaId;

    const {id_auditado} = await Auditoria.findById(auditoriaId);

    const pc = await PC.findByIdAndUpdate(id_auditado, { activo: true });
  

    const auditoria = await Auditoria.findByIdAndDelete(auditoriaId);

    if (!auditoria) {
      return res.status(404).json({ message: "Auditoría no encontrada." });
    }
    

    return res.status(200).json({ message: "Auditoría eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar auditoría:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

//BITACORA
exports.deleteAuditoriaBitacora = async (req, res) => {
  try {
    const auditoriaId = req.params.auditoriaId;

    const {id_auditado} = await Auditoria.findById(auditoriaId);

    const bitacora = await Bitacora.findByIdAndUpdate(id_auditado, { activo: true });
  

    const auditoria = await Auditoria.findByIdAndDelete(auditoriaId);

    if (!auditoria) {
      return res.status(404).json({ message: "Auditoría no encontrada." });
    }
    

    return res.status(200).json({ message: "Auditoría eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar auditoría:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

