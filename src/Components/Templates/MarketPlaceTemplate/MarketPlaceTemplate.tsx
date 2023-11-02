import AllProducts from "../../Organism/ProductsContainer/AllProductsContainer";
import Footer from "../../Organism/Footer/Footer";
import Note from "../../Organism/NoteArea/NoteArea";

const MarketPlaceTemplate = () =>{
  const info = "WELCOME";
  return (
    <div>
      <Note text={info} />
     <AllProducts/>
      <Footer />
    </div>
  );
}

export default MarketPlaceTemplate