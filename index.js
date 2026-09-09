import express from 'express'
const app= express()
app.use(express.json())
const port = 3000


app.get("/api/operacoes", (req,res) => {
    res.send("Essa API pode converter Celsius → Fahrenheit; Fahrenheit → Celsius; Celsius → Kelvin.")
})

app.post("/api/C/F", (req,res) => {
    const C = req.body.C
    const Fahrenheit  = (C*9/5) + 32
    res.send({Fahrenheit })
})

app.post("/api/F/C", (req,res) => {
    const F = req.body.F
    const Celsius = (F-32) *5/9
    res.send({Celsius})
})

app.post("/api/C/K", (req,res) => {
    const C = req.body.C
    const Kelvin = C + 273.15
    res.send({Kelvin})
})


app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})