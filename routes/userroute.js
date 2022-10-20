const router = require("express").Router();
const {getalluser} = require("./../controllers/usercontroller");
const {autorize} = require("./../utils/autentikasi");

router.get("/",autorize,getalluser);

module.exports = router;