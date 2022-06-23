const db = require('../db/models');
const path = require('path');



const controlador = {

    peliculasoseries: function(req,res) {


        if(req.query.name) {

            db.peliculasoseries.findOne(
                {
                    include: [
                        { association: 'genero'},
                    ],
                    where: {
                        Título: req.query.name,
                    }
                }
    
                )
            .then(data => {
                return res.json({
    
                    Imagen: data.Imagen,
                    Título: data.Título,
                    fecha_creación: data.fecha_creación,
                    Calificación: data.Calificación,
                    género: data.genero.Nombre,
                })           
            })


        } else if(req.query.genre) {

            db.peliculasoseries.findAll({
                where: {id_género:req.query.genre}
            })
            .then(data => {
            return res.json({
                count:data.length,
                peliculasseries: data

            })           
        })


        } else if(req.query.order) {


            db.peliculasoseries.findAll({
                order: [['fecha_creación',req.query.order]]
            })
            .then(data => {
            return res.json({
                count:data.length,
                peliculasseries: data

            })           
        })


        } else {
            let attributes = ['Imagen','Título','fecha_creación']

        db.peliculasoseries.findAll({attributes})
        .then(data => {
            return res.json({
                count:data.length,
                peliculasseries: data

            })           
        })


        }

        
    },
    



    crear_pelicula: function(req,res) {

        
        

        if(req.files) {
            
            const file = req.files.Imagen;
            const name = Date.now() + file.name;
            const ruta = path.join(__dirname + "../../../public/images/peliculasoseries/" + name);

            if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
                file.mv(ruta, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    console.log(req.body)

                   

                    db.peliculasoseries.create({
                        id_género:req.body.id_genero,
                        Imagen:name,
                        Título:req.body.Titulo,
                        fecha_creación:req.body.Fecha_Creacion,
                        Calificación:req.body.Calificacion
                    })
                    .then(data => {
                        return res.json({
                            PeliculaoSerie:data,
                            description:'título creado con éxito',
                            status:201
                        }) 
                    } 
                    )
                    .catch(err => {return res.send(err)})
                 })

            } else {
                return res.json({msg:'archivo de imagen no valido'})
            }
            
        } else {
            return res.json({msg:'debe ingresar una imagen'})
        }
        
        
        
    },


    editar_peliculaoserie: function(req,res) {

        if(req.files) {
            
            const file = req.files.Imagen;
            const name = Date.now() + file.name;
            const ruta = path.join(__dirname + "../../../public/images/characters/" + name);

            if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
                file.mv(ruta, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    db.peliculasoseries.update({
                        Imagen: name,
                        Título: req.body.Titulo,
                        fecha_creación: req.body.Fecha_Creacion,
                        Calificación: req.body.Calificacion,
                    },
                    {
                    where: {id:req.params.id}
                    }
                    )
                    .then(data => {

                        return res.json({
                            PeliculaoSerie:personaje,
                            description:'título actualizado con exito',
                            status:201
                        }) 
                    } 
                    )
                 });

            }
        } else {
            console.log(req.params.id)

            db.peliculasoseries.update(
                {
                    Título: req.body.Titulo,
                    fecha_creación: req.body.Fecha_Creacion,
                    Calificación: req.body.Calificacion,
                },
                {
                where: {id:req.params.id}
                }
            )
            .then(() => {
                return res.json({
                    description:'título actualizado con exito',
                    status:201
                }) 

            }
            )

        }
        
        
        
    },

    eliminar_peliculaoserie: function(req,res) {

        db.peliculasoseries.destroy({
            where: {id:req.params.id}
        })
        .then(function() {
            return res.json({
                status:200,
                descripcion:'título eliminado'
            })
        }) 
        .catch(function (error) {
                res.send(error);
        })
    },



      


}

module.exports = controlador;