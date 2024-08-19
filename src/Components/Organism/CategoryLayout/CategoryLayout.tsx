import CategoryLayoutStyle from "./CategoryLayoutStyles";
import { useEffect, useState } from "react";
import AllProducts from "../ProductsContainer/AllProductsContainer";

const CategoryLayout = () => {
  const [param, setParam] = useState<any>("");
  let query = window.location.href.split("=")[1];

  useEffect(() => {
    setParam(window.location.href.split("=")[1]);
  }, [query]);

  return (
    <CategoryLayoutStyle>
      <AllProducts category={param} />
    </CategoryLayoutStyle>
  );
};

export default CategoryLayout;
