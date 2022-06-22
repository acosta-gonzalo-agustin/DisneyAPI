var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/',peliculasController.lista_de_peliculas);
router.get('/:id',peliculasController.detalle_de_pelicula);
// router.post('/create',peliculasController.crear_pelicula);
// router.patch('/edit/:id',peliculasController.editar_pelicula);
// router.delete('/delete/:id',peliculasController.eliminar_pelicula);


// router.get('/',peliculasController.buscar_por_nombre);
// router.get('/',peliculasController.buscar_por_genero);
// router.get('/',peliculasController.buscar_por_orden);

module.exports = router;
