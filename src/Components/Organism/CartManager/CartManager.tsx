import { useState, useEffect } from "react";
import CartManagerStyle from "./CartManagerStyle";
import NewPrice from "../Prices/NewPrice";
import ProductQantity from "../../Molecules/ProductQuantity/ProductQuantity";
import Checkout from "../Checkout/Checkout";
import { useAppSelector } from "../../../Redux/Hooks";
import CartItemCounter from "../CartItemCounter/CartItemCounter";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Molecules/CartCard/CartCard";
import EmptyState from "../../Molecules/EmptyState/EmptyState";
import { BsArrowRight } from "react-icons/bs";

export interface getStructure {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: { rate: number };
  category: string;
  description: string;
}

const CartManager = (): JSX.Element => {
  // const [display, setDisplay] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.products);
  const navigate = useNavigate();

  useEffect(() => {
    subtotalHandler();
  }, [cartItems]);

  const checkoutHandler = () => {
    // setDisplay(true);
    navigate("/checkout");
  };

  // const clearHandler = () => {
  //   setDisplay(false);
  // };

  const productImageHandler = (images: any) => {
    let img = images?.find((image: any) => {
      if (image.url !== "") {
        return image.url;
      }
    })?.url;
    return img !== undefined ? img : "";
  };

  const subtotalHandler = () => {
    let priceArray = cartItems
      ?.map((item: any) => {
        const cost = Number(item?.price) * Number(item?.orderedQuantity);
        const dis = item?.discount !== 0 ? Number(item?.discount) : "";
        return dis !== "" && cost !== 0 ? cost - dis : cost;
      })
      .reduce((a: number, b: number) => {
        return a + b;
      }, 0);

    return priceArray ? <h4>₦{priceArray.toLocaleString()}</h4> : <h4>0</h4>;
  };

  console.log(cartItems);

  return (
    <CartManagerStyle>
      <div className="cartManager__container">
        {cartItems && cartItems?.length !== 0 && (
          <h2 className="header__name">Shopping History</h2>
        )}

        {cartItems && cartItems?.length !== 0 ? (
          <div className="cart__items__list">
            {cartItems?.map((res: any) => {
              return <CartCard {...res} />;
            })}
          </div>
        ) : (
          <div>
            <EmptyState
              header="Your Cart Is Empty"
              text="Click to Add products"
            />
            <div
              onClick={()=>{

               
                  navigate(`/category?id=${"allProducts"}`);
                
              }}
              className="shopButton"
            >
              <span>Add Products</span>
              <BsArrowRight />
            </div>
          </div>
        )}

        {/* <div> */}

        <div
          className={`subTotalContainer ${
            cartItems && cartItems?.length !== 0 ? null : "hidden"
          }`}
        >
          <h3> SUMMARY</h3>
          <div className="subTotal">
            <p>No. of items</p>
            <h4>{cartItems?.length}</h4>
          </div>
          <div className="subTotal">
            <p>Subtotal</p>
            {subtotalHandler()}
          </div>
          {/* <div className="subTotal">
              <p>Delivery</p>
              <h4>₦1,000</h4>
            </div> */}
          {/* <div className="subTotal">
              <p>Tax</p>
            </div> */}
          {/* <div className="line"></div> */}
          {/* <div className="subTotal">
              <h3>Total Price</h3>
              {`${subtotalHandler()} ${+ 1000}`}
            </div> */}
          <button
            disabled={cartItems === null}
            className="Checkout"
            onClick={checkoutHandler}
          >
            CHECKOUT
          </button>
        </div>

        {/* {display && <Checkout func={clearHandler} arr={cartItems} />} */}
        {/* </div> */}
      </div>
    </CartManagerStyle>
  );
};

export default CartManager;
