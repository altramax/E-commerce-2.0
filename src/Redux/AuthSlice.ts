import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleprovider } from "../Config/Config";
import { successful } from "./AlertSlice";

// Define a type for the slice state
interface valueState {
  user: any;
}

// Define the initial state using that type
const initialState: valueState = {
  user: null,
};

type propsType = {
  email: string;
  password: string;
};

export const createUser = createAsyncThunk(
  "newUser/signin",
  async (arg: propsType, {dispatch}) => {
    const { email, password } = arg;
    let user = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(successful())
    return user;
  }
);

export const userLogin = createAsyncThunk("email/signin", async(arg: propsType, {dispatch})=>{
  const {email, password} = arg;
  let user = await signInWithEmailAndPassword(auth, email, password);
  dispatch(successful())
  return user
})

export const googleLogin = createAsyncThunk("google/sigin", async(arg, {dispatch})=>{
  let user = await signInWithPopup(auth, googleprovider);
  dispatch(successful())
  return user
})

export const logOut = createAsyncThunk("Signout", async(arg,{dispatch})=>{
  let user = await signOut(auth);
  dispatch(successful())
  console.log("called")
  return user
})



export const UserAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.user = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.user = null

      
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(googleLogin.rejected, (state) => {
      state.user = null
      
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null
    });
    builder.addCase(logOut.rejected, (state) => {
      state.user = null
    });
  },
});

export const {  } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
