const express = require ('express');

const app = express()
app.use(express.json)

app.ise ('/', (request , response)=> {
return response.json("Olá R Dias")

})

app.listen( 3000, ()=> console.log('api rodando'))