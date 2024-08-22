import twitter from "../../assets/Icons/twitter.svg";
import facebook from "../../assets/Icons/facebook.svg";
import instagram from "../../assets/Icons/instagram.svg";
import FooterStyle from "./FooterStyle";
import mastercard from "../../assets/Icons/mastercard.svg";
import visa from "../../assets/Icons/visa.svg";
import paypal from "../../assets/Icons/paypal.svg";

const Footer = (): JSX.Element => {
  
  return (
    <FooterStyle>
      <div className="FooterContainer">
        <div className="logoContainer">
          <h3 className="logo">OneStore</h3>
          <ul>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>  
        </div>
        <div>
          <h3>COMPANY</h3>
          <p>Contact</p>
          <p>About Us</p>
          <p>Affiliates</p>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <p>FAQs</p>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3>PAYMENT METHODS</h3>
          <div className="payCardGroup">
            <img src={mastercard} alt="" className="payCard" />
            <img src={visa} alt="" className="payCard" />
            <img src={paypal} alt="" className="payCard" />
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
