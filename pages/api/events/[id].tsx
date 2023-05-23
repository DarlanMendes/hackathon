// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Event } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
  erro: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|Event>
) {
    
    if (req.method === "GET") {
        const { id } = req.query
        if (typeof id === 'number') {
            try {
                const event = await prisma.event.findUnique({ where: { id: id } })
                if (event) {
                 return   res.send(event)
                } else {
                 return   res.send({ erro: "Nenhum evento corresponde a esse id" })
                }

            } catch {
              return  res.send({ erro: "Erro ao consultar evento" })
            }
        }
        else {
          return  res.send({ erro: "Erro ao consultar evento" })
        }
    }
    if (req.method === "PATCH") {
        const { id } = req.query
        const { nome, description, userEvents, rooms  } = req.body
        if (nome && description && userEvents && rooms ) {
            if (typeof id === 'number') {
                try {
                    const event = await prisma.event.update(
                        {
                            where:
                                { id: id }, data : {
                                    
                                }
                        })
                    if (event) {
                       return res.send(event)
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
                const eventDeleted = await prisma.event.delete({where:{id}})
              return  res.send(eventDeleted)
            }catch{
               return res.send({erro:"Erro ao deletar evento"})
            }
        }else{
           return res.send({erro:"Erro ao deletar evento"})
        }
    }
    res.send({erro:"Erro ao acessar o servidor"})
}
