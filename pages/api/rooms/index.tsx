// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import {Room} from "@prisma/client"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
  erro: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|Room|Array<Room>>
) {
    
   if(req.method==='GET'){

    try{
        const allRooms = await prisma.room.findMany()
        res.send(allRooms)
    }catch{
        res.send({erro:'Erro ao buscar salas'})
    }
   }
   if(req.method ==="POST"){
    const {name,capacity,resources,photo } = req.body
    if(name&&capacity&&resources&&photo ){
        try{
            const roomCreated = await prisma.room.create({data:{
                name,capacity,resources,photo
            }})
            return res.send(roomCreated)
        }catch{
            return res.send({erro:"Erro ao criar sala"})
        }
    }
   }
   res.send({erro:"Erro ao acessar"})
   


}
