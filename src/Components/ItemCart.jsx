import React from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removeFromCart,IncrementQuantity,DecrementQuantity } from './Slices/CartSlice';
const ItemCart =({id,img,price,name,qty}) => {
const dispatch=useDispatch()

    return (
     
      <div className='flex gap-1 items-center shadow-lg rounded-lg p-2 mb-2'>
       
        <img src={img}
        className='w-[50px] h-[50px] '
        />
        
        <div className='leading-5'> 
          <div className='flex justify-between items-center '>
            <h2 className='font-bold text-gray-600'>{name}</h2>
            <MdDelete onClick={()=>{
              dispatch(removeFromCart({id,img,name,price,qty}));
              toast(`${name} removed`, {
                icon: '👏',
              });
              }}className='hover:text-red-600 rounded-lg cursor-pointer absolute right-7'/>
            </div>
            <div className='flex justify-between '>
          
                <span className=' text-red-600 '>₹{price*qty}</span>
                
            <div className='flex items-center gap-1 justify-center absolute right-5'>
<span><CiSquarePlus className=' text-lg hover:text-green-900 transition-all cursor-pointer ' onClick={()=>qty<=1 ? dispatch(IncrementQuantity(id,qty)):(qty=0)}/></span>
<span>{qty}</span>
<span><CiSquareMinus className=' text-lg hover:text-green-900 transition-all cursor-pointer' onClick={()=>qty>1 ?dispatch(DecrementQuantity(id,qty)):(qty=0)}/></span>
            </div>
            </div>
        </div>
      </div>
      
    );
};

export default ItemCart;
