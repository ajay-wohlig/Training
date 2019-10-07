var mochatest = require("../mochatest")
var chai = require("chai")
let chaiHttp = require("chai-http")
var expect = chai.expect
// let should = chai.should()
chai.use(chaiHttp)
const server = "http://localhost:3000/teachers"
// describe("mochatest", function() {
//     it("first should return hello world", function() {
//         assert.equal(mochatest(), "hello world")
//     })
// })
describe("checking positive and negative test case for post request", () => {
    describe("positive case", () => {
        it("should send records to the database", (done) => {
            let tudent = {
                teacher_firstname: "pratik",
                teacher_lastname: "Gupta",
                parent: "hola"
                //    email: "abc@gmail.com"
            }
            chai.request(server)
                .post("/")
                .send(tudent)
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("negative case", () => {
        it("should checkrecords to the database", (done) => {
            let tudent = {
                teacher_firstname: "abc",
                teacher_lastname: "xyz"
                // parent: "hola",
            }
            chai.request(server)
                .post("/")
                .send(tudent)
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})

describe("checking positive and negative test cases for get response", () => {
    describe("/get my positive request", () => {
        it("testing get response", (done) => {
            let tudent = {
                _id: "5d75f175a4256d037968bf53"
            }
            chai.request(server)
                .get("/" + tudent._id)
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)

                    console.log(
                        "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
                        res.body
                    )
                    done()
                })
        })
    })

    describe("/get my negative request", () => {
        it("testing get response", (done) => {
            let tudent = {
                _id: "hlgufydtd"
            }
            chai.request(server)
                .get("/" + tudent._id)
                .end((err, res) => {
                    console.log("error", err)
                    console.log("response", res.body)
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    console.log(
                        "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
                        res.body
                    )
                    done()
                })
        })
    })
})

describe("Books", function() {
    it("positive test case for delete", (done) => {
        console.log("Deleting all data in db first.")
        chai.request(server)
            .delete("/5d8344e9cc8d4b079ed95c5c")
            .send({})
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                console.log("Getting positive response:", res.body)
                done()
            })
    })
    it("negative test case for delete", (done) => {
        chai.request(server)
            .delete("/1165l")
            .send({})
            .end((err, res) => {
                console.log(":::::::::", err)
                // console.log("Getting negative response:", res.body)
                expect(err).to.be.null
                expect(res).to.have.status(500)

                done()
            })
    })
})

describe("checking positive and negative update request", () => {
    describe("/update my request", () => {
        it("positive update request", (done) => {
            // let id = "5d75f175a4256d037968bf53"
            // let tudent =
            chai.request(server)
                .put("/5d75f175a4256d037968bf53")
                .send({
                    teacher_firstname: "heya",
                    teacher_lastname: "hola"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    console.log(
                        "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
                        res.body
                    )
                    done()
                })
        })
    })

    describe("/update my request", () => {
        it("negative update request", (done) => {
            // let id = "123456"
            // let tudent =
            chai.request(server)
                .put("/123456")
                .send({
                    teacher_firstname: "heya",
                    teacher_lastname: "hola",
                    teacher_id: 12
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)

                    // console.log(
                    //     "Updated Particlar Book using /GET/BOOKS/:BOOKID ::::",
                    //     res.body
                    // )
                    done()
                })
        })
    })
})

// var assert = require("assert")
// describe("Array", function() {
//     describe("#indexOf()", function() {
//         it("should return -1 when the value is not present", function() {
//             assert.equal([1, 2, 3].indexOf(4), -1)
//         })
//     })
// })
var chai = require("chai")
chai.request(adminUrl + "Cart")
    .post("/saveData")
    .send()
    .end(function(err, res) {
        const newLocal = res.statusCode
        assert.equal(res.statusCode, 200)
        done()
    })
