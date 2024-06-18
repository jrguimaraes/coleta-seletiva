import {db} from '../../config/database.js';

class PontoColetaController {

    async pegarTodosPontosColetas (req, res) {
        try {
            const response = await db.query(
                `SELECT
                    id, nome, latitude, longitude
                FROM 
                    pontos_coletas`,
            );
            res.status(200).send(response.rows);    
        } catch (erro) {
            res.status(500).send({
            message: `${erro.message} - Erro ao recuperar o ponto de coleta`
            })
        }
    }

    async pegarPontoColeta (req, res) {
        try {
            const pontoColetaId = parseInt(req.params.id);
            const response = await db.query(
                `SELECT
                     nome, latitude, longitude
                FROM 
                    pontos_coletas
                WHERE 
                    id = $1`, [pontoColetaId]);
            res.status(200).send(response.rows);    
        } catch (erro) {
            res.status(500).send({
            message: `${erro.message} - Erro ao recuperar o ponto de coleta`
            });
        }
    };

    async criarPontoColeta (req, res) {
        try {
            const { nome, latitude, longitude, regiao, imagem } = req.body;
            const response = await db.query( 
                `INSERT INTO
                    pontos_coletas (nome, latitude, longitude, regiao, imagem) 
                VALUES
                    ($1, $2, $3, $4, $5)`,[nome, latitude, longitude, regiao, imagem],
            );
        
            res.status(201).send({
                message: 'Ponto de coleta criado com sucesso!',
                body: {
                    ponto: { nome, latitude, longitude, regiao },
                },
            });    
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - Erro ao criar ponto de coleta`
            });
        }
    };

    async atualizarPontoColeta (req, res) {
        try {
            const pontoColetaId = parseInt(req.params.id); 
            const { nome, latitude, longitude } = req.body;

            const response = await db.query(
                `UPDATE
                    pontos_coletas
                SET
                    nome = COALESCE($1, nome),
                    latitude = COALESCE($2, latitude),
                    longitude = COALESCE($3, longitude)
                WHERE
                    id = $4`,[nome, latitude, longitude, pontoColetaId],
            );
        
            res.status(200).send({
                message: 'Ponto de coleta atualizado com sucesso!',
                body: {
                    ponto: { pontoColetaId, nome },
                },
            });    
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - Erro ao atualizar ponto de coleta`
            });
        }
    };

    async deletarPontoColeta (req, res) {
        try {
            const pontoColetaId = parseInt(req.params.id); 

            const response = await db.query(
                `DELETE FROM
                    pontos_coletas
                WHERE
                    id = $1`,[pontoColetaId],
            );
        
            res.status(200).send({
                message: `Ponto de coleta com o id:${pontoColetaId} foi deletado com sucesso!`,
            });    
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - Erro ao deletar ponto de coleta`
            });
        }
    };
}

export default new PontoColetaController();