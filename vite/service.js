const { config } = require("dotenv")
const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT
const cors=require("cors")
const router=require("./Back/routes/MovRoute")
const startMongooose=require("./Back/Back/db")

app.use("cors")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/movies",router)

startMongooose()

app.listen(PORT,()=>{
    console.log(`Example Listening is on port ${PORT}`)
})