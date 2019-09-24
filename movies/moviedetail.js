const MongoClient = require('mongodb').MongoClient

const url = 'http://localhost:3000/movie/5d85c07a675163365f0848b1'

MongoClient.connect(url,(err,db) => {
    movie_db.movies.find()
})