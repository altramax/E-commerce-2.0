import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type productsType = {
  products: any;
  ids: any;
};

const initialState: productsType = {
  products: null,
  ids: null,
};

export const getProducts = createAsyncThunk("products", async () => {
  let list = await axios.get("http://localhost:9000/checks");
  return list;
});

export const AllProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    idArray: () => {
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
    //   state.products = action.payload.data;
    //   state.ids = action.payload.data;
    console.log(action.payload);
    });
  },
});

export default AllProductsSlice.reducer;
