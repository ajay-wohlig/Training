const async = require('async')
const _ = require('lodash')
export default {

    saveMovie: (data,callback) =>{
        const movies = new Movies(data)
        movies.save(callback)
    },

    deleteMovie: (data,callback)=>{
        Movies.deleteOne({_id : data.id}).exec(callback)
    },

    //for finding with incomplete title
    getIncompleteTitle: (data,callback)=>{
        Movies.find({title: {$regex: data.title, $options: 'i'}}).exec(callback)
    },

    //for finding with ID
    getOneId: (data,callback)=>{
        Movies.findOne({_id: data.id}).populate("directed_by").exec(callback)
    },

    //for finding with Exact title
    getExactTitle: (data,callback)=>{
        Movies.findOne({title : data.title}).exec(callback)
    },

    updateMovie: (data,body,callback) =>{
       Movies.updateOne({_id: data.id},{$set: body}).exec(callback)
    },
    
    search: (query,callback) =>{
        Movies.find(query).populate("directed_by").exec(callback)
    },

    searchasync: (query,callback) => {
        async.waterfall([
            (callback) => {
                Movies.find().populate("directed_by").exec(callback)
            },
            (data,callback) => {

                const Dnames = []
                _.forEach(data,(element) => {
                    const name = element.directed_by
                    Dnames.push(name.director_firstname+" "+name.director_lastname)
                })
                const UniqNames = _.uniq(Dnames)
                callback(null,UniqNames)
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
    }
}