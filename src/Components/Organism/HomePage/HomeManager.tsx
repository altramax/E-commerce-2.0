import HomeManagerStyle from "./HomeMangerStyle";
import { Link } from "react-router-dom";
import adidas from "../../assets/Icons/adidas.jpg";
import chanel from "../../assets/Icons/chanel.svg";
import shipping from "../../assets/Icons/shipping.png";
import update from "../../assets/Icons/update.png";
import mask from "../../assets/Icons/mask.png";
import refund from "../../assets/Icons/refund.png";
import samsung from "../../assets/Icons/samsung.png";
import cartier from "../../assets/Icons/cartier.svg";
import { BsArrowRight } from "react-icons/bs";
import men from "../../assets/Images/men.jpg";
import women from "../../assets/Images/women.jpg";
import market from "../../assets/Images/market.jpg";
import sale from "../../assets/Icons/sale.jpg";

const HomeManager = (): JSX.Element => {
  return (
    <HomeManagerStyle>
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
            <Link to="/MenWear" className="shopButton">
              <span>Shop for Men</span>
              <BsArrowRight />
            </Link>
          </div>
          <div className="shopType">
            <img src={women} alt="" className="shopImg" />
            <Link to="/WomenWear" className="shopButton">
              <span>Shop for Women</span>
              <BsArrowRight />
            </Link>
          </div>
          <div className="shopType">
            <img src={market} alt="" className="shopImg" />
            <Link to="/MarketPlace" className="shopButton">
              <span>Super Store</span>
              <BsArrowRight />
            </Link>
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
    </HomeManagerStyle>
  );
};

export default HomeManager;
