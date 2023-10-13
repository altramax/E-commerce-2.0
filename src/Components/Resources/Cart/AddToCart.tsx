import "../styles/AddToCart.scss";
import { useState, useEffect, Fragment } from "react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
};

type postStructure = {
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
  id: number;
};

export default function AddToCart(props: dataStructure) {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<any>();
  const [serverData, setServerData] = useState<postStructure[]>();
  const [arrDepends, setArrDepends] = useState<boolean>(false)
  let uri = "http://localhost:3000/products";

  useEffect(() => {
    axios.get(uri).then((res) => {
      setServerData(res.data);
    });
  },[arrDepends]);

  let IdArray: number[] = [];
  {
    serverData &&
      serverData.map((res) => {
        IdArray.push(res.id);
      });
  }

  const postHandler = (data: dataStructure) => {

      if (IdArray.includes(data.id) && count > 0) {
        axios
          .put<postStructure>(
            "http://localhost:3000/products/"+ data.id,
            {
              id: data.id,
              name: data.title,
              img: data.image,
              price: data.price,
              quantity: count,
              rating: data.rating.rate,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .catch((res) => res);
        setMessage(
          <p className="errorMessage green">Product Updated Successfully</p>
        );
        setCount(0);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else if (!IdArray.includes(data.id) && count > 0) {
        axios
          .post<postStructure>(
            uri,
            {
              id: props.id,
              name: props.title,
              img: props.image,
              price: props.price,
              quantity: count,
              rating: props.rating.rate,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .catch((res) => res);
        setMessage(
          <p className="errorMessage green">Product Added Successfully</p>
        );
        setCount(0);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else if (count === 0) {
        setMessage(<p className="errorMessage">Select Quantity of Product</p>);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
  };

  const increaseHandler = (info: dataStructure) => {
    setCount(count + 1);
  };

  const decreaseHandler = (info: dataStructure) => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <Fragment>
      {message}
      <div className="addToCartGroup">
        <div
          className="addToCartButton"
          onClick={() => {
            setArrDepends(!arrDepends)
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
    </Fragment>
  );
}
