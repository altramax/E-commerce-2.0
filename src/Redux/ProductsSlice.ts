import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Config/Config";

type productsType = {
  allProducts: any;
  categoryProducts: any;
  productName: any;
};

const initialState: productsType = {
  categoryProducts: null,
  allProducts: null,
  productName: null,
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

export const getProductName = createAsyncThunk(
  "getProductName",
  async (category: any) => {
    try {
      const categoryRef = collection(db, "Products");
      const q = query(
        categoryRef,
        where("items", "array-contains", { name: `${category}` })
      );
      const querySnapshot = await getDocs(q);

      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(docs, querySnapshot.docs);
      return docs;
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }

    // if (docSnap.exists()) {
    //   console.log(docSnap.data());
    //   return docSnap.data().items;
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
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

    builder.addCase(getProductName.fulfilled, (state, action) => {
      state.productName = action.payload;
    });
    builder.addCase(getProductName.rejected, (state) => {
      state.productName = null;
    });
  },
});

export default ProductsSlice.reducer;
