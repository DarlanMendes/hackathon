// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

type Erro = {
    erro: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | Erro | Array<User>>
) {

    if (req.method === 'GET'){
        try{
            const allUsers = await prisma.user.findMany()
            return res.send(allUsers)
        } catch{
            return res.send({erro:"Erro ao carregar os usuários"})
        }
    }
    
    if (req.method === 'POST') {

        const user: User = req.body

        const { name, email, phonenumber, photo } = user

        if (name && email && phonenumber && photo) {
            console.log("entrou")
            try {
                const userCreated = await prisma.user.create({
                    data: {
                        name,
                        email,
                        phonenumber,
                        photo,

                    }
                })
                return res.send(userCreated)
            } catch {
                return res.send({ erro: "Erro ao criar usuário" })
            }

        } else {
            return res.send({ erro: "Erro ao criar usuario" })
        }
    }
    
    return res.send ({erro: "Erro ao acessar o servidor"})
}
