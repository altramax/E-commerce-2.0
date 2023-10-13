import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import del from "../assets/del.jpg";

type quantity = {
  id: number;
};

export default function ProductQantity(props: quantity) {
  const [count, setCount] = useState<number>(0);
  const [depend, setDepend] = useState<boolean>(false);
  let uri = "http://localhost:3000/products/";

  useEffect(() => {
    axios
      .get(uri + props.id)
      .then((res) => {
        setCount(res.data.quantity);
      })
      .catch((err) => err);
  }, [depend]);

  const increaseHandler = () => {
    let g = count + 1;
    axios
      .patch(
        uri + props.id,
        {
          quantity: g,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const decreaseHandler = () => {
    if (count >= 1) {
      let g = count - 1;
      axios
        .patch(
          uri + props.id,
          {
            quantity: g,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .catch((err) => console.log(err));
    }
    window.location.reload();
  };

  const removeProduct = () => {
    axios.delete(uri + props.id).catch((err) => console.log(err));
    setDepend(!depend);
    window.location.reload();
  };

  return (
    <Fragment>
      {depend && (
        <div>
          <div
            className="delOverlay"
            onClick={() => {
              setDepend(false);
            }}
          ></div>
          <div className="deleteModal">
            <img src={del} alt="" />
            <p>Are you sure you want to delete this item?</p>
            <div className="buttons">
              <button
                className="btnCancle"
                onClick={() => {
                  setDepend(false);
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
      <div className="quantityGroup">
        <div
          className="removeProduct"
          onClick={() => {
            setDepend(true);
          }}
        >
          <MdDeleteOutline />
          REMOVE
        </div>
        <div className="CountGroup">
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
      </div>
    </Fragment>
  );
}
