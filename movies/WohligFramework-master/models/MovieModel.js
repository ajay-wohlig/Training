const async = require("async")
const _ = require("lodash")
export default {
    saveMovie: (data, callback) => {
        const movies = new Movies(data)
        movies.save(callback)
    },

    deleteMovie: (data, callback) => {
        Movies.deleteOne({ _id: data.id }).exec(callback)
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

    search: (query, callback) => {
        var page = 1
        console.log(page)
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
                        const name = element.directed_by
                        Dnames.push(
                            name.director_firstname +
                                " " +
                                name.director_lastname
                        )
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

    searchParallel: (query, callback) =>
        async.parallel(
            {
                movies: (callback) => {
                    Movies.find({}, { title: 1, _id: 0 }).exec(callback)
                },
                directed_by: (callback) => {
                    Directors.find({}, { director_firstname: 1, _id: 0 }).exec(
                        callback
                    )
                }
            },
            callback
        ),

    searchWhilst: (query, callback) => {
        const revenue = query.revenue
        var count = 0
        async.whilst(
            function test(callback) {
                callback(null, count <= revenue)
            },
            function movieDetails(callback) {
                setTimeout(function() {
                    Movies.find(
                        { revenue: count },
                        { title: 1, _id: 0, revenue: 1, director: 1 }
                    ).exec(function(err, data) {
                        console.log(data)
                    })
                }, 1000)
                count++
            },
            callback
        )
    },

    searchConcat: (query, callback) => {
        async.each(
            Movies.find(),
            (val, next) => {
                console.log("valvalval::::", val)
                next(null, val.title)
            },
            (error, result) => {
                callback(null, result)
            }
        )
    }
}
