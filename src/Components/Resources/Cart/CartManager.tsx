import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CartManager.scss";
import Discount from "../Prices/Discount";
import NewPrice from "../Prices/NewPrice";
import ProductQantity from "./ProductQuantity";
import empty from "../assets/empty.jpg";
import Checkout from "../Checkout/Checkout";

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: { rate: number };
  category: string;
  description: string;
};

export default function CartManager() {
  const [data, setData] = useState<getStructure[] | []>([]);
  const [array, setArray] = useState<number[]>([]);
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        res.data.map((props: getStructure) => {
          if (props.price > 100 && props.price < 200) {
            let w = props.quantity * (props.price - props.price * (15 / 100));
            setArray((e) => [...e, w]);
          } else if (props.price > 200) {
            let w = props.quantity * (props.price - props.price * (20 / 100));
            setArray((e) => [...e, w]);
          } else if (props.price < 100) {
            let w = props.quantity * (props.price - props.price * (10 / 100));
            setArray((e) => [...e, w]);
          }
        });
        setData(res.data);
      })
      .catch((err) => err);
  }, []);

  const checkoutHandler = () => {
    setDisplay(true);
  };
  const clearHandler = () => {
    setDisplay(false);
  };

  return (
    <div className="CartGroup">
      {data?.length > 0 ? (
        data.map((res) => {
          return (
            <div key={res.id} className="CartCard">
              <div className="cartCardFlex">
                <div className="imgAndName">
                  <img src={res.img} alt="Product Image" />
                  <h4>{res.name.slice(0, 36)}</h4>
                </div>
                <div className="PriceGroup">
                  <h3>${<NewPrice value={res.price} />}</h3>
                  <div className="OldpriceandDiscount">
                    <h4 className="oldPrice">${res.price}</h4>
                    <Discount value={res.price} />
                  </div>
                </div>
              </div>
              <ProductQantity id={res.id}/>
            </div>
          );
        })
      ) : (
        <div className="emptyImage">
          <img src={empty} alt="" />
        </div>
      )}
      {array.length > 0 && (
        <div className="subTotalContainer">
          <h3>CART SUMMARY</h3>
          <div className="subTotal">
            <h3>Subtotal</h3>
            <h3>
              $
              {array
                .reduce((a, b): number => {
                  return a + b;
                }, 0)
                .toFixed(2)}
            </h3>
          </div>
          <h3 className="Checkout" onClick={checkoutHandler}>
            CHECKOUT
          </h3>
        </div>
      )}
      {display && <Checkout func={clearHandler} arr={array}/>}
    </div>
  );
}
