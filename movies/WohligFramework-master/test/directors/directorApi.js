var chai = require("chai")
let expect = chai.expect
let chaiHttp = require("chai-http")
var server = "http://localhost:3000/director/"
chai.use(chaiHttp)

describe("check for delete request", () => {
    describe("positive delete request", () => {
        it("deletes the document", (done) => {
            chai.request(server)
                .delete("/5d8b128e605aa93fa18e09b4")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("negative delete request", () => {
        it("does not deletes the document", (done) => {
            chai.request(server)
                .delete("/5d8b1284")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})

describe("check for get request for director", () => {
    describe("check for positive get request", () => {
        it("should return data", (done) => {
            chai.request(server)
                .get("/5d8b128e605aa93fa18e09b4")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("cheack for negative get request", () => {
        it("should not return data", (done) => {
            chai.request(server)
                .get("/ahufq8")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})

describe("checking positive and negative update request", () => {
    describe("/update my request", () => {
        it("positive update request", (done) => {
            chai.request(server)
                .put("/5d8d9287e8a7501809755d29")
                .send({
                    director_firstname: "director1"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("/update my request", () => {
        it("negative update request", (done) => {
            chai.request(server)
                .put("/123456")
                .send({
                    director_firstname: "director1"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})
