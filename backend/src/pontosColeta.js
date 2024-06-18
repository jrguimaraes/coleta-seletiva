import { db, db_padrao } from './config/database.js';

const pontosColeta = [
    { nome: 'Avelar', lat: -22.321248326590613, long: -43.40334993342208 },
    { nome: 'Bela Vista', lat: -22.40514296180025, long: -43.447566380564616 },
    { nome: 'Vista Alegre', lat: -22.318875363658748, long: -43.38092734877607 },
    { nome: 'Coqueiros', lat: -22.37612113994922, long: -43.34997785080695 },
    { nome: 'Arcozelo', lat: -22.40356390349431, long: -43.42818151544772 },
    { nome: 'Poaia', lat: -22.416219108185444, long: -43.43413901244192 },
    { nome: 'Araçá', lat: -22.417583832112452, long: -43.417585076721366 },
    { nome: 'Recanto', lat: -22.430328679383873, long: -43.429017486597935 },
    { nome: 'Monte alegre', lat: -22.440423405183196, long: -43.44082923514238 },
    { nome: 'Palmares', lat: -22.45139908459516, long: -43.403445435078886 },
];
const regioes = [
    { id: 1, nome: 'centro-1' },
    { id: 2, nome: 'centro-2' },
    { id: 3, nome: 'esperança' },
    { id: 4, nome: 'alto do recanto' },
    { id: 5, nome: 'encanto' },
    { id: 6, nome: 'recanto' },
    { id: 7, nome: 'mantiqueira' },
    { id: 8, nome: 'acampamento' },
    { id: 9, nome: 'eucaliptos - araça' },
    { id: 10, nome: 'capitão zenóbio' },
    { id: 11, nome: 'goiabal' },
    { id: 12, nome: 'lameirão' },
    { id: 13, nome: 'fortaleza' },
    { id: 14, nome: 'parque acácias - sta cecília' },
    { id: 15, nome: 'monte alegre' },
    { id: 16, nome: 'ville monte alegre' },
    { id: 17, nome: 'pedras ruivas' },
    { id: 18, nome: 'mato grosso / grotão' },
];

async function criaBanco () {
        await db_padrao.query(`CREATE DATABASE coleta;`);
        return console.log(`Banco coleta criado.`);;
}

async function criaTabelaRegioes () {
    await db.query(
    `CREATE TABLE regioes (
        id INT PRIMARY KEY,
        nome TEXT
    );`
    );
    return console.log(`Tabela regioes criada`);
}

async function criaTabelaPontosColetas () {
        await db.query(
        `CREATE TABLE pontos_coletas (
            id SERIAL PRIMARY KEY NOT NULL,
            nome TEXT,
            tipo_material TEXT,
            latitude DECIMAL,
            longitude DECIMAL,
            regiao INT references regioes(id),
            imagem TEXT
        );`
        );
        return console.log(`Tabela pontos_coletas criada`);
}

async function insereRegiaoNoBanco (regiao) {
    try {
        await db.query(
        `INSERT INTO regioes (id, nome) VALUES ($1, $2)`,
        [regiao.id, regiao.nome]
        );
        return;
    } catch (erro) {
        console.log(`${erro.message} - Erro ao inserir região: ${regiao.nome} no banco`);
    }
}

async function inserePontoNoBanco (ponto) {
    try {
        await db.query(
        `INSERT INTO pontos_coletas (nome, latitude, longitude) VALUES ($1, $2, $3)`,
        [ponto.nome, ponto.lat, ponto.long]
        );
        return;
    } catch (erro) {
        console.log(`${erro.message} - Erro ao inserir ponto: ${ponto.nome} no banco`);
    }
}

async function criaBancoDados () {
    try {
        await criaBanco();
        await criaTabelaRegioes();
        regioes.forEach(insereRegiaoNoBanco);
        await criaTabelaPontosColetas();
        pontosColeta.forEach(inserePontoNoBanco);
        return console.log(`Pontos de coletas e regiões inseridos no banco`);
    } catch (erro) {
        console.log(`${erro.message} - Erro ao criar banco de dados`);
    }
} 

await criaBancoDados ();