import PublicRoutes from "./PublicRoute";
import { Routes, Route } from "react-router-dom";

const PublicRoutePath = ()  => {
  return (
    <>
      <Routes>
        {PublicRoutes.map(
          (route) =>
            route.elements &&
            route.elements.map((route, i) => (
              <Route key={i}
               path={route.path}
                element={<route.component/>} />
            ))
        )}
      </Routes>
    </>
  );
};

export default PublicRoutePath;