var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController')


router.post('/register',usuariosController.register)

router.post('/login',usuariosController.login)

module.exports = router;
