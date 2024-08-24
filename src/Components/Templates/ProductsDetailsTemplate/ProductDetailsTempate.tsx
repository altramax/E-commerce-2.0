import ProductDetailsTemplateStyle from "./ProductDetailsTemplateStyle";
import ProductDetailsModal from "../../Organism/ProductDetailsModal/ProductDetailsModal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";
import {
  getAllProducts,
  getProductCategory,
} from "../../../Redux/ProductsSlice.js";
import Navbar from "../NavbarTemplate/NavbarTemplate";

const ProductDetailsTempate = () => {
  const [param, setParam] = useState<any>(null);
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const dispatch = useAppDispatch();

  let query = window.location.href.split("=")[1];

  useEffect(() => {
    if (allProducts !== null) {
      allProducts.map((res: any) => {
        if (res.id === window.location.href.split("=")[1]) {
          setParam(res);
        }
      });
    }
  }, [allProducts]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [query]);

  return (
    <ProductDetailsTemplateStyle>
        <Navbar/>
        
      {param !== null && <ProductDetailsModal {...param} />}
    </ProductDetailsTemplateStyle>
  );
};

export default ProductDetailsTempate;
