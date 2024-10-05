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
const handleSubmit=async(e)=>{
  e.preventDefault();
  let formdata=new FormData();
  cartItem.forEach((item,index)=>{
    formdata.append(`item_${index+1}_name`,item.name)
    formdata.append(`item_${index+1}_price`,item.price);
    formdata.append(`item_${index+1}_quantity`,item.qty);
});
formdata.append('total_quantity',TotalQty);
formdata.append('total_amount',TotalAmount);
let response=await fetch('https://getform.io/f/bdryvqob',{
  method:'POST',
  body:formdata,
});
  if(response.ok){
    Navigate('/success');
  }
  else{
    console.error('Form Submission Failed');
    
  }
}
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
        <form onSubmit={handleSubmit}>
      {
        cartItem.map((item, index) => (
          <div key={index}>
            <input type='hidden' name={`item_${index + 1}_name`} value={item.name} />
            <input type='hidden' name={`item_${index + 1}_price`} value={item.price} />
            <input type='hidden' name={`item_${index + 1}_quantity`} value={item.qty} />
          </div>
        ))
      }
      <input type='hidden' name='total_quantity' value={TotalQty} />
      <input type='hidden' name='total_amount' value={TotalAmount} />
      
      <input 
        type='submit' 
        value='CheckOut' 
        className='mb-5 border-gray-700 border-2 rounded-lg bg-green-500 p-3 hover:bg-green-800 text-white text-lg w-[90vw] lg:w-[18vw]'
      />
    </form>
        
       </div>
       
       </div>
       <FaShoppingCart className='p-3 rounded-full shadow-md text-5xl bg-white fixed bottom-4 right-4 cursor-pointer'
       onClick={()=>setActiveCart(!activeCart) }
       />
       </>
    );
};

export default Cart;
