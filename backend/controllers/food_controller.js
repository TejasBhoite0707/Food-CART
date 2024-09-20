import Food from "../models/FoodData.js";
export const Getfood=async(req,res)=>{
try {
    let food=await Food.find();
res.status(200).json(food)
} catch (error) {
    console.log(error);
    res.status(500).json(error)
}
}