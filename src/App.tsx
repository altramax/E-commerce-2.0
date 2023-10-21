import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PublicRouteTemplate from "./Components/Templates/PublicRouteTemplate/PublicRouteTemplate";
import Cart from "./Components/pages/Cart";
import PrivateRoute from "./Config/PrivateRoute";
// import HomePageTemplate from "./Components/Templates/HomePage/HomePageTemplate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PublicRouteTemplate />} />
        {/* <Route path="/HomePage" element={<HomePageTemplate/>}/> */}
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
