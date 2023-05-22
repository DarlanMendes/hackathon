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
  res: NextApiResponse<Data|Event>
) {
    
   const {id} =  req.query
    if(typeof id ===  'string'){
        
        const event = await prisma.event.findUnique({where:{id:id}})
        console.log(event)
        if(event){
            res.send(event)
        }
        else{
            res.send({erro:"Usuário não encontrado"})
        }
    }
    else{
        res.send({erro:"Usuário não encontrado"})
    }

}
