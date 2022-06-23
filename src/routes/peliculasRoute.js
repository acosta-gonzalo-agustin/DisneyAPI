var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/',peliculasController.peliculasoseries);
router.post('/create',peliculasController.crear_pelicula);
router.patch('/edit/:id',peliculasController.editar_peliculaoserie);
router.delete('/delete/:id',peliculasController.eliminar_peliculaoserie);


// router.get('/',peliculasController.buscar_por_nombre);
// router.get('/',peliculasController.buscar_por_genero);
// router.get('/',peliculasController.buscar_por_orden);

module.exports = router;
