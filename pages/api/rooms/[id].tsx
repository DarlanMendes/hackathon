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
  res: NextApiResponse<Data|Room>
) {
    
   const {id} =  req.query
    if(typeof id ===  'number'){
        
        const room = await prisma.room.findUnique({where:{id:id}})
        console.log(room)
        if(room){
            res.send(room)
        }
        else{
            res.send({erro:"Usuário não encontrado"})
        }
    }
    else{
        res.send({erro:"Usuário não encontrado"})
    }

}
