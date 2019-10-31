const router = Router()

const MovieModel = require("../models/MovieModel")

router.post("/", (req, res) => {
    MovieModel.saveMovie(req.body, res.callback)
})

router.delete("/:id", (req, res) => {
    console.log("Inside controller", req.params)
    MovieModel.deleteMovie(req.params, res.callback)
})

router.delete("/delete/name", (req, res) => {
    console.log("in delete by name" + req.query.name)
    MovieModel.deleteByName(req.query.name, res.callback)
})

//search all
router.get("/", (req, res) => {
    MovieModel.searchAll(req.query, res.callback)
})

router.get("/searchall/pages/:page", (req, res) => {
    MovieModel.search(req.params, res.callback)
})

//search by id
// localhost:3000/Movie/async
router.get("/getOneId/:id", (req, res) => {
    MovieModel.getOneId(req.params, res.callback)
})

//search by Exact title
router.get("/title/:title", (req, res) => {
    MovieModel.getExactTitle(req.params, res.callback)
})

//search by incomplete title
router.get("/incomplete/:title", (req, res) => {
    MovieModel.getIncompleteTitle(req.params, res.callback)
})

//async waterfall api
// localhost:3000/Movie/async

router.get("/async/", (req, res) => {
    MovieModel.searchasync(req.query, res.callback)
})

router.get("/parallelApi/", (req, res) => {
    MovieModel.searchParallel(req.query, res.callback)
})

router.put("/:id", (req, res) => {
    console.log(req.params)
    console.log(req.body)
    MovieModel.updateMovie(req.params, req.body, res.callback)
})

// router.get("/whilstApi/", (req, res) => {
//     MovieModel.searchWhilst(req.query, res.callback)
// })

router.get("/concatApi/", (req, res) => {
    MovieModel.searchConcat(req.query, res.callback)
})

export default router
