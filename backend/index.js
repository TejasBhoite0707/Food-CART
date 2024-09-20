import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'
import Foodrouter from './routes/Fooddata.js';

import UserRouter from './routes/Userroutes.js';
dotenv.config()
let app=express();
let port=process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
let mongourl=process.env.MongoDBURL;
try {
    mongoose.connect(mongourl,{

    })
    console.log('connection success');
    
} catch (error) {
    console.log(error);
    
}

//defining routes
app.use('/fooddata',Foodrouter)

app.use('/signup',UserRouter)
app.use('/login',UserRouter)
app.listen(port,()=>{
    console.log(`server is running on port-${port}`);
    
})