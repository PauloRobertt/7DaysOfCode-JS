const { connect } = require('../database/db.js');

async function findall(){
    const client = await connect();
    const res = await client.query('select * from usuario');
    return res.rows;
}

async function findById(id){
    const client = await connect();
    const res = await client.query('select * from usuario where id=$1', [id])
    return res.rows;
}

async function create(user){
    const client = await connect();
    const sql = 'insert into usuario(nome, dataDeNascimento) values ($1,$2)';
    await client.query(sql, [user.nome, user.dataDeNascimento]);
}

async function update(id, user){
    const client = await connect();
    const sql = 'update usuario set nome=$1, dataDeNascimento=$2 where id=$3';
    await client.query(sql, [user.nome, user.dataDeNascimento, id]);
}

async function deletar(id){
    const client = await connect();
    const sql = 'delete from usuario where id=$1';
    await client.query(sql, [id])
}

module.exports = {
    findall,
    findById,
    create,
    update,
    deletar
}
