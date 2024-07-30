const jwt = require('jsonwebtoken')
const config = require('../Config/config.json');
class AuthenticateController{

    authenticateToken(request, result, next){
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            result.status(401);
            return result.json({error : "Vous n'avez pas le accès à cette route"})
        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if (error) {
                result.status(401);
                return result.json({error : "Votre token n'est pas valide"})
            }
            request.user = user;
            next();
        })
    }

    generateToken(client){
        const payload = {
            id: client.CL_ID,
            email : client.CL_Mail,
            user: client.CL_Nom + " " + client.CL_Prenom
        }
        return jwt.sign(payload, config.SECRET, {expiresIn : '1h'})
    }
}

module.exports = new AuthenticateController();