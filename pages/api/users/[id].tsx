// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { User } from "@prisma/client"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
    erro: string,

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | User>
) {

    if (req.method === 'GET') {
        const { id } = req.query
        if (typeof id === 'string') {

            const user = await prisma.user.findUnique({ where: { id: id } })

            if (user) {
                res.send(user)
            }
            else {
                res.send({ erro: "Usuário não encontrado" })
            }
        }
        else {
            res.send({ erro: "Usuário não encontrado" })
        }
    }
    if (req.method === 'PATCH') {
        const { id, name, email, photo, phonenumber, role } = req.body
        if (id && name && email && photo && phonenumber && role) {
            const userUpdated = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    id, name, email, photo, phonenumber, role
                }
            })
            if(userUpdated){
                res.send(userUpdated)
            }else{
                res.send({erro:"Erro ao atualizar usuário"})
            }
        }else{
            res.status(401).send({erro:"Erro ao atualizar o usuário. Campo em branco"})
        }

    }

}
