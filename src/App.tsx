import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouteTemplate from "./Components/Templates/PublicRouteTemplate/PublicRouteTemplate";
import Cart from "./Components/Templates/CartTemplate/Cart";
import PrivateRoute from "./Config/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PublicRouteTemplate />} />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
