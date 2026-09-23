import express from 'express'
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router()

router.get("/api/operacoes", ControllerExercicio.operacoes)
router.post("/api/CF", ControllerExercicio.CF)
router.post("/api/FC", ControllerExercicio.FC)
router.post("/api/CK", ControllerExercicio.CK)

export default router