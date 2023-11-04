import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import del from "../../assets/Icons/del.jpg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { deleteItem, getCartItem, updateItem } from "../../../Redux/CartSlice";

type idType = {
  id: number;
};

export default function ProductQantity({ id }: idType) {
  const [count, setCount] = useState<number>(0);
  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
  const [item, setItem] = useState<any>("");
  const products = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let product = products.cartItems.data.filter((res: any) => {
      return res.id === id;
    })[0];
    setItem(product);
    setCount(product.quantity);
  }, [products.quantity]);

  const quantityHandler = async (action: string) => {
    if (action === "increase") {
      let count = item.quantity + 1;
      let update = {
        id: id,
        quantity: count,
      };
      console.log(update);
      await dispatch(updateItem(update));
      await dispatch(getCartItem());
    } else if (action === "decrease") {
      if (item.quantity > 0) {
        let count = item.quantity - 1;

        let update = {
          id: id,
          quantity: count,
        };
        console.log(update);
        await dispatch(updateItem(update));
        await dispatch(getCartItem());
      }
    }
  };

  // const increaseHandler = () => {
  //   let g = count + 1;
  //   axios
  //     .patch(
  //       uri + id,
  //       {
  //         quantity: g,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //     .catch((err) => console.log(err));
  //   window.location.reload();
  // };

  // const decreaseHandler = () => {
  //   if (count >= 1) {
  //     let g = count - 1;
  //     axios
  //       .patch(
  //         uri + id,
  //         {
  //           quantity: g,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .catch((err) => console.log(err));
  //   }
  //   window.location.reload();
  // };

  const removeProduct = async() => {
    // axios.delete(uri + id).catch((err) => console.log(err));
    setOpenConfirmation(!openConfirmation);
    // window.location.reload();
    await dispatch(deleteItem(id));
    await dispatch(getCartItem());

  };

  return (
    <Fragment>
      <div className="quantityGroup">
        <div
          className="removeProduct"
          onClick={() => {
            setOpenConfirmation(true);
          }}
        >
          <MdDeleteOutline />
          REMOVE
        </div>
        <div className="CountGroup">
          <span
            onClick={() => {
              quantityHandler("decrease");
            }}
            className="countButton"
          >
            -
          </span>
          <span className="counter">{count}</span>
          <span
            onClick={() => {
              quantityHandler("increase");
            }}
            className="countButton"
          >
            +
          </span>
        </div>
      </div>
      {openConfirmation && (
        <div>
          <div
            className="delOverlay"
            onClick={() => {
              setOpenConfirmation(false);
            }}
          ></div>
          <div className="deleteModal">
            <img src={del} alt="" />
            <p>Are you sure you want to delete this item?</p>
            <div className="buttons">
              <button
                className="btnCancle"
                onClick={() => {
                  setOpenConfirmation(false);
                }}
              >
                Cancel
              </button>
              <button className="btnDelete" onClick={removeProduct}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
