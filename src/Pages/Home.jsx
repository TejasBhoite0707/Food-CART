import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItem from '../Components/FoodItem';
import Cart from '../Components/Cart';


const Home =() => {

    return (
      <div>
    <Navbar/>
    <CategoryMenu/>
    <FoodItem/>
    <Cart/>
      </div>
    );
};

export default Home;
