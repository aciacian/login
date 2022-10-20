require("dotenv").config();
const exp = require("express");
const app = exp();
const auth= require("./routes/auth");
const userroutes = require("./routes/userroute");

app.use(exp.json());
app.use("/api/v1/user",userroutes)
app.use("/api/v1/auth",auth)


app.listen(1000,()=>{
    console.log(`server running on port 1000`);
})