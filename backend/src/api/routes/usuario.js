import express from "express";
import usuarioController from '../controllers/usuario.js'

const router = express.Router();

router.post('/login/', usuarioController.login);

export default router;