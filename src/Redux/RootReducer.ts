import { combineReducers } from "@reduxjs/toolkit";
import  UserAuthSlice  from "./AuthSlice";
import  AllProductsSlice  from "./AllProductsSlice";
import AlertSlice from "./AlertSlice";

 const rootReducer = combineReducers({
   user : UserAuthSlice,
   products :  AllProductsSlice,
   alert : AlertSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>