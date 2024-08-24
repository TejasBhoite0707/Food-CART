import { createSlice } from "@reduxjs/toolkit";
const CategorySlice=createSlice({
name:'Category',
initialState:{
    category:"All"
},
reducers:{
    setCategoryAction:(state,action)=>{
        state.category=action.payload
    },
},
});
export const {setCategoryAction}=CategorySlice.actions;
export default CategorySlice.reducer;