const express = require('express')
const app = express()
const puerto = 8888

app.get('/', (req,res)=> {
    res.status(200).send('<h1>Hola root</h1>')
})

app.get('/test', (req,res)=> {
    res.send('<p>Hola test</p>')
})

app.listen(puerto,()=> {
    console.log(`Servidor escuchando en puerto ${puerto}`)
})