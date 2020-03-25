const express = require('express');
const casosController = require('../controllers/casosController');
const router = express.Router();

router.post('/', casosController.Criar);
router.get('/', casosController.Listar);
router.delete('/:id', casosController.Deletar);


module.exports = router;