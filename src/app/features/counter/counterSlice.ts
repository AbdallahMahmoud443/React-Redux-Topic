import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from "../../../interfaces";



const initialState: ICounterState = {
  value: 0,
  text:"Increase Counter"
};

export const counterSlice = createSlice({
  name: "counter", // ** Attched with store
  initialState,
  // Container of All Action that change in state
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, payloadAction: PayloadAction<number>) => {
      state.value += payloadAction.payload; // argument => payloadAction
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions


export default counterSlice.reducer