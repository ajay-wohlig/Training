const router = Router()

router.post("/", (req, res) => {
    DirectorModel.saveDirector(req.body, res.callback)
})

router.delete("/:id", (req, res) => {
    DirectorModel.deleteDirector(req.params, res.callback)
})

//search all
router.get("/", (req, res) => {
    DirectorModel.search(req.query, res.callback)
})

//search by id
router.get("/:id", (req, res) => {
    DirectorModel.getOneId(req.params, res.callback)
})

//search by Exact title
router.get("/firstname/:title", (req, res) => {
    DirectorModel.getExactTitle(req.params, res.callback)
})

//search by incomplete title
router.get("/incomplete/:title", (req, res) => {
    DirectorModel.getIncompleteTitle(req.params, res.callback)
})

router.put("/:id", (req, res) => {
    DirectorModel.updateDirector(req.params, req.body, res.callback)
})

export default router
