import Express, { Router } from 'express';
import { PrismaClient } from "@prisma/client"

const userRouter = Router()
const prisma = new PrismaClient()

userRouter.get('/users',async (req,res) => {
  const users = await prisma.user.findMany({});
    res.json(users)
})

userRouter.post('/create', async (req,res) => {
 prisma.user.create({
        data:{
            name: 'Eto12',
            email: 'Eto12yt@gmail.com',
            password: "123",
        },
    })
    console.log("usuario criado")
})
export default userRouter