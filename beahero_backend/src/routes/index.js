var express = require('express');
var router = express.Router();

/* Tipos de parametros
  Querys: Enviados na rota apos interrogacao e servem para filtros, paginação
  Route: Utilizados para identificar recursos altera a rota (/:id)
  Body: corpo da requisição utilizado para cirar ou alterar recursos
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dados', function(req, res, next) {
  const queryParams = req.query;
  const routeParams = req.params;
  const bodyParams = req.body;

  res.json({
    nome: "Alexandre",
    mensagem: "Estudo da semana omnistack"
  });
});

module.exports = router;
