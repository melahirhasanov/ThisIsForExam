const mongoose=require("mongoose")
require("dotenv").config()
const DB_URL=process.env.DB_URL
const startMongooose =async function () {
    

mongoose.connect(DB_URL).then(()=>{console.log("This is Connection for Mongood db")}).catch((err)=>{console.log("Eroor this",err)})}
module.exports=startMongooose