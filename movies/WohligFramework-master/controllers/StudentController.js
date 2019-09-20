const router = Router()
router.get("/", (req, res) => {
    StudentModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        StudentModel.getOne(req.params, res.callback)
    }
)
router.post("/", (req, res) => {
    //console.log(req.params.id)
    StudentModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    StudentModel.updateStudent(req.params, req.body, res.callback)
    //res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    StudentModel.deleteData(req.params,res.callback)
    //res.send(`Delete For Id ${req.params.id}`)
})
export default router