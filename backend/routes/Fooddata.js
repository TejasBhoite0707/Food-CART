import express from 'express'
import {Getfood} from '../controllers/food_controller.js'
let Foodrouter=express.Router()
Foodrouter.get('/',Getfood);
export default Foodrouter;