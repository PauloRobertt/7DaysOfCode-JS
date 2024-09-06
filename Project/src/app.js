const db = require('./app/repository/usuarioRepository.js')
const router = require('./router.js');
const express = require("express");

const app = express();

app.use(express.json());

app.use(router);

module.exports = app;
 