import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

import index from './api/routes/index.js';
import pontoColetaRoute from './api/routes/ponto-coleta.js';
import regiaoRoute from './api/routes/regiao.js';
import usuarioRoute from './api/routes/usuario.js';

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

app.use(index);
app.use('/usuarios/', usuarioRoute);
app.use('/pontos-coleta/', pontoColetaRoute);
app.use('/regioes/', regiaoRoute);

export default app;