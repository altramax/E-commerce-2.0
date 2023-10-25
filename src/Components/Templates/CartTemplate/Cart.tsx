import Note from "../../Organism/NoteArea/NoteArea";
import CartManager from "../../Organism/CartManager/CartManager";
import Footer from "../../Organism/Footer/Footer";

const Cart = (): JSX.Element => {
  const header: string = "Welcome, Complete and checkout your order here";
  return (
    <div>
      <Note text={header} />
      <CartManager />
      <Footer />
    </div>
  );
};
export default Cart;
