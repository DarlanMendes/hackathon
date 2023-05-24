// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'
import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
// const JWTsecret = process.env.NEXT_PUBLIC_JWT_SECRET
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

        const { name, email, phonenumber, photo, password} = user
        let passwordHashed
        if (name && email && phonenumber && photo) {
            bcrypt.hash(password?password:email, 10, async (err:any, hash:string) => {
                if (err) {
                  return res.send({erro:"Erro ao validar senha"})
                } else {
                  passwordHashed = hash
                // sucesso hash password 
                try {
                    if(passwordHashed){
                        const userCreated = await prisma.user.create({
                            data: {
                                name,
                                email,
                                phonenumber,
                                photo,
                                password:passwordHashed
                            }
                        })
                        console.log("Created ok")
                        return res.send(userCreated)
                    }else{
                        return res.send({ erro: "Erro ao criar usuário" })
                    }
                    
                   
                } catch {
                    return res.send({ erro: "Erro ao criar usuário" })
                }
                }
              });
              

        } else {
            return res.send({ erro: "Erro ao criar usuario" })
        }
    }
    
     
    return res.send ({erro: "Erro ao acessar o servidor"})
}
//desenvolvido por Rafael Formiga / Darlan Mendes