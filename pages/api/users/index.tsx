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
    res: NextApiResponse<User | Erro>
) {

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
                res.send(userCreated)
            } catch {
                res.send({ erro: "Erro ao criar usuário" })
            }





        } else {
            res.send({ erro: "Erro ao criar usuario" })
        }
    }

}
