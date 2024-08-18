import { memo } from "react";
import { RootState } from "../Redux/RootReducer";
import { useAppSelector } from "../Redux/Hooks";

type privatetype = { children: JSX.Element };

const PrivateRoute = ({ children }: privatetype) => {
  const auth = useAppSelector((state: RootState) => state.user.user);

  return auth !== null ? children : null;
};

export default memo(PrivateRoute);
