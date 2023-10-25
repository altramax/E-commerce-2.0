import { Route, Routes } from "react-router-dom";
import routes from "./PrivateRoutes";
import PrivateRoute from "../Config/PrivateRoute";

const PrivateRouthPath = () => {
  return (
    <Routes>
      {routes.map(
        (route) =>
          route.elements &&
          route.elements.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              }
            />
          ))
      )}
    </Routes>
  );
};

export default  PrivateRouthPath;
