const db = require('../db/models');
const path = require('path');
const { Z_NO_COMPRESSION } = require('zlib');


const controlador = {


    crear_personaje: function(req,res) {

        

        if(req.files) {
            
            const file = req.files.Imagen;
            const name = Date.now() + file.name;
            const ruta = path.join(__dirname + "../../../public/images/characters/" + name);

            if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {

                file.mv(ruta, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    


                    db.personajes.create({
                        Imagen: name,
                        Nombre: req.body.Nombre,
                        Edad: req.body.Edad,
                        Peso: req.body.Peso,
                        Historia: req.body.Historia
                    })
                    .then(personaje => {

                        return res.json({
                            data:personaje,
                            description:'personaje creado con exito',
                            status:201
                        }) 
                    } 
                    )
                 });

            } else {
                return res.json({msg:'archivo de imagen no valido'})
            }
            
        } else {
            return res.json({msg:'debe ingresar una imagen'})
        }
        
        
        
    },


    editar_personaje: function(req,res) {

        if(req.files) {
            
            const file = req.files.Imagen;
            const name = Date.now() + file.name;
            const ruta = path.join(__dirname + "../../../public/images/characters/" + name);

            if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
                file.mv(ruta, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    db.personajes.update({
                        Imagen: name,
                        Nombre: req.body.Nombre,
                        Edad: req.body.Edad,
                        Peso: req.body.Peso,
                        Historia: req.body.Historia
                    },
                    {
                    where: {id:req.params.id}
                    }
                    )
                    .then(personaje => {

                        return res.json({
                            data:personaje,
                            description:'personaje creado con exito',
                            status:201
                        }) 
                    } 
                    )
                 });

            }
        } else {
            console.log(req.params.id)

            db.personajes.update(
                {
                    Nombre: req.body.Nombre,
                    Edad: req.body.Edad,
                    Peso: req.body.Peso,
                    Historia: req.body.Historia
                },
                {
                where: {id:req.params.id}
                }
            )
            .then(() => {
                return res.json({
                    description:'personaje actualizado',
                    status:201
                }) 

            }
            )

        }
        
        
        
    },

    eliminar_personaje: function(req,res) {

        db.personajes.destroy({
            where: {id:req.params.id}
        })
        .then(function() {
            return res.json({
                status:200,
                descripcion:'personaje eliminado'
            })
        }) 
        .catch(function (error) {
                res.send(error);
        })
    },



    personajes: function(req,res) {

        if(req.query.name) {
            

            db.personajes.findOne({
                include: [{association:'peliculasoseries'}],
                where: {Nombre:req.query.name},
                
            })
            .then(function(data) {
                if(data !== null) {
                    return res.json({
                        Personaje:data,
                    })
                } else {
                    return res.json({msg:'no exite ningun personaje con ese nombre'})
                }
                
            })

        } else if(req.query.age) {
            db.personajes.findAll({
                where: {Edad:req.query.age}
            })
            .then(function(data) {
                

                if(data.length != 0) {
                    return res.json({
                        personaje:data,
                    })
                } else {
                    return res.json({msg:'no exite ningun personaje con esa edad'})
                }

            })

        } else {

            let attributes = ['Imagen','Nombre'];

            db.personajes.findAll({attributes})
            .then(function(data) {

                if(data.length != 0) {
                    return res.json({
                        count:data.length,
                        personajes:data,
                    })
                } else {
                    return res.json({msg:'la lista de personajes está vacia'})
                }

            })

        }

        
    }   


}

module.exports = controlador;