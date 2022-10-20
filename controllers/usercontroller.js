const db = require("./../models");

const getalluser = async (req,res) =>{
    const data = await db.Autentikasi.findAll();
    return res.status(200).json ({messaage:"All data users",data:data})
}

module.exports={getalluser}