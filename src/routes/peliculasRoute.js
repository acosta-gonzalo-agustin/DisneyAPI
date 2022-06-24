var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')
var validacionUsuario= require('../middleware/validaciónUsuario');

router.get('/',validacionUsuario,peliculasController.peliculasoseries);
router.post('/create',validacionUsuario,peliculasController.crear_pelicula);
router.patch('/edit/:id',validacionUsuario,peliculasController.editar_peliculaoserie);
router.delete('/delete/:id',validacionUsuario,peliculasController.eliminar_peliculaoserie);


module.exports = router;
