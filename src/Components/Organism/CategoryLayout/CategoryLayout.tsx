import CategoryLayoutStyle from "./CategoryLayoutStyles";
import { useEffect, useState } from "react";
import AllProducts from "../ProductsContainer/AllProductsContainer";
import CategoryGroup from "../../Organism/CategoryGroup/CategoryGroup";

const CategoryLayout = () => {
  const [param, setParam] = useState<any>("");
  const [reload, setreload] = useState<boolean>(false);
  let query = window.location.href.split("=")[1];

  useEffect(() => {
    setParam(window.location.href.split("=")[1]);
    console.log("market reloaded  ");
  }, [query]);

  const reloadHandler = () => {
    setreload(!reload);
  };

  return (
    <CategoryLayoutStyle>
      <div onClick={reloadHandler}>
        <CategoryGroup />
      </div>
      <AllProducts category={param} />
    </CategoryLayoutStyle>
  );
};

export default CategoryLayout;
