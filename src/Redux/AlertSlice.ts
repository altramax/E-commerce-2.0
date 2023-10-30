import { createSlice} from "@reduxjs/toolkit";

type alertType = {
    message : string;
}

const initialState : alertType = {
    message : ""
};

const AlertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        successful : (state)=>{
          state.message = "Request Successful"
        },
        failed : (state) =>{
            state.message = "Invalid Request"
        },
        networkError : (state) =>{
            state.message = "NetWork Error"
        },
        otherErrors : (state, action) =>{
            state.message = action.payload
        }
    }
});

export const { successful, failed, networkError, otherErrors} = AlertSlice.actions;
export default AlertSlice.reducer;

