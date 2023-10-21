import { Route, Routes } from "react-router-dom";
import routes from "./Routes";
import PrivateRoute from "../Config/PrivateRoute";

const RouthPath = () => {
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

export default  RouthPath;
