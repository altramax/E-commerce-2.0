import axios from "axios";
import { useState, useEffect } from "react";
import AllProductsStyle from "./AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import Modal from "../ProductDetails/ProductDetails";
import AddToCart from "../AddToCart/AddToCart.js";
import Rating from "../../Molecules/Rating/Rating.js";
import Discount from "../Prices/Discount";
import { useAppDispatch } from "../../../Redux/Hooks.js";
import {} from "../../../Redux/AllProductsSlice.js"
import { networkError, successful } from "../../../Redux/AlertSlice.js";

type propsType = {
  filter: number;
};

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

const AllProducts = (props: propsType): JSX.Element => {
  const [data, setData] = useState<dataStructure[] | null>();
  const [display, setDisplay] = useState<JSX.Element | null>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async () => {
    try {
      const products = await axios.get("http://localhost:9000/products");
      setData(products.data);
      dispatch(successful())
    } catch (error: any) {
      console.log(error);
      if(error.message === "Network Error"){
        dispatch(networkError())
      }
    }
  };

  const cancleHandler = () => {
    setDisplay(null);
  };

  const modalHandler = (info: dataStructure) => {
    {
      data &&
        data.map((sub) => {
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
        {data ? (
          data.map((res, i) => {
            if (i < props.filter) {
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
            }
          })
        ) : (
          <LazyLoading />
        )}
      </div>
    </AllProductsStyle>
  );
};

export default AllProducts;
