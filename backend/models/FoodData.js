import mongoose from "mongoose";
let foodSchema=mongoose.Schema({
    id: Number,
    img: String,
    name: String,
    price: Number,
    desc: String,   
    category: String,
    rating:Number,
})
let Food=mongoose.model('food',foodSchema);
export default Food;