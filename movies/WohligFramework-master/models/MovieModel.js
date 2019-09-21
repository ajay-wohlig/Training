export default {

    saveMovie: (data,callback) =>{
        const movies = new Movies(data)
        movies.save(callback)
    },

    deleteMovie: (data,callback)=>{
        Movies.deleteOne({_id : data.id}).exec(callback)
    },

    searchMovie: (data,callback)=>{
       
    },

    updateMovie: (data,body,callback) =>{
       Movies.updateOne({_id: data.id},{$set: body}).exec(callback)
    },

    search: function(req) {
        db.collection.find({_id: })
    }
}