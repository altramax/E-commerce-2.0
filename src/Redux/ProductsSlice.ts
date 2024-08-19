import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Config";
import AllProducts from "../Components/Organism/ProductsContainer/AllProductsContainer";

type productsType = {
  allProducts: any;
  categoryProducts: any;
};

const initialState: productsType = {
  categoryProducts: null,
  allProducts: null
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
      return docSnap.data().items;
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
        products?.items?.filter((item: any) => item && results.push(item));
      });
      state.allProducts = results;
    });

    builder.addCase(getAllProducts.rejected, (state) => {
      state.allProducts = null;
    });

    builder.addCase(getProductCategory.fulfilled, (state, action) => {
      state.categoryProducts = action.payload;
    });
    builder.addCase(getProductCategory.rejected, (state) => {
      state.categoryProducts = null;
    });
  },
});

export default ProductsSlice.reducer;
