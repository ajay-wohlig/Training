var chai = require("chai")
let chaiHttp = require("chai-http")
var expect = chai.expect
chai.use(chaiHttp)
const server = "http://localhost:3000/movie/"

describe("Movies", function() {
    it("positive test case for delete", (done) => {
        chai.request(server)
            .delete("5d95c72c32e9fa5cde56c3a4")
            .send()
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })

    it("negative test case for delete", (done) => {
        chai.request(server)
            .delete("11652")
            .send()
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(500)
                done()
            })
    })
})

describe("checking positive and negative get request", () => {
    describe("/get my request", () => {
        it("positive get request", (done) => {
            chai.request(server)
                .get("getOneId/5d85c07a675163365f0848b1")
                .send()
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("/get my request", () => {
        it("negative get request", (done) => {
            chai.request(server)
                .get("getOneId/ahdu12")
                .send()
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
                .put("5d9b2344dbfdee66d0eea180")
                .send({
                    director: "director1"
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
                .put("123456")
                .send({
                    director: "director1"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})

describe("checking positive and negative test case for post request", () => {
    describe("positive case", () => {
        it("should send records to the database", (done) => {
            const obj_ = {
                title: "Spiderman in the spider verse",
                language: "English"
            }
            chai.request(server)
                .post("")
                .send(obj_)
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("negative case", () => {
        it("should not send records to the database", (done) => {
            const obj_ = {
                title: "Dark Phoenix",
                lang: "Marathi"
            }
            chai.request(server)
                .post("sfasf/fa/")
                .send(obj_)
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(404)
                    done()
                })
        })
    })
})

describe("Test for async waterfall", () => {
    it("positive test case for async waterfall", (done) => {
        chai.request(server)
            .get("async/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it("negative test case for async waterfall", (done) => {
        chai.request(server)
            .get("async/asd/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(404)
                done()
            })
    })
})

describe("Test for async parallel", () => {
    it("positive test case for async parallel", (done) => {
        chai.request(server)
            .get("parallelApi/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it("negative test case for async parallel", (done) => {
        chai.request(server)
            .get("parallelApi/fas/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(404)
                done()
            })
    })
})

describe("Test for search with incomplete title", () => {
    it("Positive test case", (done) => {
        chai.request(server)
            .get("incomplete/dark")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it("Negative test case", (done) => {
        chai.request(server)
            .get("/incomplete/da/fa")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(404)
                done()
            })
    })
})

describe("Test for search with Exact title", () => {
    it("Positive test case", (done) => {
        chai.request(server)
            .get("title/Dark Phoenix")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it("Negative test case", (done) => {
        chai.request(server)
            .get("title/Dark Phoenix/dad/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(404)
                done()
            })
    })
})

describe("Test for search all by pages", () => {
    it("Positive test case", (done) => {
        chai.request(server)
            .get("")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    it("Negative test case", (done) => {
        chai.request(server)
            .get("/asd")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(404)
                done()
            })
    })
})
