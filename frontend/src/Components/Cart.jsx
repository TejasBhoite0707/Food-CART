import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import ItemCart from './ItemCart';
import {useSelector} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
 import toast, { Toaster } from 'react-hot-toast';
 import {useNavigate} from 'react-router-dom'
const Cart =() => {
  const Navigate=useNavigate()
const cartItem=useSelector((state)=>state.cart.cart)
const TotalQty=cartItem.reduce((TotalQty,item)=>TotalQty+item.qty,0)
const TotalAmount=cartItem.reduce((Total,item)=>Total+(item.qty)*(item.price),0)
const[activeCart,setActiveCart]=useState(true);
    return (
        <>
       <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-slate-50 p-5 ${
        activeCart ? "translate-x-0": "translate-x-full"
       }  duration-500 z-50`}>
        <div className='flex justify-between items-center my-4 '>
       <span className='font-bold text-xl text-gray-800'>My Orders</span>
      <IoCloseOutline onClick={()=>
        setActiveCart(!activeCart)
        
      } className='border-gray-900 rounded-lg border-2 hover:text-red-800 cursor-pointer'/>
      </div>
      {
       cartItem.length> 0 ? cartItem.map((food)=>{
            return <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
        }):<h2 className='text-center text-lg font-serif'>Your Cart is Empty</h2>
      }
      
      
      <div className='absolute bottom-0 '>
        <h3 className='font-semibold text-gray-700'>Item:{TotalQty}</h3>
        <h3 className='font-semibold text-gray-700'>Total Amount:{TotalAmount}</h3>
        <hr/>
        <button onClick={()=>Navigate('/success')} className='mb-5 border-gray-700 border-2 rounded-lg bg-green-500 p-3 hover:bg-green-800 text-white text-lg w-[90vw] lg:w-[18vw]'>CheckOut</button>
       </div>
       
       </div>
       <FaShoppingCart className='p-3 rounded-full shadow-md text-5xl bg-white fixed bottom-4 right-4 cursor-pointer'
       onClick={()=>setActiveCart(!activeCart) }
       />
       </>
    );
};

export default Cart;
