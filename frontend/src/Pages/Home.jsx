import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItem from '../Components/FoodItem';
import Cart from '../Components/Cart';
import axios from 'axios';
//http://localhost:4002/fooddata
const Home =  () => {
  const[Fd_DATA,setFd_DATA]=useState([ ])
  useEffect(()=>{
    const fetchData=async()=>{
      try {
  let res=await axios.get('http://localhost:4002/fooddata')
  console.log(res.data);
  setFd_DATA(res.data);
  console.log(Fd_DATA);
  
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData();
  },[])
    return (
      <div>
    <Navbar/>
    <CategoryMenu Fd_DATA={Fd_DATA}/>
    <FoodItem Fd_DATA={Fd_DATA}/>
    <Cart/>
      </div>
    );
};

export default Home;
