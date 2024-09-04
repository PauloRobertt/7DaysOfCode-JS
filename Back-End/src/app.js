require('dotenv').config();

const db = require("./db.js")
const port = process.env.PORT;
const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message: "Funcionando!"
    })
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})
