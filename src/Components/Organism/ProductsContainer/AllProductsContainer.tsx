import { useState, useEffect } from "react";
import AllProductsStyle from "./AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal.js";
import AddToCart from "../AddToCart/AddToCart.js";
import {
  getAllProducts,
  getProductCategory,
} from "../../../Redux/ProductsSlice.js";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";
import EmptyState from "../../Molecules/EmptyState/EmptyState.js";

type productQuery = {
  category: string;
};

const AllProducts = ({ category }: productQuery): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const categoryProducts = useAppSelector((state) => state.products.categoryProducts);
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const products = category === "allProducts" ? allProducts : categoryProducts;

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    fetchProductData();
  }, [category]);

  const fetchProductData = async () => {
    if (category === "allProducts") {
      await dispatch(getAllProducts());
    } else {
      await dispatch(getProductCategory(category));
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderModal = () => {
    if (modal === true) {
      return <ProductDetailsModal {...selectedItem} cancle={closeModal} />;
    }
  };

  const productImageHandler = (images: any) => {
    let img = images?.find((image: any) => {
      if (image.url !== "") {
        return image.url;
      }
    })?.url;
    return img !== undefined ? img : "";
  };

  console.log(products);

  return (
    <AllProductsStyle>
      <>
        <div className="card__group">
          {renderModal()}

          {products !== null ? (
            <>
              {products !== null && products.length !== 0 ? (
                <>
                  {products?.map((product: any, i: any) => {
                    return (
                      <div
                        className="card__container"
                        key={i}
                        onClick={() => setSelectedItem(product)}
                      >
                        <div className="card__inner__container">
                          <img
                            src={productImageHandler(product?.images)}
                            alt="Product Image"
                            className="product__image"
                            onClick={openModal}
                          />

                          <div className="cart">
                            <AddToCart {...product} />
                          </div>
                        </div>
                        <p className="product__name">
                          {product?.name.slice(0, 15)}
                        </p>
                        <p className="product__price">{`₦${Number(
                          product.price
                        ).toLocaleString()}`}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <EmptyState
                  header="Category Not Available"
                  text="This Category is currently unavailable, please check back soon"
                />
              )}
            </>
          ) : (
            <>
              <div className="card__container lazy-loading-container">
                <div className="lazy-loading"></div>
              </div>
              <div className="card__container lazy-loading-container">
                <div className="lazy-loading"></div>
              </div>
              <div className="card__container lazy-loading-container">
                <div className="lazy-loading"></div>
              </div>
              <div className="card__container lazy-loading-container">
                <div className="lazy-loading"></div>
              </div>
              <div className="card__container lazy-loading-container">
                <div className="lazy-loading"></div>
              </div>
            </>
          )}
        </div>
      </>
    </AllProductsStyle>
  );
};

export default AllProducts;
