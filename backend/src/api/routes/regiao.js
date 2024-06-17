import express from "express";
import regiaoController from '../controllers/regiao.js'

const router = express.Router();

router.get('/', regiaoController.pegarTodasRegioes);

export default router;
