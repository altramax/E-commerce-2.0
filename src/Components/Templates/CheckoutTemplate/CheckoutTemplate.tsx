import CheckoutTemplateStyle from "./CheckoutTemplateStyle";
import Checkout from "../../Organism/Checkout/Checkout";
import checkIcon from "../../assets/Icons/checked.svg";
import cancleIcon from "../../assets/Icons/cancle.svg";
import Navbar from "../NavbarTemplate/NavbarTemplate";
import { useState } from "react";

const CheckoutTemplate = () => {
    const [progressLevel , setProgressLevel] = useState<string>("personal");

const handleProgress = ()=>{

}

  return (
    <CheckoutTemplateStyle>
      <Navbar />
      <div className="checkout__container">
        <h1>Checkout</h1>
        <div className="progress__bar__container">
          <div className={`progress__bar `}>
            <div className={`progress__bar__dot ${ progressLevel === "personal" ? "fill" : ""}`}>
              <img src={checkIcon} />
            </div>
            <p>Personal</p>
          </div>
          <div className={`line ${ progressLevel === "personal" ? "fill" : ""}`}></div>
          <div className={`progress__bar `}>
            <div className={`progress__bar__dot ${ progressLevel === "personal" ? "fill" : ""}`}>
              <img src={checkIcon} />
            </div>
            <p>Payment</p>
          </div>
          <div className={`line ${ progressLevel === "personal" ? "fill" : ""}`}></div>
          <div className={`progress__bar `}>
            <div className={`progress__bar__dot ${ progressLevel === "personal" ? "fill" : ""}`}>
              <img src={checkIcon} />
            </div>
            <p>Complete</p>
          </div>
        
        </div>
      </div>

      <div>bottom77</div>

      {/* <Checkout/> */}
    </CheckoutTemplateStyle>
  );
};

export default CheckoutTemplate;
