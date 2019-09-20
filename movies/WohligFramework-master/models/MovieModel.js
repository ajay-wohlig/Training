export default {

    saveData: (data,callback) =>{
        const movies = new Movies(data)
        movies.save(callback)
    }
}