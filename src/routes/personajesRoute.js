var express = require('express');
var router = express.Router();
var personajesController = require('../controllers/personajesController')




router.get('/',personajesController.personajes);
router.post('/create',personajesController.crear_personaje);
router.patch('/edit/:id',personajesController.editar_personaje);
router.delete('/delete/:id',personajesController.eliminar_personaje);



module.exports = router;
