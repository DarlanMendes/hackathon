// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import {Event} from "@prisma/client"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
  erro: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|Event|Array<Event>>
) {
    
   if(req.method==='GET'){

    try{
        const allEvents = await prisma.event.findMany()
        res.send(allEvents)
    }catch{
        res.send({erro:'Erro ao buscar salas'})
    }
   }
   if(req.method ==="POST"){
    const {nome,description,roomId,dateHourStartsAt,dateHourFinishesAt } = req.body
    if(nome&&description&&roomId&&dateHourStartsAt&&dateHourFinishesAt ){
        try{
            const eventCreated = await prisma.event.create({data:{
                nome,description,dateHourStartsAt,dateHourFinishesAt,roomId
            }})
            return res.send(eventCreated)
        }catch{
            return res.send({erro:"Erro ao criar sala"})
        }
    }
   }
   res.send({erro:"Erro ao acessar"})
   


}
