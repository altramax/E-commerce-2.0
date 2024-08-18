import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  collection,
  getDocs,

} from "firebase/firestore";
import { db } from "../Config/Config";

type productsType = {
  products: any;
};

const initialState: productsType = {
  products: null,
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));

  let results: any = [];

  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });
  return results;
});

export const getProductCategory = createAsyncThunk(
  "getProductCategory",
  async (category: any) => {
    const categoryRef = doc(db, "Products", `${category}`);
    const docSnap = await getDoc(categoryRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
);

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      let results: any = [];

      action.payload?.forEach((products: any) => {
        products?.items?.filter((item: any) => item && results.push(item) );
      });
      state.products = results;
    });

    builder.addCase(getAllProducts.rejected, (state) => {
      state.products = null;
    });

    builder.addCase(getProductCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductCategory.rejected, (state) => {
      state.products = null;
    });
  },
});

export default ProductsSlice.reducer;
