const jwt = require('jsonwebtoken')
const SECRET = "cynthia"
const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({ message: 'Authorization token not provided'})
    }else{
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token is not valid or expired' });
            }
        req.user = decoded;

        //verify role
            
        if(decoded.role !== 'admin'){
            return res.status(403).json({ message: 'Unauthorized Resource. Only for admins!'})
        }
        
        next();
        });
    }
}

module.exports={
    verifyToken
}