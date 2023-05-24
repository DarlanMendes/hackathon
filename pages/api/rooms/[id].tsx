// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { Room } from "@prisma/client"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
    erro: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Room>
) {

    if (req.method === "GET") {
        const { id } = req.query
        if (typeof id === 'number') {
            try {
                const room = await prisma.room.findUnique({ where: { id: id } })
                if (room) {
                 return   res.send(room)
                } else {
                 return   res.send({ erro: "Nenhuma sala corresponde a esse id" })
                }

            } catch {
              return  res.send({ erro: "Erro ao consultar sala" })
            }
        }
        else {
          return  res.send({ erro: "Erro ao consultar sala" })
        }
    }
    if (req.method === "PATCH") {
        const { id } = req.query
        const { name, capacity, resources, photo } = req.body
        if (name && capacity && resources && photo) {
            if (typeof id === 'number') {
                try {
                    const room = await prisma.room.update(
                        {
                            where:
                                { id: id }, data : {
                                    name,capacity,resources,photo
                                }
                        })
                    if (room) {
                       return res.send(room)
                    } else {
                       return res.send({ erro: "Nenhuma sala corresponde a esse id" })
                    }

                } catch {
                 return   res.send({ erro: "Erro ao consultar sala" })
                }
            }
        }

        else {
           return res.send({ erro: "Erro ao atualizar sala" })
        }
    }
    if(req.method === "DELETE"){
        const {id} = req.query
        if(typeof id === 'number'){
            try{
                const roomDeleted = await prisma.room.delete({where:{id}})
              return  res.send(roomDeleted)
            }catch{
               return res.send({erro:"Erro ao deletar sala"})
            }
        }else{
           return res.send({erro:"Erro ao deletar sala"})
        }
    }
    res.send({erro:"Erro ao acessar o servidor"})
}
