const  express=require("express")
const router=express.Router()
const {
    getAll,
    getOne,
    deleteOne,
    post,
    update
}=require("../controllers/movieConteoller")
//const {body}=require("express-validator")
router.get("/",getAll)
router.get("/:id",getOne)
router.get("/:id",deleteOne)
router.post("/",post)
router.post("/:id",update)

module.exports=router
