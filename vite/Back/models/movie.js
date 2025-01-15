const movieSchema=require("../Schemas/movie")
const mongoose=require("mongoose")

const movie=mongoose.Model("Movies",movieSchema)
module.exports=movie