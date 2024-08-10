import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartSlice, IProduct } from "../../../interfaces";
import { addItemToCartFn } from "../../../utils/functions";



const initialState: ICartSlice = {
    cartItems:[] // Array of Products
};

export const CartSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {
    addItemToCart : (state,payloadAcrion:PayloadAction<IProduct>) =>{
        state.cartItems = addItemToCartFn(state.cartItems,payloadAcrion.payload) // in utils folder
    }
  },
});


export const {addItemToCart} = CartSlice.actions
export default CartSlice.reducer