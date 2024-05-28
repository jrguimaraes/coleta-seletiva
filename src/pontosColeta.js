import db from './config/database.js';

const pontosColeta = [
    { name: 'Avelar', lat: -22.321248326590613, long: -43.40334993342208 },
    { name: 'Bela Vista', lat: -22.40514296180025, long: -43.447566380564616 },
    { name: 'Vista Alegre', lat: -22.318875363658748, long: -43.38092734877607 },
    { name: 'Coqueiros', lat: -22.37612113994922, long: -43.34997785080695 },
    { name: 'Arcozelo', lat: -22.40356390349431, long: -43.42818151544772 },
    { name: 'Poaia', lat: -22.416219108185444, long: -43.43413901244192 },
    { name: 'Araçá', lat: -22.417583832112452, long: -43.417585076721366 },
    { name: 'Recanto', lat: -22.430328679383873, long: -43.429017486597935 },
    { name: 'Monte alegre', lat: -22.440423405183196, long: -43.44082923514238 },
    { name: 'Palmares', lat: -22.45139908459516, long: -43.403445435078886 },
];

async function inserePontoNoBanco (ponto) {
    try {
        const result = await db.query(
        `INSERT INTO pontos_coletas (nome, latitude, longitude) VALUES ($1, $2, $3)`,
        [ponto.name, ponto.lat, ponto.long],
        );
        return console.log(`Ponto ${ponto.name} inserido no banco`);
    } catch (erro) {
        console.log(`${erro.message} - Erro ao inserir pontos de coleta`);
    }
}

pontosColeta.forEach(inserePontoNoBanco);
