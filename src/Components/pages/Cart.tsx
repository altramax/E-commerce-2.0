// import Navbar from "../Templates/Navbar";
import Note from "../Organism/NoteArea/NoteArea";
import CartManager from "../Resources/Cart/CartManager";
import Footer from "../Organism/Footer/Footer";

export default function Cart (){
    const header:string ="Welcome, Complete and checkout your order here" 
    return(<div>
        {/* <Navbar/> */}
        <Note text={header}/>
        <CartManager/>
        <Footer/>
    </div>)
}
