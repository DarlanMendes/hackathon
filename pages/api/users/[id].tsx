// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { User } from "@prisma/client"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Data = {
    erro: string,

}
type UserReturned={
    id:string,
    name:string,
    email:string,
    phonenumber:string,
    photo:string,
    role:string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | User |UserReturned >
) {

    if (req.method === 'GET') {
        const { id } = req.query
        if (typeof id === 'string') {

            const user = await prisma.user.findUnique({ where: { id: id } })

            if (user) {
                const {id,name,email,phonenumber,photo,role}= user
                const userFound = {id, name,email,phonenumber,photo,role}
                return res.send(userFound)
            }
            else {
                return res.send({ erro: "Usuário não encontrado" })
            }
        }
        else {
            return res.send({ erro: "Usuário não encontrado" })
        }
    }
    if (req.method === 'PATCH') {
        const { id } = req.query
        const { name, email, photo, phonenumber, role } = req.body
        if (id && name && email && photo && phonenumber && role) {
            if (typeof id === "string") {
                try { 
                    const userUpdated = await prisma.user.update({
                        where: {
                            id
                        },
                        data: {
                            name, email, photo, phonenumber, role
                        }
                    })
                    res.send (userUpdated)
                }
                catch {
                    return res.status(401).send({ erro: "Falha ao atualizar o usuário" })
                }

            } else {
                return res.status(401).send({ erro: "Erro ao atualizar o usuário. Campo em branco" })
            }

        }
    }

    if (req.method === 'DELETE') {
        const { id } = req.query
        try {
            if (typeof id === "string") { const userDeleted = await prisma.user.delete({ where: { id } }) }
            else { return res.send({ erro: "Erro em deletar o usuário" }) }
        }
        catch {
            return res.send({ erro: "Erro em deletar o usuário" })
        }
    }
   
   return res.send({ erro: "Erro ao acessar o servidor" })
}
//Criado por Rafael Formiga