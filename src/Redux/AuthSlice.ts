import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleprovider } from "../Config/Config";

// Define a type for the slice state
interface valueState {
  userId: string;
  message: string;
}

// Define the initial state using that type
const initialState: valueState = {
  userId: "",
  message: "",
};

type propsType = {
  email: string;
  password: string;
};

export const createUser = createAsyncThunk(
  "newUser/signin",
  async (arg: propsType) => {
    const { email, password } = arg;
    let user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  }
);

export const userLogin = createAsyncThunk("email/signin", async(arg: propsType)=>{
  const {email, password} = arg;
  let user = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);
  return user
})

export const googleLogin = createAsyncThunk("google/sigin", async()=>{
  let user = await signInWithPopup(auth, googleprovider);
  return user
})

export const logOut = createAsyncThunk("Signout", async()=>{
  let user = await signOut(auth);
  return user
})



export const UserAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.userId = "";
      state.message = "Request Failed";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.userId = "";
      state.message = "Request Failed";
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
    });
    builder.addCase(googleLogin.rejected, (state) => {
      state.userId = "";
      state.message = "Request Failed";
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.userId = "";
      state.message = "Request Successful";
    });
    builder.addCase(logOut.rejected, (state) => {
      state.message = "Request Failed";
    });
  },
});

export const {} = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
