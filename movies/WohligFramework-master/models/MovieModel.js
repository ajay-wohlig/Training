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
        Movies.findOne({_id: data.id}).exec(callback)
    },

    //for finding with Exact title
    getExactTitle: (data,callback)=>{
        Movies.findOne({title : data.title}).exec(callback)
    },

    updateMovie: (data,body,callback) =>{
       Movies.updateOne({_id: data.id},{$set: body}).exec(callback)
    },

    //for finding all movie
    search: (_query, callback) =>{
        Movies.find(_query).exec(callback)
        
    }

}