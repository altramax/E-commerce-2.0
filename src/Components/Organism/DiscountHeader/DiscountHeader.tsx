import DiscountHeaderStyle from "./DiscountHeaderStyle";
import discount from "../../assets/Icons/discount.png";

const DiscountHeader = (): JSX.Element => {
  return (
    <DiscountHeaderStyle>
      <div className="discountHeader">
        <div className="textGroup">
          <h3>LIMITED OFFER</h3>
          <h2>
            Get <span>50% off</span> only this Friday on all our products
          </h2>
        </div>
        <div className="imgGroup">
          <div className="point"></div>
          <img src={discount} alt="" className="" />
        </div>
      </div>
    </DiscountHeaderStyle>
  );
};

export default DiscountHeader;
