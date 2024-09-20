import React from 'react';
import FoodCard from './FoodCard';

import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import axios from 'axios'
const FoodItem =({Fd_DATA}) => {
   
    
    const category=useSelector((state)=>state.Category.category)
 const search=useSelector((state)=>state.Search.search)
    
const handleToast=(name)=>toast.success(`Added ${name}`)
console.log(Fd_DATA);

    return (
        <>
        
        <Toaster  position="top-center" reverseOrder={false}/>
<div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-9'>
    {


Fd_DATA.filter((food)=>{
        if(category==='All'){
            return food.name.toLowerCase().includes(search.toLowerCase(),0);
        }
        else{
            return category=== food.category &&
            food.name.toLowerCase().includes(search.toLowerCase(),0);   
        }
    }).map(
        ((food)=>{
            return( <FoodCard 
                key={food.id} 
                id={food.id}
                name={food.name}
                desc={food.desc}
                price={food.price}
                rating={food.rating}
                img={food.img}
                qty={food.qty}
                handleToast={handleToast}
                />)
})
    )
        
    }



</div>

</>
    );
};

export default FoodItem;
