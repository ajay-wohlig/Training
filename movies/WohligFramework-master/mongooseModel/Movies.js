import { Mongoose } from "mongoose";

var schema = new Schema({
    title: String,
    language: String,
    release_date: Date,
    revenue: Number,
    director: String,
    production_company: [{name: String,website: String}],
    duration: String,
    IMDB_rating: Number,
    budget: Number,
    origin_country: String,
    adult: Boolean,
    directed_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "director"
    }
})
export default mongoose.model("movie",schema)