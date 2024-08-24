import React, { useEffect, useState } from 'react';
import FoodData from '../Data/FoodData';
import FoodCard from './FoodCard';
import { setCategoryAction } from './Slices/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';

const CategoryMenu =() => {
const dispatch=useDispatch();    
const selectCategory=useSelector((state)=>state.Category.category)
const[categeries,setCategeries]=useState([ ])
const ListUniqueCategories=()=>{
    const uniqueCategory=[... new Set(FoodData.map((food)=>food.category))];
    setCategeries(uniqueCategory);
    console.log(uniqueCategory);
}
useEffect(()=>{
ListUniqueCategories()
},[]);
    return (
        <div className='mx-6 '>
            <h3 className='my-5 text-xl font-semibold'>Find the Best Food</h3>
            <div className='flex my-5 gap-3 overflow-x-auto lg:overflow-x-hidden'>
            <button  className= {`px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-gray-500 hover:text-white ${selectCategory==='All' && "bg-green-700 text-white"}`} onClick={()=>dispatch(setCategoryAction('All'))}
            >All</button>
              {categeries.map((category,index)=>{
                return(
<button key={index} className={`px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-gray-500 hover:text-white ${selectCategory===category && "bg-green-700 text-white"}`} onClick={()=>dispatch(setCategoryAction(category))}
>{category}</button>
                )
              })}
            </div>
        </div>

    );
};

export default CategoryMenu;

