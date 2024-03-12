import axios from "axios";
import { useState, useEffect } from "react";
import AllProductsStyle from "../ProductsContainer/AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import Modal from "../ProductDetails/ProductDetails";
import AddToCart from "../AddToCart/AddToCart.js";
import Rating from "../../Molecules/Rating/Rating.js";
import Discount from "../Prices/Discount";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";
import { getProducts } from "../../../Redux/AllProductsSlice.js";
import testImage from "../../assets/Images/men.jpg";

type propsType = {
  filter: string;
};

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
  modal: JSX.Element;
};

const FilteredProducts = (props: propsType): JSX.Element => {
  const [display, setDisplay] = useState<JSX.Element | null>();
  const data = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const cancleHandler = () => {
    setDisplay(null);
  };

  const modalHandler = (info: dataStructure) => {
    {
      data &&
        data.map((sub: any) => {
          if (sub.id === info.id) {
            {
              sub.modal = (
                <Modal
                  name={sub.title}
                  img={sub.image}
                  price={sub.price}
                  cancle={cancleHandler}
                  category={sub.category}
                  rating={<Rating compare={sub.rating.rate} />}
                  description={sub.description}
                  id={sub.id}
                />
              );
            }
            setDisplay(sub.modal);
          }
        });
    }
  };

  return (
    <AllProductsStyle>
      <div className="card__group">
        {display}
        {data
          ? data.map((res: any) => {
              let [w, p] = res.category.split(" ");
              if (w === props.filter) {
                return (
                  <div className="card__container" key={res.id}>
                    <div
                      className="card__container__sub"
                      onClick={() => {
                        modalHandler(res);
                      }}
                    >
                      <Discount value={res.price} />
                      <div className="card__image__container">
                        <img
                          src={res.image}
                          alt="Product Image"
                          className="main__image"
                        />
                        <img
                          src={testImage}
                          alt="test"
                          className="hover__image"
                        />
                      </div>
                      <h2>{res.title.slice(0, 25)}</h2>
                      <h3>${res.price}</h3>
                    </div>
                    <AddToCart
                      title={res.title}
                      category={res.category}
                      description={res.description}
                      image={res.image}
                      price={res.price}
                      rating={res.rating}
                      id={res.id}
                    />
                  </div>
                );
              }
            })
          : null}
      </div>
    </AllProductsStyle>
  );
};

export default FilteredProducts;
