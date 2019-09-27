const router = Router()

router.post("/",(req,res)=>{
    MovieModel.saveMovie(req.body,res.callback)
})

router.delete("/:id",(req,res) =>{
    MovieModel.deleteMovie(req.params,res.callback)
})

//search all
router.get("/", (req, res) => {
    MovieModel.search(req.query,res.callback)
})

//search by id
// localhost:3000/Movie/async
router.get("/getOneId/:id",(req,res) =>{
    //console.log("in defferent rout")
    MovieModel.getOneId(req.params,res.callback)
})

//search by Exact title
router.get("/title/:title",(req,res) =>{
    MovieModel.getExactTitle(req.params,res.callback)
})

//search by incomplete title
router.get("/incomplete/:title",(req,res) =>{
    MovieModel.getIncompleteTitle(req.params,res.callback)
})

//async waterfall api
// localhost:3000/Movie/async

router.get("/async/",(req,res) =>{
    MovieModel.searchasync(req.query,res.callback)
})

router.get("/parallelApi/",(req,res) =>{
    MovieModel.searchParallel(req.query,res.callback)
})

router.put("/:id",(req,res) =>{
    MovieModel.updateMovie(req.params,req.body,res.callback)
})

export default router