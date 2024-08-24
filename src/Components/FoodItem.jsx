import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItem =() => {
    const category=useSelector((state)=>state.Category.category)
 const search=useSelector((state)=>state.Search.search)
    
const handleToast=(name)=>toast.success(`Added ${name}`)
    return (
        <>
        
        <Toaster  position="top-center" reverseOrder={false}/>
<div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-9'>
    {
    FoodData.filter((food)=>{
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
