const jwt = require("jsonwebtoken");
const db = require("./../models");
const autorize = async (req,res,next) => {
    try{
        const bearertoken = req.headers.authorization;
        token = bearertoken.split(" ")[1];
        const isitoken=jwt.verify(token,process.env.jwtsecretkey);
        await db.Autentikasi.findByPk(isitoken.id);
        next();

    } catch(err){
        res.status(401).json({message:"Autentikasi gagal"});
    }    
}

module.exports={autorize};