const Movie=require("../Schemas/movie")
const getAll=async function (req,res) {
    const {title}=req.query
    const movie=await Movie.find({
        title:{$regex:title||"",$options:"i"}
    })
    if(movie.length===0){
        return res.status(404).json({
            data:[],
            massage:"no seacth notice",
            status:"fail",
        })
    }
    return res.status(200).json({
        data:movie,
        massage:"Search Is Successfully",
        status:"success",
    })
    

}
const getOne=async function (req,res) {
    const {id}=req.params
    if(!id){

    }
    
}
