import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postStructure } from "../Components/Organism/AddToCart/AddToCart";

type cartslice = {
  cartItems: any;
  cartCount: number;
  cartIds: any;
};

type updateType = {
    id: number;
    quantity: number
}

const initialState: cartslice = {
  cartItems: [],
  cartCount: 0,
  cartIds: [],
};
 
export const getCartItem = createAsyncThunk("cartItems", async () => {
  let items = await axios.get("http://localhost:9000/cart");
  let ids: number[] = [];
  items.data.filter((res: any) => {
    ids = [...ids, res.id];
  });
  const response = {
    item: items,
    id: ids,
  };
  return response;
});

export const addToCart = createAsyncThunk("addItems", async (product: postStructure) => {
  let items = await axios.post("http://localhost:9000/cart", product);
  return items;
});

export const updateItem = createAsyncThunk(
  "updateItems",
  async (arg: updateType) => {
    console.log(arg);
    let items = await axios.patch(
      `http://localhost:9000/cart/${arg.id}`,{quantity: `${arg.quantity}`}
    ).then(res=>console.log(res));
    return items;
  }
);

export const deleteItem = createAsyncThunk(
  "deleteItems",
  async (id: number) => {
    let items = await axios.delete(`http://localhost:9000/cart/${id}`);
    return items;
  }
);

export const clearCart = createAsyncThunk(
    "deleteItems",
    async (data:any) => {
        data.map((res:any)=>{
         axios.delete(`http://localhost:9000/cart/${res.id}`)
        })
    //   let items = await axios.post(`http://localhost:9000/cart`,);
    //   return items;
    }
  );


const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItem.fulfilled, (state, action) => {
      state.cartItems = action.payload.item;
      state.cartIds = action.payload.id;
      state.cartCount = action.payload.id.length;
    });
    builder.addCase(getCartItem.rejected, (state, action) => {
      state.cartItems = "";
      state.cartIds = "";
      state.cartCount = 0;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cartCount = state.cartCount;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.cartItems = "";
    });
  },
});
export default Cart.reducer;
