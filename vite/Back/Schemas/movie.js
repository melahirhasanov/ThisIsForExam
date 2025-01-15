const {Schema}=require("mongoose")
const MovieSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true
    },
    ImageURL:{
        type:String,
        trim:true,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    }
},{timestamps:true})

module.exports=MovieSchema