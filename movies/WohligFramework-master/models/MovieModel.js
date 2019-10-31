const async = require("async")
const _ = require("lodash")

const moviemodel = {
    saveMovie: (data, callback) => {
        const movies = new Movies(data)
        movies.save(callback)
    },

    deleteMovie: (data, callback) => {
        console.log("data datadddd", data)
        Movies.deleteOne({ _id: data.id }).exec((err, data) => {
            callback(err, data)
        })
    },

    deleteByName: (data, callback) => {
        Movies.deleteMany({ title: data }).exec(callback)
    },

    //for finding with incomplete title
    getIncompleteTitle: (data, callback) => {
        Movies.find({ title: { $regex: data.title, $options: "i" } }).exec(
            callback
        )
    },

    //for finding with ID
    getOneId: (data, callback) => {
        Movies.findOne({ _id: data.id })
            .populate("directed_by")
            .exec(callback)
    },

    //for finding with Exact title
    getExactTitle: (data, callback) => {
        Movies.findOne({ title: data.title }).exec(callback)
    },

    updateMovie: (data, body, callback) => {
        Movies.updateOne({ _id: data.id }, { $set: body }).exec(callback)
    },

    searchAll: (query, callback) => {
        Movies.find().exec(callback)
    },

    search: (params, callback) => {
        console.log("paramsdata", params.page)
        console.log("ffsdf")
        var page = 2
        async.whilst(
            function test(callback) {
                callback(null, page <= 3)
            },
            function movieDetails(callback) {
                Movies.find({}, { title: 1, revenue: 1, _id: 0 })
                    .skip(page * 2 - 2)
                    .limit(2)
                    .exec(function(err, data) {
                        console.log(data)
                    })
                page++
            },
            callback
        )
    },

    searchasync: (query, callback) => {
        async.waterfall(
            [
                (callback) => {
                    Movies.find()
                        .populate("directed_by")
                        .exec(callback)
                },
                (data, callback) => {
                    const Dnames = []
                    _.forEach(data, (element) => {
                        if (element.directed_by) {
                            const name = element.directed_by
                            Dnames.push(
                                name.director_firstname +
                                    " " +
                                    name.director_lastname
                            )
                        }
                    })
                    const UniqNames = _.uniq(Dnames)
                    callback(null, UniqNames)
                }
            ],
            callback
            // function(err,data){
            //     if (err) {
            //         callback(err,null)
            //     } else {
            //         callback(null,data)
            //     }
            // }
        )
    },

    searchParallel: (query, callback) => {
        async.parallel(
            {
                movies: (callback) => {
                    Movies.find({}, { title: 1, _id: 0 }).exec(callback)
                },
                directed_by: (callback) => {
                    Directors.find({}, { director_firstname: 1, _id: 0 }).exec(
                        callback
                    )
                },
                concat: (callback) => {
                    async.concat(
                        Movies.find(),
                        (element, callback) => {
                            callback(null, element.title)
                        },
                        callback
                    )
                },
                each: (callback) => {
                    async.each(
                        Movies.find(),
                        (element, callback) => {
                            callback(null)
                        },
                        callback
                    )
                },
                concatLimit: (callback) => {
                    async.concatLimit(
                        Movies.find(),
                        9,
                        (element, callback) => {
                            callback(null, element.title)
                        },
                        callback
                    )
                },
                filter: (callback) => {
                    async.filter(
                        Movies.find({}, { title: 1, revenue: 1 }),
                        (val, callback) => {
                            callback(null, val.revenue < 5)
                        },
                        callback
                    )
                },
                every: (callback) => {
                    async.every(
                        Movies.find({}, { title: 1, revenue: 1 }),
                        (val, callback) => {
                            callback(null, val.revenue > 0)
                        },
                        callback
                    )
                },
                groupby: (callback) => {
                    async.groupBy(
                        Movies.find({}, { title: 1, director: 1 }),
                        (val, callback) => {
                            callback(null, val.director)
                        },
                        callback
                    )
                },
                searchWhilst: (callback) => {
                    var count = 0
                    const revenue = 6
                    async.whilst(
                        function test(callback) {
                            callback(null, count <= revenue)
                        },
                        function movieDetails(callback) {
                            Movies.find(
                                { revenue: count },
                                { title: 1, _id: 0, revenue: 1, director: 1 }
                            ).exec(callback)
                            count++
                        },
                        callback
                    )
                }
            },
            callback
        )
    }
}

module.exports = moviemodel
