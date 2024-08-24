
import { createSlice } from "@reduxjs/toolkit";

const initialState={
cart:[]
}

const CartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
        if(Array.isArray(state.cart)){
            const existingItem=state.cart.find((item)=>item.id=== action.payload.id)
            if(existingItem){
              state.cart=  state.cart.map((item)=>item.id===action.payload.id ? {...item,qty: item.qty+1}: item)
            }
            else{
                state.cart.push(action.payload)
            }
         
            // console.log("succsess")
            // console.log(typeof(state.CarT))
        
        }
       else{
        console.error("it is not an array",state.cart);
       }
    },
    removeFromCart:(state,action)=>{
        state.cart= state.cart.filter((item)=>item.id!==action.payload.id)
    },
    IncrementQuantity:(state,action)=>{
    state.cart=state.cart.map((item)=>item.id===action.payload ?{...item,qty:item.qty+1} :item );
    },
    DecrementQuantity:(state,action)=>{
state.cart=state.cart.map((item)=>item.id===action.payload ? {...item,qty:item.qty-1}:item);
    },

}
});
export default CartSlice.reducer;
export const {addToCart,removeFromCart,IncrementQuantity,DecrementQuantity} =CartSlice.actions;
