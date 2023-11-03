import { useState, useEffect } from "react";
import AllProductsStyle from "./AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import Modal from "../ProductDetails/ProductDetails";
import AddToCart from "../AddToCart/AddToCart.js";
import Rating from "../../Molecules/Rating/Rating.js";
import Discount from "../Prices/Discount";
import { getProducts } from "../../../Redux/AllProductsSlice.js";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
  modal: JSX.Element;
};

const AllProducts = (): JSX.Element => {
  const [display, setDisplay] = useState<JSX.Element | null>();
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const cancleHandler = () => {
    setDisplay(null);
  };

  const modalHandler = (info: dataStructure) => {
    {
      data &&
        data.products.map((sub: any) => {
          if (sub.id === info.id) {
            {
              sub.modal = (
                <Modal
                  name={sub.title}
                  img={sub.image}
                  price={sub.price}
                  cancle={cancleHandler}
                  category={sub.category}
                  rating={<Rating compare={sub.rating.rate} />}
                  description={sub.description}
                  id={sub.id}
                />
              );
            }
            setDisplay(sub.modal);
          }
        });
    }
  };

  const renderAlert = (data: any) => {};

  return (
    <AllProductsStyle>
      <div className="CardGroup">
        {display}
        {data && data.products ? (
          data.products.map((res: any, i: number) => {
            return (
              <div className="CardContainer" key={res.id}>
                <div
                  onClick={() => {
                    modalHandler(res);
                  }}
                >
                  <Discount value={res.price} />
                  <img src={res.image} alt="Product Image" />
                  <h2>{res.title.slice(0, 36)}</h2>
                  <h3>${res.price}</h3>
                </div>
                <AddToCart
                  title={res.title}
                  category={res.category}
                  description={res.description}
                  image={res.image}
                  price={res.price}
                  rating={res.rating}
                  id={res.id}
                />
              </div>
            );
          })
        ) : (
          <LazyLoading />
        )}
      </div>
    </AllProductsStyle>
  );
};

export default AllProducts;
