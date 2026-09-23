import express from 'express'
import router from './src/router/exercicio.js'
const app=express()
app.use(express.json())
const port = 3000

app.use(router)

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})