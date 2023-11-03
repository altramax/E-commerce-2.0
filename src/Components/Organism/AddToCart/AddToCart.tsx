import AddToCartStyle from "./AddToCartStyle";
import { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import {
  addToCart,
  clearCart,
  getCartItem,
  updateItem,
} from "../../../Redux/CartSlice";
import { successful } from "../../../Redux/AlertSlice";

export interface dataStructure {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
}

export interface postStructure {
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
  id: number;
}

const AddToCart = (props: dataStructure): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart);

  const addCount = (data: any) => {
    let count = 0;
    items.cartItems.data.map((res: any) => {
      if (res.id === data.id) {
        console.log(res.quantity + count);
        count = res.quantity + count;
      }
    });
    return count;
  };

  const postHandler = async (data: dataStructure) => {
    dispatch(clearCart(items.cartItems.data))

    // if (items.cartIds.includes(data.id) && count > 0) {
    //   console.log("this is patch");
    //   const update = {
    //     id: data.id,
    //     quantity: addCount(count),
    //   };
    //   await dispatch(updateItem(update));
    //   setMessage("update");
    //   setCount(0);
    //  await dispatch(getCartItem());
    //   setTimeout(() => {
    //     setMessage("");
    //   }, 2000);
    // } else if (!items.cartIds.includes(data.id) && count > 0) {
    //   console.log("this is post");
    //   const post = {
    //     id: props.id,
    //     name: props.title,
    //     img: props.image,
    //     price: props.price,
    //     quantity: count,
    //     rating: props.rating.rate,
    //   };
    //   dispatch(addToCart(post));
    //   setMessage("add");
    //   setCount(0);
    //   dispatch(getCartItem());

    //   setTimeout(() => {
    //     setMessage("");
    //   }, 2000);
    // } else if (count === 0) {
    //   setMessage("failed");
    //   setTimeout(() => {
    //     setMessage("");
    //   }, 2000);
    // }
  };

  const increaseHandler = (info: dataStructure) => {
    setCount(count + 1);
  };

  const decreaseHandler = (info: dataStructure) => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const renderHandlerMessage = () => {
    if (message === "update") {
      return <p className="errorMessage green">Product Updated Successfully</p>;
    } else if (message === "add") {
      return <p className="errorMessage green">Product Added Successfully</p>;
    } else if (message === "failed") {
      return <p className="errorMessage">Select Quantity of Product</p>;
    }
  };

  return (
    <AddToCartStyle>
      <>
        {renderHandlerMessage()}
        <div className="addToCartGroup">
          <div
            className="addToCartButton"
            onClick={() => {
              postHandler(props);
            }}
          >
            <span> Add To Cart</span>
            <GiShoppingCart size={20} />
          </div>

          <div className="countGroup">
            <span
              onClick={() => {
                decreaseHandler(props);
              }}
              className="countButton"
            >
              -
            </span>
            <span className="counter">{count}</span>
            <span
              onClick={() => {
                increaseHandler(props);
              }}
              className="countButton"
            >
              +
            </span>
          </div>
        </div>
      </>
    </AddToCartStyle>
  );
};

export default AddToCart;
