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
