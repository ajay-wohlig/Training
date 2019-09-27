import { Mongoose } from "mongoose";

var schema = new Schema({
    director_firstname: String,
    director_lastname: String,
    director_age: Number,
    director_country: String,

})
export default mongoose.model("director",schema)