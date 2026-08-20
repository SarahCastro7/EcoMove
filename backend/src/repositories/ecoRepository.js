import {query} from '../config/db.js'

export const ecoRepository = {
   async findAll(){
    const res = await query("SELECT * FROM eco ORDER BY id;");
    return res.rows;
    },

    async create(eco){
        const {email, senha, usuario} = eco;
        const sql = 'INSERT INTO eco (email, senha, usuario) VALUES ($1, $2, $3) RETURNING *;';
        const res = await query(sql, [email, senha, usuario]);
        return res.rows[0]
    },

    async findById(id){
        const res = await query('SELECT * FROM eco where id = $1;',[id]);
        return res.rows[0]
    },

    async update(id, eco){
        const { email, senha, usuario } = eco;
        const sql = 'UPDATE eco SET email = $1, senha = $2, usuario = $3 WHERE id = $4 RETURNING *;';
        const res = await query(sql, [email, senha, usuario, id]);
        return res.rows[0]
    },

    async patch (id, eco){
        const { email, senha, usuario } = eco;
        const sql = `
        UPDATE eco
        SET
            email = COALESCE($1, email), 
            senha = COALESCE($2, senha), 
            usuario = COALESCE($3, usuario)
        WHERE id = $4 
        RETURNING * ;
    `;

    const res = await query(sql, [email, senha, usuario, id]);
    return res.rows[0];
    [ nome || null,
        especie || null,
        idade || null,
        status_saude || null,
        id]
    },

    async delete (id) {
        const res = await query('DELETE FROM eco WHERE id = $1 ;', [id]);
        return res.rows[0];
    }

}