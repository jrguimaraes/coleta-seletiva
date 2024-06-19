import { db } from '../../config/database.js';

class UsuarioController {
    login = async (req, res) => {
        const { email, senha } = req.body;

        try {
            const usuarioValido = await this.#validarLogin({ email, senha });

            res.status(200).send(usuarioValido);
        } catch (error) {
            console.log('Error: ', error);
            res.status(401).send({
                message: error.message
            });
        }
    }

    #validarLogin = async (login) => {
        const response = await db.query(
            `SELECT
                id, email, senha
            FROM
                usuarios
            WHERE
                email = $1
            AND 
                senha = $2`, [login.email, login.senha]
        );

        const usuario = response.rows[0];

        if (!usuario) {
            throw new Error('Usuário não existe');
        }

        return usuario;
    }
}

export default new UsuarioController();