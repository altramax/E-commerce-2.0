import CartStyle from "./CartStyles";
import CartManager from "../../Organism/CartManager/CartManager";
import Footer from "../../Organism/Footer/Footer";
import Navbar from "../NavbarTemplate/NavbarTemplate";

const Cart = (): JSX.Element => {
  return (
    <CartStyle>
      <Navbar/>
      <CartManager />
      <Footer />
    </CartStyle>
  );
};
export default Cart;
