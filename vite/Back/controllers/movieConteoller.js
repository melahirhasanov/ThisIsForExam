const movie=require("../models/movie")
const getAll=async function (req,res) {
    try{
    const {title}=req.query
    const movies=await movie.find({title:{$regex:title||"",$options:"i"}})
    if(!movies){

       return res.status(404).json({
            data:{},
            message:"data not coming",
            status:"fail"
        })}
       return res.status(200).json({
            data:movies,
            message:"data Successfully coming",
            status:"success"
        })
    }catch(error){
     return   res.status(500).json({
            data:{},
            message:error.message?error.message:"data not coming Server errorr",
            status:"fail"
        })}
    }
    const getOne=async function (req,res) {
        try{
        const {id}=req.params
        if(!id){
         return   res.status(404).json({
                data:{},
                message:"id not coming",
                status:"fail"
            })}
            const movies=await movie.findById(id)
            if(!movies){
             return   res.status(404).json({
                    data:{},
                    message:"data not coming",
                    status:"fail"
                })}
         return   res.status(200).json({
                data:movies,
                message:"data Successfully coming",
                status:"success"
            })
        }catch(error){
        return    res.status(500).json({
                message:error.message?error.message:"data not coming Server errorr",
                status:"fail"
            })}
        }
        const post=async function (req,res) {
            const {title,description,year,ImageURL}=req.body
            if(!title||!description||!year||!ImageURL){
             return   res.status(401).json({
                    data:{},
                    message:"some fielads not coming",
                    status:"fail"
                })}
                const Newmovie=new movie({
                    title,
                    description,
                    year,
                    ImageURL,
                })
                await Newmovie.save()
               
              return  res.status(201).json({
                    data:Newmovie,
                    message:"Movie post Successfully coming",
                    status:"success"
                })}
            
            
            const deleteOne=async function (req,res) {
                try{
                const {id}=req.params
                if(!id){
                  return  res.status(404).json({
                        data:{},
                        message:"id not coming",
                        status:"fail"
                    })}
                    const Deletemovies=await movie.findByIdAndDelete(id)
                    if(!Deletemovies){
                     return   res.status(404).json({
                            data:{},
                            message:"data not coming",
                            status:"fail"
                        })}
                  return  res.status(200).json({
                        data:Deletemovies,
                        message:"movie deleted Successfully coming",
                        status:"success"
                    })
                }catch(error){
                  return  res.status(500).json({
                        message:error.message?error.message:"data not coming Server errorr",
                        status:"fail"
                    })}
                }
                const update=async function (req,res) {
                    try{
                    const {id}=req.params
                    const UpdateMovie=await movie.findByIdAndUpdate(
                        id,
                        {...req.body},
                        {new:true}
                    )




                    if(!UpdateMovie){
                        res.status(404).json({
                            data:{},
                            message:"UPDATE not coming",
                            status:"fail"
                        })}
                        
                        res.status(200).json({
                            data:Deletemovies,
                            message:"movie uPDATE Successfully coming",
                            status:"success"
                        })
                    }catch(error){
                        res.status(500).json({
                            message:error.message?error.message:"data not coming Server errorr",
                            status:"fail"
                        })}
                    }
                    module.exports={getAll,getOne,deleteOne,post,update}