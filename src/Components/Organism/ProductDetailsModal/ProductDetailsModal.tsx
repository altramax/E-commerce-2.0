import ProductDetailsStyle from "./ProductDetailsModalStyle";
import { HiArrowLeft } from "react-icons/hi2";
import { useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import { postStructure } from "../AddToCart/AddToCart";
import { useNavigate } from "react-router-dom";

type propsType = {
  id: string;
  name: string;
  description: string;
  price: number | string;
  discount: number | string;
  nameOfDiscount: string;
  category: string;
  images: any;
  sizes: any;
  gender: any;
  dateCreated: number | string;
  availableQuantity: string | number;
};

const ProductDetailsModal = (product: propsType): JSX.Element => {
  const [currentImage, setCurrentImage] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentImage(product.images.find((image: any) => image.url !== "")?.url);
  }, []);

  const priceAndDiscount = () => {
    const price = Number(product?.price);
    const discount = Number(product?.discount);
    const percentDis = (discount * 100) / price;
    const newPrice = price - discount;

    return (
      <div className="flex">
        {percentDis > 0 && <h5>₦{Number(product?.price).toLocaleString()}</h5>}
        <h2>₦{newPrice.toLocaleString()}</h2>
        {percentDis > 0 && (
          <small className="dis">{percentDis.toFixed(1)}% dis</small>
        )}
      </div>
    );
  };

  // const formateDate = (evt: any) => {
  //   const options: object = { year: "numeric", month: "long", day: "numeric" };
  //   const date = new Date(evt);
  //   return date.toLocaleString("en-US", options);
  // };

  console.log(product);

  const cancle = () => {
    navigate(-1);
  };

  const goTo = (route: string) => {
    navigate(route);
  };

  return (
    <ProductDetailsStyle>
      <div className="products__details__modal__container">
        <h2 className="header__name">Product Details</h2>

        <div className="products__details__modal__header">
          <p className="route" onClick={() => goTo("/")}>
            Home
          </p>
          <span>{`>`}</span>
          <p className="route" onClick={() => goTo("/category?id=allProducts")}>
            Category
          </p>
          <span>{`>`}</span>
          <p>{product.name}</p>
        </div>
        <div className="cancleIcon" onClick={cancle}>
          <HiArrowLeft size="40" />
        </div>
        <div className="products__details__modal">
          <div className="images__container">
            <div className="sub__images__container">
              {product?.images?.map((img: any, i: string) => {
                if (img.url !== "") {
                  return (
                    <div className={`sub__image `} key={i}>
                      <img
                        src={img.url}
                        // alt="product Image"
                        className={`img`}
                        onClick={() => {
                          setCurrentImage(img.url);
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="main__images">
              <img src={currentImage} alt="Product Image" />
            </div>
          </div>

          <div className="discription__container">
            <h2>{product?.name}</h2>
            {product && priceAndDiscount()}
            {/* <h4>Date Created</h4>
            <p> {formateDate(product?.dateCreated.split(",")[0])}</p> */}
            {/* <h4>Quantity Available</h4>
            <p> {product?.availableQuantity}</p> */}
            <div className="info">
              <div className="size__container">
                <h4>Available Sizes</h4>
                <div className="small__boxes__container">
                  {product?.sizes?.xs && (
                    <p className={`small__box selected`}>XS</p>
                  )}
                  {product?.sizes?.s && (
                    <p className={` small__box selected`}>S</p>
                  )}
                  {product?.sizes?.m && (
                    <p className={`small__box selected`}>M</p>
                  )}
                  {product?.sizes?.xl && (
                    <p className={`small__box selected`}>Xl</p>
                  )}
                  {product?.sizes?.xxl && (
                    <p className={`small__box selected`}>XXL</p>
                  )}
                </div>
              </div>
              <div className="size__container">
                <h4>Gender</h4>
                <div className="small__boxes__container">
                  {product?.gender?.male && (
                    <p className={`small__box selected`}>Male</p>
                  )}
                  {product?.gender?.female && (
                    <p className={`small__box selected`}>Female</p>
                  )}
                  {product?.gender?.unisex && (
                    <p className={`small__box selected`}>Unisex</p>
                  )}
                </div>
              </div>
            </div>
            <div className="addtocart__div">
              <AddToCart {...product} />
            </div>

            <h4>Category</h4>
            <p>{product?.category}</p>

            <h4>Description</h4>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </ProductDetailsStyle>
  );
};

export default ProductDetailsModal;
