import express from 'express';

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo a API Node.js + PostgreSQL',
    });
});

export default router;
