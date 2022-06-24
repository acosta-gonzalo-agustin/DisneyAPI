const db = require('../db/models');
const bcrypt = require('bcrypt');


var jwt = require('jsonwebtoken');

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

            var token = jwt.sign({exp: Math.floor(Date.now() / 1000) + 60, usuario }, 'Clave secreta');

            return res.json({
                token,
                usuario:usuario
            })
        })
        .catch(err => {return res.send(error)})
    }


}

module.exports = controlador;