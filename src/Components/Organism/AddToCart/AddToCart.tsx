import AddToCartStyle from "./AddToCartStyle";
import { useState, useEffect } from "react";
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

const AddToCart = (props: dataStructure): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<any>();
  const [serverData, setServerData] = useState<any>("");
  const [arrDepends, setArrDepends] = useState<boolean>(false);
  let uri = "http://localhost:3000/products";

  useEffect(() => {
    axios.get(uri).then((res) => {
      setServerData(res.data);
    });
  }, [arrDepends]);

  let IdArray: number[] = [];
  {
    serverData &&
      serverData.map((res: any) => {
        IdArray.push(res.id);
      });
  }

  const addCount =  (data: any) => {
  let g = 0;
   serverData.map((res: any) => {
        if (res.id === data.id) {
          console.log(res);
        g = res.quantity + count;
        }
      });
     return g
  };

  



  const postHandler = async (data: dataStructure) => {
    if (IdArray.includes(data.id) && count > 0) {
   await   axios
        .patch<postStructure>(
          "http://localhost:3000/products/" + data.id,
          {
            quantity: addCount(data),
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
    <AddToCartStyle>
      {message}
      <div className="addToCartGroup">
        <div
          className="addToCartButton"
          onClick={() => {
            setArrDepends(!arrDepends);
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
    </AddToCartStyle>
  );
};

export default AddToCart;

