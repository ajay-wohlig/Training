var chai = require("chai")
let chaiHttp = require("chai-http")
var expect = chai.expect
chai.use(chaiHttp)
const server = "http://localhost:3000/movie/"

// describe("post request", () => {
//     it("should send records to the database")
// })

// chai.request()
//     .post("/saveData")
//     .send()
//     .end(function(err, res) {
//         const newLocal = res.statusCode
//         assert.equal(res.statusCode, 200)
//         done()
//     })

// describe("Movies", function() {
//     it("positive test case for delete", (done) => {
//         console.log("Deleting all data in db first.")
//         chai.request(server)
//             .delete("/5d95c72c32e9fa5cde56c3a4")
//             .send()
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 console.log("Getting positive response:", res.body)
//                 done()
//             })
//     })

//     it("negative test case for delete", (done) => {
//         chai.request(server)
//             .delete("/11652")
//             .send()
//             .end((err, res) => {
//                 console.log(":::::::::", err)
//                 // console.log("Getting negative response:", res.body)
//                 expect(err).to.be.null
//                 expect(res).to.have.status(500)

//                 done()
//             })
//     })
// })

// describe("checking positive and negative update request", () => {
//     describe("/update my request", () => {
//         it("positive update request", (done) => {
//             chai.request(server)
//                 .put("/5d9b2344dbfdee66d0eea180")
//                 .send({
//                     director: "director1"
//                 })
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(200)
//                     console.log(
//                         "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
//                         res.body
//                     )
//                     done()
//                 })
//         })
//     })

//     describe("/update my request", () => {
//         it("negative update request", (done) => {
//             // let id = "123456"
//             // let tudent =
//             chai.request(server)
//                 .put("/123456")
//                 .send({
//                     $set: {
//                         director: "director1"
//                     }
//                 })
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(500)

//                     // console.log(
//                     //     "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
//                     //     res.body
//                     // )
//                     done()
//                 })
//         })
//     })
// })

describe("checking positive and negative get request", () => {
    describe("/get my request", () => {
        it("positive get request", (done) => {
            chai.request(server)
                .get("/5d85c07a675163365f0848b1")
                .send()
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    console.log("Movie Details for searched id", res.body)
                    done()
                })
        })
    })

    // describe("/get my request", () => {
    //     it("negative update request", (done) => {
    //         // let id = "123456"
    //         // let tudent =
    //         chai.request(server)
    //             .put("/123456")
    //             .send({
    //                 $set: {
    //                     director: "director1"
    //                 }
    //             })
    //             .end((err, res) => {
    //                 expect(err).to.be.null
    //                 expect(res).to.have.status(500)

    //                 // console.log(
    //                 //     "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
    //                 //     res.body
    //                 // )
    //                 done()
    //             })
    //     })
    // })
})

// describe("checking positive and negative test case for post request", () => {
//     describe("positive case", () => {
//         it("should send records to the database", (done) => {
//             const obj_ = {
//                 title: "Spiderman in the spider verse",
//                 language: "English"
//             }
//             chai.request(server)
//                 .post("/")
//                 .send(obj_)
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(200)
//                     done()
//                 })
//         })
//     })

//     describe("negative case", () => {
//         it("should checkrecords to the database", (done) => {
//             const obj_ = {
//                 title: "Spiderman in the spider verse",
//                 language: "English"
//             }
//             chai.request(server)
//                 .post("/")
//                 .send(obj_)
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(500)
//                     done()
//                 })
//         })
//     })
// })
