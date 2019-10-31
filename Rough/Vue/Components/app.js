const express = require('express')
const app = express()

// app.get('',(req,res)=>{
//     res.render(components.html)
// })

app.use(express.static(__dirname))

app.listen(3003,()=>{
    console.log("Server started on port 3003")
})