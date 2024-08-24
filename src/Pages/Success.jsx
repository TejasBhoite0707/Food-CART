import React, { useEffect, useState } from 'react';
import {BeatLoader} from 'react-spinners'

const Success =() => {
const [Loading,setLoading]=useState(true)
useEffect(()=>{
setTimeout(()=>{
    setLoading(false)
},4000);
},[])
    return (
       <>
       <div className='flex flex-col items-center justify-center h-screen '>
        {
            Loading ? <BeatLoader />: (
             <div>
            <h1 className='text-3xl'>Order Successfull</h1>
            <h3 className='text-2xl font-serif'>Your Order Has been Successfully Placed</h3>
            </div>
       ) }
     
       </div>
       </>
    );
};

export default Success;
