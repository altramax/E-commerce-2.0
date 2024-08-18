import HomeManagerStyle from "./HomeMangerStyle";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CategoryGroup from "../CategoryGroup/CategoryGroup";
import AllProducts from "../ProductsContainer/AllProductsContainer";
import Header from "../Header/Header";

const HomeManager = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(`/category?id=${route}`);
  };

  return (
    <HomeManagerStyle>
      <Header />

      <section className="categoryContainer">
        <CategoryGroup />
      </section>

      <section className="allProducts__container">
        <h3>Bestsellers</h3>
        <AllProducts category="allProducts" />
      </section>

      <section className="brandsContainer">
        <h3>Brands</h3>
        <div className="brandsGroup">
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813147/gucci_rif0l2.jpg"
            alt=""
            className="brands"
          />
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813134/chanel_k4z1w2.svg"
            alt=""
            className="brands"
          />
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813132/cartier_vvcy7r.svg"
            alt=""
            className="brands"
          />
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723854255/rolex_ctbkih.svg"
            alt=""
            className="brands"
          />
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723854254/fendi_jhmyvu.svg"
            alt=""
            className="brands"
          />
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813127/adidas_ufshsr.jpg"
            alt=""
            className="brands"
          />
        </div>
      </section>

      <section className="discountGroup">
        <h2>Featured Collections</h2>

        <div className="img__group__main">
          <div className="img__group__sub">
            <div className="img__group">
              <img
                src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723932260/download_1_oticgx.jpg"
                alt="discount"
                id="large"
              />
              <div
                onClick={() => handleNavigation("Men")}
                className="shopButton"
              >
                <span>Discounts</span>
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="img__group__sub">
            <div className="img__group">
              <img
                src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723933416/Fragrance_Spray_lh4tgu.jpg"
                alt="discount"
                id="smaller"
              />
              <div
                onClick={() => handleNavigation("Men")}
                className="shopButton"
              >
                <span>Discounts</span>
                <BsArrowRight />
              </div>
            </div>
            <div className="img__group">
              <img
                src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723931682/top-view-assortment-different-traveling-elements_o7cjjg.jpg"
                alt="discount"
                id="smaller"
              />
              <div
                onClick={() => handleNavigation("Men")}
                className="shopButton"
              >
                <span>Discounts</span>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offersGroups">
        <div className="offers">
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813162/refund_wprbrb.png"
            alt=""
            className="offersImg"
          />
          <h3>Original Products</h3>
          <p>Money back guarantee if the products are not original</p>
        </div>
        <div className="offers">
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813154/mask_ozynfj.png"
            alt=""
            className="offersImg"
          />
          <h3>Satisfaction Guarantee</h3>
          <p>Exchange products that don't suit your needs</p>
        </div>
        <div className="offers">
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813170/update_b4vrwq.png"
            alt=""
            className="offersImg"
          />
          <h3>New Arrivals Everyday</h3>
          <p>We update our collections almost Everyday</p>
        </div>
        <div className="offers">
          <img
            src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723813166/shipping_yfeq30.png"
            alt=""
            className="offersImg"
          />
          <h3>Fast & Free Shipping</h3>
          <p>We offer fast and free shipping for our customers</p>
        </div>
      </section>
    </HomeManagerStyle>
  );
};

export default HomeManager;
