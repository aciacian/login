const db = require ("./../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req,res) =>{
    const {name, email, password}= req.body;

    const validasiemail = await db.Autentikasi.findOne({where:{email}})
    if(validasiemail){
        return res.json({message:"email already exsist!"})
    }

    const hashpassword = await bcrypt.hash(password,12);
    const resAdd = await db.Autentikasi.create({name,email,password:hashpassword});
    return res.status(201).json({
        message: "register success",
        data: resAdd,
    })
}

const login = async (req,res) =>{
    const {email,password} = req.body;
    const cekemail = await db.Autentikasi.findOne({where:{email}})

    if(!cekemail){
        return res.status(422).json({message:"email not found"})
    }
   
    const comparepassword = await bcrypt.compare(password,cekemail.password);
    if(!comparepassword){
        return res.status(422).json({message: "email/password not found"})
    }

    const token = jwt.sign({id: cekemail.id,email:cekemail.email,password:cekemail.password},process.env.jwtsecretkey);

    return res.status(200).json({message:"login sukses",token});

}

module.exports={register,login}