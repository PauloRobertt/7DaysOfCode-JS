async function connect(){

    if(global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })

    const client = await pool.connect();
    console.log("Criou o pool de conexão");
    
    global.connection = pool;
    return pool.connect();

}

connect();

module.exports = { connect };
