import CategoryLayoutStyle from "./CategoryLayoutStyles";
import { useEffect, useState } from "react";
import AllProducts from "../ProductsContainer/AllProductsContainer";
import CategoryGroup from "../CategoryGroup/CategoryGroup";
import { useNavigate } from "react-router-dom";

const CategoryLayout = () => {
  const [param, setParam] = useState<any>("");
  const navigate = useNavigate();
  let query = window.location.href.split("=")[1];

  useEffect(() => {
    setParam(window.location.href.split("=")[1]);
  }, [query]);

  const goTo = (route: string) => {
    navigate(route);
  };

  return (
    <CategoryLayoutStyle>
      <div className="category__layout__header">
        <p className="route" onClick={() => goTo("/")}>Home</p>
        <span>{`>`}</span>
        <p className="route" onClick={() => goTo("/category?id=allProducts")}>Category</p>
        <span>{`>`}</span>
        <p>{param}</p>
      </div>
      <h2 className="category__layout__head">{param}</h2>
      <div className="category__layout__flex">
        <div className="category__layout__aside">
          <CategoryGroup />
        </div>
        <div className="category__layout__products">
          <AllProducts category={param} />
        </div>
      </div>
    </CategoryLayoutStyle>
  );
};

export default CategoryLayout;
