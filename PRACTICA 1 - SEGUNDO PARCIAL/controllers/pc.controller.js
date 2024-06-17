const db = require("../models");
const PC = db.pc;
const Auditoria = db.auditoria;


exports.createPC = async (req, res) => {
  try {
    const pc = new PC({
      ...req.body,
    });

    await pc.save();

    return res.status(201).json({ message: "PC creado exitosamente." });
  } catch (error) {
    console.error("Error al crear PC:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getAllPCs = async (req, res) => {
  try {
    const pcs = await PC.find({ activo: true }); // Filtrar por activo:true
    return res.status(200).json(pcs);
  } catch (error) {
    console.error("Error al obtener todos los PCs:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getPCById = async (req, res) => {
  try {
    const pcId = req.params.pcId;
    const pc = await PC.findOne({ _id: pcId, activo: true }); // Filtrar por activo:true

    if (!pc) {
      return res.status(404).json({ message: "PC no encontrado." });
    }

    return res.status(200).json(pc);
  } catch (error) {
    console.error("Error al obtener PC por ID:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.updatePC = async (req, res) => {
  try {
    const pcId = req.params.pcId;
    const pc = await PC.findByIdAndUpdate(pcId, req.body);

    if (!pc) {
      return res.status(404).json({ message: "PC no encontrado." });
    }

    return res.status(200).json({ message: "PC actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar PC:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.deletePC = async (req, res) => {
  try {
    const pcId = req.params.pcId;

    // Obtenemos la información del PC antes de eliminarlo
    const pcInfo = await PC.findById(pcId);

    // Realizamos la eliminación lógica
    const pc = await PC.findByIdAndUpdate(pcId, { activo: false });

    if (!pc) {
      return res.status(404).json({ message: "PC no encontrado." });
    }


    const auditoria = new Auditoria({
      detalle:"ELIMINÓ EL ELEMENTO CON ID (" + pcId + ") EN LA ENTIDAD (PC)" ,
      fecha: Date.now(),
      id_auditado: pcId,
    });

    await auditoria.save();


    return res.status(200).json({ message: "PC eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar PC:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
