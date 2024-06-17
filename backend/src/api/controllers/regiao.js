import {db} from '../../config/database.js';

class RegiaoController {

    async pegarTodasRegioes (req, res) {
        try {
            const response = await db.query(
                `SELECT
                    id, nome
                FROM 
                    regioes`,
            );
            res.status(200).send(response.rows);    
        } catch (erro) {
            res.status(500).send({
            message: `${erro.message} - Erro ao recuperar as regiões`
            })
        }
    }
}

export default new RegiaoController();