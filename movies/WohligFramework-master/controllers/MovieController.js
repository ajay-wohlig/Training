const router = Router()

router.post("/",(req,res)=>{
    MovieModel.saveData(req.body,res.callback)
    console.log(req.body)
})

export default router