import pkg from 'pg';
const { Pool } = pkg;

async function connect(){

    if(global.connection)
        return global.connection.connect();

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })
    
    global.connection = pool;
    return pool.connect();

}

connect();

export default connect;
