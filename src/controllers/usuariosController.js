const db = require('../db/models');
const bcrypt = require('bcrypt');


const sgMail = require('@sendgrid/mail');




var jwt = require('jsonwebtoken');

const controlador = {


    register: function (req, res) {

        db.usuarios.create({

            nombre: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12)
        })
            .then(function () {

                const APIKey = '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';

                sgMail.setApiKey(APIKey);

                const message = {
                    to: req.body.email,
                    from: 'acosta.gonzalo.agustin@gmail.com',
                    subject: 'Disney APIKey welcome',
                    text: 'Hola. Tu cuenta ha sido creada con exito. Ahora puedes acceder a todos los recursos de la API'
                }

                sgMail.send(message)
                    .then(response => console.log('Emailsend'))
                    .catch(error => console.log('mensaje no enviado'))

                return res.json({
                    description: 'usuario creado con exito',
                    status: 200
                })
            })

    },


    login: function (req, res) {


        db.usuarios.findOne({
            where: { nombre: req.body.name }
        })
            .then(function (usuario) {
                if (usuario != null) {
                    var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60 * 10, usuario }, 'Clave secreta');

                    return res.json({
                        token,
                        usuario: usuario
                    })

                } else {

                    return res.json({
                        msg: 'usuario no encontrado'
                    })

                }


            })
            .catch((err) => { return res.send(err) })
    }


}

module.exports = controlador;