const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const fetchApplicant = (req, res, next) => {

    const token = req.header('authToken'); 

    if(!token) {
        res.status(401).send({error: "invalid token"});
    }

    try {
        req.id = jwt.verify(token, SECRET_KEY);
        next(); 
    } catch (error) {
        res.send({error: "invalid token"});
    }

} 

module.exports = fetchApplicant;