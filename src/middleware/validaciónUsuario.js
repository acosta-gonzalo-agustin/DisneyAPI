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
        
        res.sendStatus(403);
    }



}

module.exports = validateUser;