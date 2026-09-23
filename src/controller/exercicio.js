import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {

    operacoes(req, res) {
    res.send("Essa API pode converter Celsius → Fahrenheit; Fahrenheit → Celsius; Celsius → Kelvin.")
}
    CF(req, res) {
    try {
        const C = req.body.C
        const Fahrenheit  = ServiceExercicio.CF(C)
        res.send({Fahrenheit })
    } catch (error) {
        res.send({message: error.message}) 
        }
   
}
    FC(req, res) {
    try {
        const F = req.body.F
        const Celsius = ServiceExercicio.FC(F)
        res.send({Celsius})
    } catch (error) {
        res.send({message: error.message})
    }

}
    CK(req, res) {
    try {
        const C = req.body.C
        const Kelvin = ServiceExercicio.CK(C)
        res.send({Kelvin})
    } catch (error) {
        res.send({message: error.message})
    }

}

}

export default new ControllerExercicio()