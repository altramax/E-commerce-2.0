import AddToCartStyle from "./AddToCartStyle";
import { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";

import {
  AuthAddToCart,
  AuthDeleteItem,
  AuthUpdateCart,
  updateProductsData,
  localAddItem,
  localUpdateItem,
  localDeleteItem,
} from "../../../Redux/CartSlice";

export interface postStructure {
  id: string;
  name: string;
  description: string;
  price: number | string;
  discount: number | string;
  nameOfDiscount: string;
  category: string;
  images: {}[];
  sizes: {}[];
  gender: {}[];
  dateCreated: number | string;
}

const AddToCart = (product: postStructure): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: any) => state.user.user);
  const cartItems = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    cartItems?.map((items: any) => {
      if (items.id === product.id && items.orderedQuantity > 0) {
        setCount(items.orderedQuantity);
      }
    });
  }, [cartItems]);

  // let getcart = async () => {
  //   const docRef = doc(db, "Cart", user?.uid);
  //   try {
  //     onSnapshot(docRef, async (docSnapshot) => {
  //       console.log("called");
  //       let currentItemsArray = docSnapshot.exists()
  //         ? docSnapshot.data().items
  //         : [];
  //       dispatch(updateProductsData(currentItemsArray));
  //     });
  //     console.log("updated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const increaseHandler = async () => {
    const arg: any = {
      id: product.id,
      orderedQuantity: count + 1,
      user: user?.uid,
    };
    if (user?.uid) {
      await dispatch(AuthUpdateCart(arg));
      // getcart();
    } else if (user?.uid === undefined) {
      dispatch(localUpdateItem(arg));
    }
  };

  const decreaseHandler = async () => {
    const arg: any = {
      id: product.id,
      orderedQuantity: count - 1,
      user: user?.uid,
    };
    if (count > 1 && user?.uid) {
      await dispatch(AuthUpdateCart(arg));
      // getcart();
    } else if (count === 1 && user?.uid) {
      // getcart();
      console.log("auth delete");
      await dispatch(AuthDeleteItem(arg));
      setCount(0);
    }

    if (count > 1 && user?.uid === undefined) {
      dispatch(localUpdateItem(arg));
    } else if (count === 1 && user?.uid === undefined) {
      dispatch(localDeleteItem(arg));
      setCount(0);
    }
  };

  const addToCartHandler = async () => {
    const arg: any = {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        nameOfDiscount: product.nameOfDiscount,
        category: product.category,
        images: product.images,
        sizes: product.sizes,
        gender: product.gender,
        dateCreated: product.dateCreated,
        orderedQuantity: 1,
      },
      user: user?.uid,
    };
    if (user?.uid) {
      await dispatch(AuthAddToCart(arg));
      // getcart();
    } else {
      await dispatch(localAddItem(arg));
    }
  };

  // console.log(count);
  // console.log(product);

  return (
    <AddToCartStyle>
      <div className="addtocart__container">
        {count === 0 && (
          <button
            className="addToCartButton"
            title="Add Quantity and Click here"
            onClick={() => {
              addToCartHandler();
            }}
          >
            <span> Add To Cart</span>
            <GiShoppingCart size={20} />
          </button>
        )}

        {count !== 0 && (
          <div className="countGroup">
            <span
              onClick={() => {
                decreaseHandler();
              }}
              className="countButton"
            >
              -
            </span>
            <span className="counter">{count}</span>
            <span
              onClick={() => {
                increaseHandler();
              }}
              className="countButton"
            >
              +
            </span>
          </div>
        )}

        <div className="hide">({count} item(s) added)</div>
      </div>
    </AddToCartStyle>
  );
};

export default AddToCart;
