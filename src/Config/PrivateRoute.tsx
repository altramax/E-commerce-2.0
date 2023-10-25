import {memo} from "react";
import { RootState } from "../Redux/RootReducer"
import { useAppSelector } from "../Redux/Hooks"
import { Navigate } from "react-router-dom"

type privatetype = {children: JSX.Element}

 const PrivateRoute = ({children}:privatetype) => {
    const state = useAppSelector((state: RootState)=> state.user)
    const auth = state.userId
    console.log(auth);
   return auth !== "" ? children : null;
}

export default memo(PrivateRoute);
