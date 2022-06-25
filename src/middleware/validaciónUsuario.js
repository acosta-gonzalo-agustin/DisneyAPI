var jwt = require('jsonwebtoken');

function validateUser(req,res,next) {

    const bearerHeader = req.headers['authorization'];
    
    
    if(typeof bearerHeader !== 'undefined') {
        
        const bearerToken = bearerHeader.split(" ")[1]

        req.token = bearerToken;

        jwt.verify(req.token, 'Clave secreta', (err, authData) => {

            if(err) {
                res.send('error');
            } else {
                next() 
            }
                   
        }) } else {
        
        return res.json({
            msg:'No cuenta con el permiso para acceder a la ruta',
            status:403
        });
    }



}

module.exports = validateUser;