import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs'
export const signup=async(req,res)=>{
    try {
const {email,username,password}=req.body;
let user=await User.findOne({email})
if(user){
    res.status(400).json({message:"you are already registered"})
    }
    let hashedpassword=bcryptjs.hash(password,10);
    let createduser=new User({
        email,
        username,
        password:hashedpassword,
    });
    await createduser.save();
res.status(200).json({message:"Account Created Successfully",user:{
    _id:createduser._id,
    email:createduser.email,
    username:createduser.username
}})
    } catch (error) {
        console.log("message"+error.message);
        res.status(500).json({message:"Internal server error"})
    }
    
}

export const login=async(req,res)=>{

    try {
        let {email,password,username}=req.body;
        let user=await User.findOne({email,username})
     let isMatch=bcryptjs.compare(password,user.password)
     if(!user || !isMatch){
        return res.status(300).json({message:"Invalid Creadintials"})
     }
     else{
        res.json({"message":"Login Successfull","user":{
            _id:user._id,
            email:user.email,
            username:user.username,
        }})
     }
    } catch (error) {
        console.log("Error"+error.message);
        res.status(500).json("Internal server Error")
    }
}