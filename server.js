import Express from 'express';
import { PrismaClient } from "@prisma/client"
import userRouter from './routes/users.js';

const prisma = new PrismaClient;
const app = Express();

app.use(userRouter)
app.use(Express.json())

app.get('/', (req,res) => {
    res.send("Servidor rodando!")
})

const PORTA = 3005
app.listen(PORTA,() =>{
    console.log("Servidor vivo na porta: "+PORTA)
})