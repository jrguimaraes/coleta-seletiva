import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

const pool = new Pool({
    connectionString: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
});

const pool_padrao = new Pool({
    connectionString: `${process.env.DATABASE_URL}/${process.env.DATABASE_DEFAULT_NAME}`
}); 

export const db = {
    query: (text, params) => pool.query(text, params),
};

export const db_padrao = {
    query: (text, params) => pool_padrao.query(text, params),
};