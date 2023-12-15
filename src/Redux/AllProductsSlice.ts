import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type productsType = {
  products: any;
};

const initialState: productsType = {
  products: null
};

export const getProducts = createAsyncThunk("products", async () => {
    const products = await axios.get("https://fakestoreapi.com/products");
    return products;
});

export const AllProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
   }
    )
    }
  },
);


export default AllProductsSlice.reducer;
