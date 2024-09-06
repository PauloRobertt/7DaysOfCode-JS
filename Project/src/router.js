const express = require('express');
const router = express.Router();
const usuarioController = require('../src/app/controller/usuarioController.js');

router.get('/usuario', usuarioController.index);
router.get('/usuario/:id', usuarioController.show);
router.post('/usuario', usuarioController.store);
router.put('/usuario/:id', usuarioController.update);
router.delete('/usuario/:id', usuarioController.delete);

module.exports = router;