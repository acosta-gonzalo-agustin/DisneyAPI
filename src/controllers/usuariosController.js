const db = require('../db/models');
const bcrypt = require('bcrypt');

const controlador = {


    register: function(req,res) {
        
        db.usuarios.create({

            nombre: req.body.name,
            password: bcrypt.hashSync(req.body.password, 12)
        })
        .then(function() {
            return res.json({
                description:'usuario creado con exito',
                status:201
            }) 
        })
        
    },


    login: function(req,res) {

        db.usuarios.findOne({
            where: {nombre:req.body.name}
        })
        .then(function(usuario) {
            return res.json({
                usuario:usuario
            })
        })
    }


}

module.exports = controlador;