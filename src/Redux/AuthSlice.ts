import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../Config/Config";

// Define a type for the slice state
interface valueState {
  value: any;
  message: string;
}

// Define the initial state using that type
const initialState: valueState = {
  value: "",
  message: "",
};

type propsType = {
  email: string;
  password: string;
};

export const userDetails = createAsyncThunk(
  "newUser/signin",
  async (arg: propsType) => {
    const { email, password } = arg;
    let user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;});

export const UserAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(userDetails.fulfilled, (state, action) => {
      state.value = action.payload;
      state.message = "Request Successful";
    });
  },
});
export default UserAuthSlice.reducer;
