import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import "./styles/Footer.scss";
import mastercard from "./assets/mastercard.svg";
import visa from "./assets/visa.svg";
import paypal from "./assets/paypal.svg";

export default function Footer() {
  return (
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
        <h3>COMPANTY</h3>
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
  );
}
