import { useState, useEffect } from "react";
import axios from "axios";
import CartManagerStyle from "./CartManagerStyle";
import Discount from "../Prices/Discount";
import NewPrice from "../Prices/NewPrice";
import ProductQantity from "../../Molecules/ProductQuantity/ProductQuantity";
import empty from "../../assets/Icons/empty.jpg";
import Checkout from "../Checkout/Checkout";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";

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

const CartManager = (): JSX.Element => {
  const [array, setArray] = useState<number[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart.quantity]);

  // console.log(cart.quantity);

  const calculateTotalPrice = () => {
    let sumTotal =
      cart.cartItems !== "" && cart.cartItems.data
        ? cart.cartItems.data.map((res: any) => {
            if (res.price > 100 && res.price < 200) {
              let total = res.quantity * (res.price - res.price * (15 / 100));
              return total;
            } else if (res.price > 200) {
              let total = res.quantity * (res.price - res.price * (20 / 100));
              return total;
            } else if (res.price < 100) {
              let total = res.quantity * (res.price - res.price * (10 / 100));
              return total;
            }
          })
        : null;
    setArray(sumTotal);
  };

  const checkoutHandler = () => {
    setDisplay(true);
  };
  const clearHandler = () => {
    setDisplay(false);
  };  

  console.log(cart.cartItems);
  return (
    <CartManagerStyle>
      <div className="CartGroup">
        {cart.cartItems !== "" && cart.cartItems.data.length !== 0 ? (
          cart.cartItems.data.map((res: any) => {
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
                <ProductQantity id={res.id} />
              </div>
            );
          })
        ) : (
          <div className="emptyImage">
            <img src={empty} alt="" />
          </div>
        )}
        {array && array.length > 0 && (
          <div className="subTotalContainer">
            <h3>CART SUMMARY</h3>
            <div className="subTotal">
              <h3>Subtotal</h3>
              <h3>
                $
                {array
                  .reduce((a, b): number => {
                    console.log(array);
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
        {display && <Checkout func={clearHandler} arr={array} />}
      </div>
    </CartManagerStyle>
  );
};

export default CartManager;
