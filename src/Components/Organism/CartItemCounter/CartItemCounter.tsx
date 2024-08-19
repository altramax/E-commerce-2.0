import CartItemCounterStyle from "./CartItemCounterStyle";
import { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
// import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";

import {
  AuthDeleteItem,
  AuthUpdateCart,
  updateProductsData,
  localUpdateItem,
  localDeleteItem,
} from "../../../Redux/CartSlice";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "../../../Config/Config";
import ConfirmationModal from "../../Molecules/ConfirmationModal/ConfirmationModal";

type cartType = {
  productId: string;
};

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
  orderedQuantity: string | number;
}

const CartItemCounter = ({ productId }: cartType): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  // const items = useAppSelector((state) => state.cart);
  const products = useAppSelector((state) => state.products.products);
  const [product, setProducts] = useState<any>("");
  const user = useAppSelector((state: any) => state.user.user);
  const cartItems = useAppSelector((state) => state.cart.products);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    products?.map((items: any) => {
      if (items.id === productId) {
        setProducts(items);
      }
    });

    cartItems?.map((items: any) => {
      if (items.id === productId) {
        setCount(items.orderedQuantity);
      }
    });
  }, [cartItems]);

  // let getcart = async () => {
  //   const docRef = doc(db, "Cart", user?.uid);
  //   try {
  //     onSnapshot(docRef, async (docSnapshot) => {
  //       let currentItemsArray = docSnapshot.exists()
  //         ? docSnapshot.data().items
  //         : [];
  //       dispatch(updateProductsData(currentItemsArray));
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const increaseHandler = async () => {
    const arg: any = {
      id: productId,
      orderedQuantity: count + 1,
      user: user?.uid,
    };
    if (user?.uid && count !== Number(product.availableQuantity)) {
      await dispatch(AuthUpdateCart(arg));
      // getcart();
    } else if (
      user?.uid === undefined &&
      count !== Number(product.availableQuantity)
    ) {
      console.log("clicked increase");
      dispatch(localUpdateItem(arg));
    }
  };

  const decreaseHandler = async () => {
    const arg: any = {
      id: productId,
      orderedQuantity: count - 1,
      user: user?.uid,
    };
    if (count > 0 && user?.uid) {
      await dispatch(AuthUpdateCart(arg));
      // getcart();
    }

    if (count > 0 && user?.uid === undefined) {
      dispatch(localUpdateItem(arg));
      console.log("clicked decrease");
    }
  };

  const deleteItemHandler = async () => {
    const arg: any = {
      id: productId,
      orderedQuantity: count - 1,
      user: user?.uid,
    };

    if (user?.uid) {
      // getcart();
      await dispatch(AuthDeleteItem(arg));
    } else if (user?.uid === undefined) {
      dispatch(localDeleteItem(arg));
    }
    closeDeleteModal()
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <CartItemCounterStyle>
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
      <div id="remove__item">
        <p>Delete</p>
        <img
          onClick={openDeleteModal}
          src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813167/trash_ue7ms9.svg"
          alt=""
        />
      </div>
      <ConfirmationModal description="Are you sure you want to delete this Item" message="Delete Item" onConfirm={deleteItemHandler} isOpen={deleteModal} onClose={closeDeleteModal}/>
    </CartItemCounterStyle>
  );
};

export default CartItemCounter;
