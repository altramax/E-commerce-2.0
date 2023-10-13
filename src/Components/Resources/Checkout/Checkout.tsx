import { useState, Fragment, useEffect } from "react";
import cancle from "../assets/cancle.svg";
import Confirm from "./ConfirmOrder";
import "../styles/Checkout.scss";
import axios from "axios";

type proptype = {
  func: any;
  arr: number[];
};

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
};

export default function Checkout(props: proptype) {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [delivery, setDelivery] = useState<string>("");
  const [checkCard, setCheckcard] = useState<boolean>(false);
  const [checkCash, setCheckCash] = useState<boolean>(false);
  const [message, setMessage] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [cost, setCost] = useState<any>();

  useEffect(() => {
    setCost(
      props.arr
        .reduce((a, b): number => {
          return a + b;
        }, 0)
        .toFixed(2)
    );
  }, []);

  const firstnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const deliveryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(e.target.value);
  };

  const checkCardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckcard(!checkCard);
    if (e.target.checked === true) {
      setMessage("Card Payment Not Available");
    } else {
      setMessage("");
    }
  };

  const checkCashHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckCash(!checkCash);
  };

  const confirmHandler = () => {
    if (
      checkCash === true &&
      checkCard === false &&
      firstname !== undefined &&
      lastname !== undefined &&
      delivery !== undefined
    ) {
      setConfirm(true);
      axios
        .get("http://localhost:3000/products")
        .then((res) => {
          res.data.map((res: dataStructure) => {
            axios
              .delete("http://localhost:3000/products/" + res.id)
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
    } else {
      setError("Enter Valid Information");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const clearHandler = () => {
    window.location.replace("/");
    window.location.reload();
    setConfirm(false);
  };

  return (
    <Fragment>
      <form action="" className="Form">
        {error && <h3 className="error">{error}</h3>}
        <img
          src={cancle}
          alt="Cancle"
          className="cancleImage"
          onClick={props.func}
        />
        <h1>Delivery Information</h1>
        <div className="inputGroup">
          <label htmlFor="Fistname">First Name</label>
          <input
            id="firstname"
            type="text"
            onChange={firstnameHandler}
            value={firstname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Fistname">Last Name</label>
          <input
            id="firstname"
            type="text"
            onChange={lastnameHandler}
            value={lastname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Fistname">Delivery Address</label>
          <input
            id="firstname"
            type="text"
            onChange={deliveryHandler}
            value={delivery}
          />
        </div>
        <div className="PaymentGroup">
          <h2>SELECT METHOD OF PAYMENT</h2>
          <div className="PaymentOptions">
            <span>Pay With Card</span>
            <input
              type="checkbox"
              checked={checkCard}
              onChange={checkCardHandler}
            />
            <h3>{message}</h3>
          </div>
          <div className="PaymentOptions">
            <span>Pay On Delivery</span>
            <input
              type="checkbox"
              checked={checkCash}
              onChange={checkCashHandler}
            />
          </div>
        </div>
        <div className="amount">
          <h2>SubTotal</h2>
          <h3>${cost}</h3>
        </div>
        <div className="PaymentConfirmation">
          <h2 onClick={confirmHandler} className="confirmText">
            Confirm Order
          </h2>
          {confirm && (
            <Confirm
              firstName={firstname}
              lastName={lastname}
              delivery={delivery}
              subtotal={cost}
            />
          )}
        </div>
        {confirm && <div className="FormOverlay" onClick={clearHandler}></div>}
      </form>
    </Fragment>
  );
}
