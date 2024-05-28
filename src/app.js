import express from 'express';
import cors from 'cors';

const app = express();

import index from './api/routes/index.js';
import pontoColetaRoute from './api/routes/ponto-coleta.js';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', pontoColetaRoute);

export default app;