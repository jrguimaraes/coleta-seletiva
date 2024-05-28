import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});
const db = {
    query: (text, params) => pool.query(text, params),
};

export default db;