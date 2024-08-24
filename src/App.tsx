import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckoutTemplate from "./Components/Templates/CheckoutTemplate/CheckoutTemplate";
import PrivateRoute from "./Config/PrivateRoute";
import { useAppSelector } from "./Redux/Hooks";
import { RootState } from "./Redux/RootReducer";
import HomePageTemplate from "./Components/Templates/HomePageTemplate/HomePageTemplate";
import Cart from "./Components/Templates/CartTemplate/Cart";
import MarketPlaceTemplate from "./Components/Templates/MarketPlaceTemplate/MarketPlaceTemplate";
import UserProfileTemplate from "./Components/Templates/UserProfileTemplate/UserProfileTemplate";
import ProductDetailsTempate from "./Components/Templates/ProductsDetailsTemplate/ProductDetailsTempate";

function App() {
  const auth = useAppSelector((state: RootState) => state.user.user);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(()=>{
    setLoaded(true)
  },[])

  return (
    <div className={`App ${loaded ? "loaded" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageTemplate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails" element={<ProductDetailsTempate />} />
          <Route path="/category" element={<MarketPlaceTemplate />} />
          <Route path="/userprofile/*" element={<UserProfileTemplate />} />

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
