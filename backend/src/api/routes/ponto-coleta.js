import express from "express";
import pontoColetaController from '../controllers/ponto-coleta.js'

const router = express.Router();

router.get('/', pontoColetaController.pegarTodosPontosColetas);
router.get('/:id', pontoColetaController.pegarPontoColeta);
router.post('/', pontoColetaController.criarPontoColeta);
router.put('/:id', pontoColetaController.atualizarPontoColeta);
router.delete('/:id', pontoColetaController.deletarPontoColeta);

export default router;
