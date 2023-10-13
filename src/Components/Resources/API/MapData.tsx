import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/MapData.scss";
import LazyLoading from "./ProductsLazyLoading.jsx";
import Modal from "../../Templates/ProductDetails";
import AddToCart from "../Cart/AddToCart";
import Rating from "../Cart/Rating";
import Discount from "../Prices/Discount";

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

export default function MapData(props: propsType) {
  const [data, setData] = useState<dataStructure[] | null>();
  const [display, setDisplay] = useState<JSX.Element | null>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((res) => console.log(res.message));
  }, []);

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
                  rating={<Rating compare={sub.rating.rate}/>
                  }
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

  return (
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
                  <Discount value={res.price}/>
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
  );
}
