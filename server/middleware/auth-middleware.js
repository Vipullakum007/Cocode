const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

    const jwtToken = token.replace('Bearer ', '').trim();
    console.log(jwtToken);


    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);    
        const userData = await User.findOne({email : isVerified.email }).select({password: 0});//password select 0 means no password will be returned with the result
        console.log(userData);
        req.user = userData;
        req.token = token;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Access denied, invalid token' });
    }
}

module.exports = authMiddleware;