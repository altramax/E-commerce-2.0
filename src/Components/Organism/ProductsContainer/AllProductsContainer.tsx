import { useState, useEffect } from "react";
import AllProductsStyle from "./AllProductsStyle.js";
import LazyLoading from "../../Molecules/ProductsLazyLoading/ProductsLazyLoading.js";
import Modal from "../ProductDetails/ProductDetails";
import AddToCart from "../AddToCart/AddToCart.js";
import Rating from "../../Molecules/Rating/Rating.js";
import Discount from "../Prices/Discount";
import { getProducts } from "../../../Redux/AllProductsSlice.js";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks.js";
import testImage from "../../assets/Images/men.jpg";

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

const AllProducts = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderModal = () => {
    if (modal === true) {
      let item = data.products.filter((res: any) => res.id === selectedItem)[0];
      return (
        <Modal
          name={item.title}
          img={item.image}
          price={item.price}
          cancle={closeModal}
          category={item.category}
          rating={<Rating compare={item.rating.rate} />}
          description={item.description}
          id={item.id}
        />
      );
    }
  };

  return (
    <AllProductsStyle>
      <>
        {renderModal()}
        <div className="card__group">
          {data && data.products ? (
            data.products.map((res: any, i: number) => {
              return (
                <div
                  className="card__container"
                  key={res.id}
                  onClick={() => setSelectedItem(res.id)}
                >
                  <div className="card__container__sub" onClick={openModal}>
                    {/* <Discount value={res.price} /> */}

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
            })
          ) : null}
        </div>
      </>
    </AllProductsStyle>
  );
};

export default AllProducts;
