async function connect(){

    if(global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })

    const client = await pool.connect();
    console.log("Criou o pool de conexão");

    const res = await client.query("Select * from usuario");
    console.log(res.rows[0]);
    client.release()
    
    global.connection = pool;
    return pool.connect();

}

connect();

async function index(){
    const client = await connect();
    const res = await client.query('select * from usuario');
    return res.rows;
}

async function show(id){
    const client = await connect();
    const res = await client.query('select * from usuario where id=$1', [id])
    return res.rows;
}

async function store(user){
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

module.exports={
    index,
    show,
    store,
    update,
    deletar
}