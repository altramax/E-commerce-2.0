import ProductDetailsStyle from "./ProductDetailsModalStyle";
import arrow_dark from "../../assets/Icons/arrowDownLongDark.svg";
import arrow_light from "../../assets/Icons/arrowDownLongLight.svg";
import { useAppSelector } from "../../../Redux/Hooks";
import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import { postStructure } from "../AddToCart/AddToCart";

type propsType = {
  cancle: any;
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

  useEffect(() => { 
        setCurrentImage(
          product.images.find((image: any) => image.url !== "")?.url
        );
   
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
        {percentDis > 0 && <small className="dis">{percentDis.toFixed(1)}% dis</small>}
      </div>
    );
  };

  // const formateDate = (evt: any) => {
  //   const options: object = { year: "numeric", month: "long", day: "numeric" };
  //   const date = new Date(evt);
  //   return date.toLocaleString("en-US", options);
  // };

  console.log(product);

  return (
    <ProductDetailsStyle>
      <div className="overlayModal" onClick={product.cancle}></div>
      <div className="products__details__modal__container">
        <div className="cancleIcon" onClick={product.cancle}>
          <img src={arrow_dark} alt="" className="cancleIcon__img" />
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
            <h4>Quantity Available</h4>
            <p> {product?.availableQuantity}</p>
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
            <AddToCart {...product}/>
            
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
