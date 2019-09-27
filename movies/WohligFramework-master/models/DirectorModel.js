import Directors from "../mongooseModel/Directors"

export default {

    saveDirector: (data,callback) =>{
        const director = new Directors(data)
        director.save(callback)
    },

    deleteDirector: (data,callback)=>{
        Directors.deleteOne({_id : data.id}).exec(callback)
    },

    //for finding with incomplete title
    getIncompleteTitle: (data,callback)=>{
        Directors.find({director_firstname: {$regex: data.title, $options: 'i'}}).exec(callback)
    },

    //for finding with ID
    getOneId: (data,callback)=>{
        Directors.findOne({_id: data.id}).exec(callback)
    },

    //for finding with Exact title
    getExactTitle: (data,callback)=>{
        Directors.findOne({director_firstname : data.title}).exec(callback)
    },

    updateDirector: (data,body,callback) =>{
       Directors.updateOne({_id: data.id},{$set: body}).exec(callback)
    },

    //for finding all Directors
    search: (_query, callback) =>{
        Directors.find(_query).exec(callback)
        
    }

}