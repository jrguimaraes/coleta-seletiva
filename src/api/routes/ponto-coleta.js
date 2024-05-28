import express from "express";
import pontoColetaController from '../controllers/ponto-coleta.js'

const router = express.Router();

router.get('/pontos-coleta', pontoColetaController.pegarTodosPontosColetas);
router.get('/pontos-coleta/:id', pontoColetaController.pegarPontoColeta);
router.post('/pontos-coleta', pontoColetaController.criarPontoColeta);
router.put('/pontos-coleta/:id', pontoColetaController.atualizarPontoColeta);
router.delete('/pontos-coleta/:id', pontoColetaController.deletarPontoColeta);

export default router;
