import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PublicRouteTemplate from "./Components/Templates/PublicRouteTemplate/PublicRouteTemplate";
import CheckoutTemplate from "./Components/Templates/CheckoutTemplate/CheckoutTemplate";
import PrivateRoute from "./Config/PrivateRoute";
import { useAppSelector } from "./Redux/Hooks";
import { RootState } from "./Redux/RootReducer";
import HomePageTemplate from "./Components/Templates/HomePageTemplate/HomePageTemplate";
import Cart from "./Components/Templates/CartTemplate/Cart";
import MarketPlaceTemplate from "./Components/Templates/MarketPlaceTemplate/MarketPlaceTemplate";


import UserProfileTemplate from "./Components/Templates/UserProfileTemplate/UserProfileTemplate";

function App() {
  const auth = useAppSelector((state: RootState) => state.user.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageTemplate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<MarketPlaceTemplate />} />
          <Route path="/userprofile/*" element={<UserProfileTemplate/>} />
          
          <Route
            path="/checkout"
            element={
              auth === null ? (
                <UserProfileTemplate />
              ) : (
                <PrivateRoute>
                  <CheckoutTemplate />
                </PrivateRoute>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
