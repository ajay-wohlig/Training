const router = Router()

router.post("/",(req,res)=>{
    MovieModel.saveMovie(req.body,res.callback)
})

router.delete("/:id",(req,res) =>{
    MovieModel.deleteMovie(req.params,res.callback)
})

router.get("/:id",(req,res) =>{
    MovieModel.searchMovie(req.params,res.callback)
})

router.put("/:id",(req,res) =>{
    MovieModel.updateMovie(req.params,req.body,res.callback)
})

router.get("/", (req, res) => {
    MovieModel.search()
})

export default router