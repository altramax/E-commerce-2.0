import {memo} from "react";
import { RootState } from "../Redux/ConfigStore"
import { useAppSelector } from "../Redux/Hooks"
import { Navigate } from "react-router-dom"

type privatetype = {children: JSX.Element}

 const PrivateRoute = ({children}:privatetype) => {
    const state = useAppSelector((state: RootState)=> state.user)
    const auth = state.value
    console.log(auth);
   return auth !== "" ? children : <Navigate to="/" />
}

export default memo(PrivateRoute);
