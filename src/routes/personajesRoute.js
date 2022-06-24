var express = require('express');
var router = express.Router();
var personajesController = require('../controllers/personajesController')
var validacionUsuario= require('../middleware/validaciónUsuario');




router.get('/',validacionUsuario,personajesController.personajes);
router.post('/create',validacionUsuario,personajesController.crear_personaje);
router.patch('/edit/:id',validacionUsuario,personajesController.editar_personaje);
router.delete('/delete/:id',validacionUsuario,personajesController.eliminar_personaje);



module.exports = router;
