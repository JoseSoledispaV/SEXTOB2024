import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () 


    const result= await  prisma.pc.findFirst({ where: { id: 1 }} )
    const result2 = await prisma.software.update({
        where: { id: 1 },
        data: { 
            bitacora: false,
        },
    })
// Colección: PC
{
    "_id": ObjectId,
    "nombre": String,
    "descripcion": String,
    "estado": { "type": String, "enum": ["Activo", "Pendiente", "Eliminado"], "default": "Activo" },
    "hardware": { "type": ObjectId, "ref": "Hardware" },
    "software": { "type": ObjectId, "ref": "Software" }
  }
  
  // Colección: SOFTWARE
  {
    "_id": ObjectId,
    "nombre": String,
    "version": String,
    "estado": { "type": String, "enum": ["Activo", "Pendiente", "Eliminado"], "default": "Activo" }
  }
  
  // Colección: HARDWARE
  {
    "_id": ObjectId,
    "nombre": String,
    "descripcion": String,
    "estado": { "type": String, "enum": ["Activo", "Pendiente", "Eliminado"], "default": "Activo" }
  }