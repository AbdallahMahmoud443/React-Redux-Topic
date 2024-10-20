import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import axiosInstance from "../../../config/AxiosInstance";

interface IProductsState {
  data: IProduct[];
  loading: boolean;
  error: null;
}

const initialState: IProductsState = {
  data: [],
  loading: true,
  error: null,
};

export const getProductsList = createAsyncThunk(
  "prodcuts/getProductsList", // => Type
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/products?limit=5");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ProductsSlice = createSlice({
  name: "prodcuts",
  initialState,
  reducers: {},
  //** Pending  */
  extraReducers: (builder) => {
    builder.addCase(getProductsList.pending, (state) => {
      state.loading = true;
    });
    //** FulFilled  */
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.loading = false;
      state.data =action.payload;
    });
    //** Rejected  */
    builder.addCase(getProductsList.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload as null;
    });
  },
});

export default ProductsSlice.reducer;
