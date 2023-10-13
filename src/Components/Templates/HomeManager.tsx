import { Fragment } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./styles/HomeManager.scss";
import adidas from "./assets/adidas.jpg";
import chanel from "./assets/chanel.svg";
import shipping from "./assets/shipping.png";
import update from "./assets/update.png";
import mask from "./assets/mask.png";
import refund from "./assets/refund.png";
import samsung from "./assets/samsung.png";
import cartier from "./assets/cartier.svg";
import { BsArrowRight } from "react-icons/bs";
import men from "./assets/men.jpg";
import women from "./assets/women.jpg";
import market from "./assets/market.jpg";
import sale from "./assets/sale.jpg";

type Customtype = {
  children: {} | any;
  className: string;
  path: string;
};

export default function HomeHeader() {
  return (
    <Fragment>
      <header className="headerContainer">
        <h2 className="headerText">Everyone's Collections And Style</h2>
      </header>
      <section className="brandsContainer">
        <h3>Brands</h3>
        <div className="brandsGroup">
          <img src={adidas} alt="" className="brands" />
          <img src={chanel} alt="" className="brands" />
          <img src={cartier} alt="" className="brands" />
          <img src={samsung} alt="" className="brands" />
        </div>
      </section>
      <section className="benefits">
        <h2>Benefits of choosing our services</h2>
        <div>
          <p>We ensure our customers have the best shopping experience</p>
          <p>
            We provide free shipping anywhere as long as you spend more than $50
          </p>
        </div>
      </section>
      <section className="offersGroups">
        <div className="offers">
          <img src={refund} alt="" className="offersImg" />
          <h3>Original Products</h3>
          <p>Money back guarantee if the products are not original</p>
        </div>
        <div className="offers">
          <img src={mask} alt="" className="offersImg" />
          <h3>Satisfaction Guarantee</h3>
          <p>Exchange products that don't suit your needs</p>
        </div>
        <div className="offers">
          <img src={update} alt="" className="offersImg" />
          <h3>New Arrivals Everyday</h3>
          <p>We update our collections almost Everyday</p>
        </div>
        <div className="offers">
          <img src={shipping} alt="" className="offersImg" />
          <h3>Fast & Free Shipping</h3>
          <p>We offer fast and free shipping for our customers</p>
        </div>
      </section>
      <section className="shopGroup">
        <h2>Shops</h2>
        <div className="shops">
          <div className="shopType">
            <img src={men} alt="" className="shopImg" />
            <CustomLink path="/MenWear" className="shopButton">
              <span>Shop for Men</span>
              <BsArrowRight />
            </CustomLink>
          </div>
          <div className="shopType">
            <img src={women} alt="" className="shopImg" />
            <CustomLink path="/WomenWear" className="shopButton">
              <span>Shop for Women</span>
              <BsArrowRight />
            </CustomLink>
          </div>
          <div className="shopType">
            <img src={market} alt="" className="shopImg" />
            <CustomLink path="/MarketPlace" className="shopButton">
              <span>Super Store</span>
              <BsArrowRight />
            </CustomLink>
          </div>
        </div>
      </section>
      <section className="discountFooter">
        <div className="textGroup">
          <h3>LIMITED OFFER</h3>
          <h2>
            Get <span>50% off</span> only this Friday on all our products
          </h2>
        </div>
        <div className="imgGroup">
          <div className="point"></div>
          <img src={sale} alt="" className="" />
        </div>
      </section>
    </Fragment>
  );
}

function CustomLink(props: Customtype) {
  const resolvedpath = useResolvedPath(props.path);
  return (
    <Link to={props.path} {...props}>
      {props.children}
    </Link>
  );
}
