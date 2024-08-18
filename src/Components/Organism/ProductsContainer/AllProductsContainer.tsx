import { useState, useEffect } from "react";
import AllProductsStyle from "./AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal.js";
import AddToCart from "../AddToCart/AddToCart.js";
import { getAllProducts } from "../../../Redux/ProductsSlice.js";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";
import EmptyState from "../../Molecules/EmptyState/EmptyState.js";

type productQuery = {
  category: string;
};

const AllProducts = ({ category }: productQuery): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>("");
  const [search, setSearch] = useState<boolean>(false);
  const products = useAppSelector((state) => state.products.products);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  useEffect(() => {
    // console.log(products);
    const searchTerm = products && products.filter((product: any) => product.category === category);

    // console.log(products && searchTerm.length);
    if (category === "allProducts") {
      console.log("enter all");
    } else if (searchTerm !== null  && category !== "allProducts" &&
      searchTerm.length === 0
    ) {
      setSearch(true);
      console.log("enter");
    }


  }, [products, category]);

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

  // console.log(
  //   products && products.find((product: any) => product.category === category)
  // );

  return (
    <AllProductsStyle>
      <>
        <div className="card__group">
          {renderModal()}

          {products?.map((product: any, i: any) => {
            if (category === "allProducts" && product.category !== category) {
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
                  <p className="product__name">{product?.name.slice(0, 15)}</p>
                  <p className="product__price">{`₦${Number(
                    product.price
                  ).toLocaleString()}`}</p>
                </div>
              );
            } else if (product.category === category) {
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
                  <p className="product__name">{product?.name.slice(0, 15)}</p>
                  <p className="product__price">{`₦${Number(
                    product.price
                  ).toLocaleString()}`}</p>
                </div>
              );
            }
          })}

          {search && (
            <EmptyState
              header="Category Not Available"
              text="This Category is currently unavailable, please check back soon"
            />
          )}
        </div>
      </>
    </AllProductsStyle>
  );
};

export default AllProducts;
