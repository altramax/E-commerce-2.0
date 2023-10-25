import  UserAuthSlice  from "./AuthSlice";
import  AllProductsSlice  from "./AllProductsSlice";
import { combineReducers } from "@reduxjs/toolkit";

 const rootReducer = combineReducers({
   user : UserAuthSlice,
   products :  AllProductsSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>