
import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from './Slices/CartSlice';
import CartSlice from './Slices/CartSlice';
import { useNavigate } from 'react-router';

const FoodCard =({id,rating,img,name,price,desc,handleToast}) => {
const dispatch=useDispatch();
let users=JSON.parse(localStorage.getItem('UsersLogedIn'));
const [authenticate,setAunthenticate]=useState(users?true:false);
console.log(authenticate);
let navigate=useNavigate();
    return (
       <div className='fond-bold bg-white w-[250px] p-4 flex-col rounded-lg gap-2'>
       
        <img src={img}
        alt=""
        className='w-auto hover:scale-110 duration-500 cursor-grab transition-all ease-in-out'
        />
        <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
        </div>
        
       <p className='font-normal text-sm'>
       {desc.slice(0,50)}
       </p>
       <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
<IoIosStar className='text-yellow-400 mr-1'/>{rating}
        </span>
        <button className='p-1 text-white bg-green-400  hover:bg-green-700 rounded-lg text-sm'
        onClick={()=>{if(authenticate){
            dispatch(addToCart({id,name,price,rating,img,qty:1}));
                handleToast(name);
        }
        else
        (navigate('/login'))}}

           
                
        >Add to cart</button>
       </div>


       </div>
    );
};

export default FoodCard;
