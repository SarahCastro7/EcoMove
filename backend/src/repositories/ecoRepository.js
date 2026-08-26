import {query} from '../config/db.js'

export const ecoRepository = {
   async findAll(){
    const res = await query("SELECT * FROM usuarios ORDER BY usuario_id;");
    return res.rows;
    },

    async create(eco){
        const {email, senha, usuario, foto_url} = eco;
        const sql = `
            INSERT INTO usuarios (usuario_nome, usuario_email, usuario_senha, foto_url)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const res = await query(sql, [usuario, email, senha, foto_url || null]);
        return res.rows[0]
    },

    async findById(id){
        const res = await query('SELECT * FROM usuarios WHERE usuario_id = $1;',[id]);
        return res.rows[0]
    },

    async update(id, eco){
        const { email, senha, usuario, foto_url } = eco;
        const sql = `
            UPDATE usuarios
            SET usuario_nome = $1, usuario_email = $2, usuario_senha = $3, foto_url = $4
            WHERE usuario_id = $5
            RETURNING *;
        `;
        const res = await query(sql, [usuario, email, senha, foto_url || null, id]);
        return res.rows[0]
    },

    async patch (id, eco){
        const { email, senha, usuario, foto_url } = eco;
        const sql = `
            UPDATE usuarios
            SET
                usuario_nome = COALESCE($1, usuario_nome),
                usuario_email = COALESCE($2, usuario_email),
                usuario_senha = COALESCE($3, usuario_senha),
                foto_url = COALESCE($4, foto_url)
            WHERE usuario_id = $5
            RETURNING *;
        `;

        const res = await query(sql, [usuario || null, email || null, senha || null, foto_url || null, id]);
        return res.rows[0];
    },

    async delete (id) {
        const res = await query('DELETE FROM usuarios WHERE usuario_id = $1 RETURNING *;', [id]);
        return res.rows[0];
    }

}