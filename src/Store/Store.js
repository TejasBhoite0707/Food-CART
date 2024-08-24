
import {configureStore} from '@reduxjs/toolkit';
import CategoryReducer from '../Components/Slices/CategorySlice';
import CartReducer from '../Components/Slices/CartSlice';
import SearchReducer from '../Components/Slices/SearchSlice';

const Store=configureStore({
    reducer:{
cart:CartReducer,
Category:CategoryReducer,
Search:SearchReducer,
    }
});
export default Store;
