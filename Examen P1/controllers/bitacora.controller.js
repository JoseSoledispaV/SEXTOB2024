const db = require("../models");
const Bitacora = db.bitacora;
const Auditoria = db.auditoria;

exports.createBitacora = async (req, res) => {
  try {
    const bitacora = new Bitacora({
      ...req.body,
    });

    await bitacora.save();

    return res.status(201).json({ message: "Bitácora creada exitosamente." });
  } catch (error) {
    console.error("Error al crear bitácora:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getAllBitacoras = async (req, res) => {
  try {
    const bitacoras = await Bitacora.find({ activo: true }).populate('idpc').populate('idsoftware');
    return res.status(200).json(bitacoras);
  } catch (error) {
    console.error("Error al obtener todas las bitácoras:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getBitacoraById = async (req, res) => {
  try {
    const bitacoraId = req.params.bitacoraId;
    const bitacora = await Bitacora.findOne({ _id: bitacoraId, activo: true }).populate('idpc').populate('idsoftware');

    if (!bitacora) {
      return res.status(404).json({ message: "Bitácora no encontrada." });
    }

    return res.status(200).json(bitacora);
  } catch (error) {
    console.error("Error al obtener bitácora por ID:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};


exports.updateBitacora = async (req, res) => {
  try {
    const bitacoraId = req.params.bitacoraId;
    const bitacora = await Bitacora.findByIdAndUpdate(bitacoraId, req.body);

    if (!bitacora) {
      return res.status(404).json({ message: "Bitácora no encontrada." });
    }

    return res.status(200).json({ message: "Bitácora actualizada exitosamente." });
  } catch (error) {
    console.error("Error al actualizar bitácora:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.deleteBitacora = async (req, res) => {
  try {
    const bitacoraId = req.params.bitacoraId;

    // Obtenemos la información de la bitácora antes de eliminarla
    const bitacoraInfo = await Bitacora.findById(bitacoraId);

    // Realizamos la eliminación lógica
    const bitacora = await Bitacora.findByIdAndUpdate(bitacoraId, { activo: false });

    if (!bitacora) {
      return res.status(404).json({ message: "Bitácora no encontrada." });
    }

    // Insertamos una entrada en la tabla de auditoría
    const auditoria = new Auditoria({
      detalle: "ELIMINÓ EL ELEMENTO CON ID (" + bitacoraId + ") EN LA ENTIDAD (Bitácora)",
      fecha: Date.now(),
      id_auditado: bitacoraId,
      entidadRef: 'Bitacora'
    });

    await auditoria.save();

    return res.status(200).json({ message: "Bitácora eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar bitácora:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};


