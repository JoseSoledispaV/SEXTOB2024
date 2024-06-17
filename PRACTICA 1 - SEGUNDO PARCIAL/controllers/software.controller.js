const db = require("../models");
const Software = db.software;
const Auditoria = db.auditoria;


exports.createSoftware = async (req, res) => {
  try {
    const software = new Software({
      ...req.body,
    });

    await software.save();

    return res.status(201).json({ message: "Software creado exitosamente." });
  } catch (error) {
    console.error("Error al crear software:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getAllSoftware = async (req, res) => {
  try {
    const softwareList = await Software.find({ activo: true }); // Filtrar por activo:true
    return res.status(200).json(softwareList);
  } catch (error) {
    console.error("Error al obtener todos los software:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.getSoftwareById = async (req, res) => {
  try {
    const softwareId = req.params.softwareId;
    const software = await Software.findOne({ _id: softwareId, activo: true }); // Filtrar por activo:true

    if (!software) {
      return res.status(404).json({ message: "Software no encontrado." });
    }

    return res.status(200).json(software);
  } catch (error) {
    console.error("Error al obtener software por ID:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};


exports.updateSoftware = async (req, res) => {
  try {
    const softwareId = req.params.softwareId;
    const software = await Software.findByIdAndUpdate(softwareId, req.body);

    if (!software) {
      return res.status(404).json({ message: "Software no encontrado." });
    }

    return res.status(200).json({ message: "Software actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar software:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

exports.deleteSoftware = async (req, res) => {
  try {
    const softwareId = req.params.softwareId;

   
    const softwareInfo = await Software.findById(softwareId);

  
    const software = await Software.findByIdAndUpdate(softwareId, { activo: false });

    if (!software) {
      return res.status(404).json({ message: "Software no encontrado." });
    }

 
    const auditoria = new Auditoria({
      detalle: "ELIMINÓ EL ELEMENTO CON ID (" + softwareId + ") EN LA ENTIDAD (Software)",
      fecha: Date.now(),
      id_auditado: softwareId,
      entidadRef: 'Software'
    });

    await auditoria.save();

    return res.status(200).json({ message: "Software eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar software:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
