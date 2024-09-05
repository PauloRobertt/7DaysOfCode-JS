const db = require('./app/database/db.js')
const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message: "Funcionando!"
    })
})

app.get('/usuario/:id', async (req, res)=>{
    const pessoa = await db.show(req.params.id);
    res.json(pessoa);
})

app.get('/usuario', async (req, res)=>{
    const pessoa = await db.index();
    res.json(pessoa);
})

app.post('/usuario', async (req, res)=>{
    await db.store(req.body);
    res.sendStatus(201);
})

app.put('/usuario/:id', async (req, res)=>{
    await db.update(req.params.id, req.body);
    res.sendStatus(200);
})

app.delete('/usuario/:id', async (req, res)=>{
    await db.deletar(req.params.id);
    res.sendStatus(204);
})

module.exports = app;
