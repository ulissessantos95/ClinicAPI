import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(express.json())

app.get('/usuarios', async (request, response)=>{
    try{
        const usuarios = await PrismaClient.usuario.findMany();
        return response.json("usuarios")
    }

    catch(e){
        console.log(e)
    }
})

app.listen(3000, ()=> console.log("Api rodando"))