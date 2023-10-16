import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./ConfigStore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleprovider, db } from "../Config/Config";

// Define a type for the slice state
interface valueState {
  value: string;
}

// Define the initial state using that type
const initialState: valueState = {
  value: "",
};

export const userDetails = createAsyncThunk(
  "newUser",
  async (arg: { email: string, password: string }) => {
    const { email, password } = arg;
    let user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  }
);



export const UserAuthSlice = createSlice({
  name: "UserAuth",

  initialState,

  reducers: {
    creatUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {},
    signIn: (state) => {
      async () => {
        try {
        } catch (error) {}
      };
    },
    signinWithGoogle: (state) => {},

    logOut: (state) => {
      async () => {
        try {
        } catch (error) {}
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userDetails.fulfilled, (state, action) => {
    //   state.value = action.payload;
    });
  },
});

export const { creatUser, signIn, signinWithGoogle, logOut } =
  UserAuthSlice.actions;

export default UserAuthSlice.reducer;
