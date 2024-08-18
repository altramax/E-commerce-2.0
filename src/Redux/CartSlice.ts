import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  getDocs,
  arrayRemove,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "../Config/Config";

type cartType = {
  products: any;
};

const initialState: cartType = {
  products: null,
};

type authAddProductType = {
  product: any;
  user: string;
};

type updateType = {
  id: string;
  user: string;
  orderedQuantity: string | number;
};

type authReconsileCart = {
  items: any;
  uid: string;
};

export const AuthGetCart = createAsyncThunk(
  "addItems",
  async (obj: authReconsileCart) => {
    try {
      // console.log(obj);
      const docRef = doc(db, "Cart", obj.uid);
      const docSnapshots = await getDoc(docRef);
      let currentItemsArray = docSnapshots.exists()
        ? docSnapshots.data().items
        : [];
      // console.log(currentItemsArray);
      if (obj.items.length === 0 && currentItemsArray.length === 0) {
        console.log("empty");
        return currentItemsArray;
      } else if (obj.items.length === 0 && currentItemsArray.length > 0) {
        console.log("called");
        // await updateDoc(docRef, {
        //   items: arrayUnion(...currentItemsArray),
        // });
        return currentItemsArray;
      } else if (obj.items.length > 0 && currentItemsArray.length === 0) {
        console.log(obj.items);
        return docSnapshots.exists()
          ? await setDoc(docRef, {
              items: obj.items,
            })
          : await setDoc(docRef, {
              items: obj.items,
            });
      } else if (obj.items.length > 0 && currentItemsArray.length > 0) {
        console.log("right condition");
        let newItemsAuth = await currentItemsArray.map((item: any) => {
          let newCount: number[] = [];
          obj.items.filter((res: any) => {
            if (item.id === res.id) {
              newCount.push(
                Number(item.orderedQuantity) + Number(res.orderedQuantity)
              );
            }
          });
          console.log(newCount);
          if (newCount.length > 0) {
            console.log({ ...item, orderedQuantity: newCount[0] });
            return { ...item, orderedQuantity: newCount[0] };
          } else {
            console.log(item);
            return item;
          }
        });

        let newItemsLocal = await obj.items.map((item: any) => {
          let newCount: number[] = [];
          currentItemsArray.filter((res: any) => {
            if (item.id === res.id) {
              newCount.push(
                Number(item.orderedQuantity) + Number(res.orderedQuantity)
              );
            }
          });
          console.log(newCount);
          if (newCount.length > 0) {
            console.log({ ...item, orderedQuantity: newCount[0] });
            return { ...item, orderedQuantity: newCount[0] };
          } else {
            console.log(item);
            return item;
          }
        });
        // console.log(newItemsAuth);
        console.log([...newItemsAuth, ...newItemsLocal]);
        // console.log(newItemsLocal);

        let newarr = [...newItemsAuth, ...newItemsLocal];

        // Use a Set to track unique ids
        let uniqueIds = new Set();

        let uniqarr = newarr.filter((item: any) => {
          if (!uniqueIds.has(item.id)) {
            uniqueIds.add(item.id);
            return true;
          }
          return false;
        });

        uniqarr?.length > 0 &&
          (await setDoc(docRef, {
            items: uniqarr,
          }));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const AuthAddToCart = createAsyncThunk(
  "addItems",
  async (product: authAddProductType) => {
    const docRef = doc(db, "Cart", product.user);
    const docSnapshots = await getDoc(docRef);
    console.log("auth add run");
    return docSnapshots.exists()
      ? await updateDoc(docRef, {
          items: arrayUnion(product.product),
        })
      : await setDoc(docRef, {
          items: [product.product],
        });
  }
);

export const AuthUpdateCart = createAsyncThunk(
  "updateItems",
  async (product: updateType) => {
    console.log("auth update run");
    const docRef = doc(db, "Cart", product.user);
    const docSnapshots = await getDoc(docRef);
    let currentItemsArray = docSnapshots.exists()
      ? docSnapshots.data().items
      : [];
    let arr = currentItemsArray.map((entry: any) => {
      if (entry.id === product.id) {
        return { ...entry, orderedQuantity: product.orderedQuantity };
      } else {
        return entry;
      }
    });

    return docSnapshots.exists()
      ? await updateDoc(docRef, {
          items: arr,
        })
      : "";
  }
);

export const AuthDeleteItem = createAsyncThunk(
  "deleteItems",
  async (product: updateType) => {
    console.log("auth delete run");
    const docRef = doc(db, "Cart", product.user);
    const docSnapshots = await getDoc(docRef);
    let currentItemsArray = docSnapshots.exists()
      ? docSnapshots.data().items
      : [];
    let arr = currentItemsArray.filter((entry: any) => entry.id !== product.id);

    return docSnapshots.exists()
      ? await updateDoc(docRef, {
          items: arr,
        })
      : "";
  }
);

export const clearCart = createAsyncThunk("deleteItems", async (data: any) => {
  data.map((res: any) => {
    // axios.delete(`http://localhost:9000/cart/${res.id}`);
  });
  //   let items = await axios.post(`http://localhost:9000/cart`,);
  //   return items;
});

const cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    updateProductsData: (state, action) => {
      state.products = action.payload;
    },
    localUpdateItem: (state: any, action: any) => {
      console.log("local update run");
      let previousData = state.products;

      let arr = previousData.map((entry: any) => {
        if (entry.id === action.payload.id) {
          return { ...entry, orderedQuantity: action.payload.orderedQuantity };
        } else {
          return entry;
        }
      });

      state.products = arr;
    },
    localAddItem: (state: any, action: any) => {
      console.log("local add run");
      let previousData = state.products;
      if (state.products === null) {
        state.products = [action.payload.product];
      } else {
        state.products = [...previousData, action.payload.product];
      }
    },
    localDeleteItem: (state: any, action: any) => {
      console.log("local delete run");
      let previousData = state.products;
      let arr = previousData.filter(
        (entry: any) => entry.id !== action.payload.id
      );

      console.log(arr);
      state.products = arr;
    },
    localClearCart: (state: any) => {
      state.products = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthGetCart.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.products = action.payload
    });
  },
});
export const {
  updateProductsData,
  localAddItem,
  localDeleteItem,
  localUpdateItem,
  localClearCart
} = cart.actions;
export default cart.reducer;
