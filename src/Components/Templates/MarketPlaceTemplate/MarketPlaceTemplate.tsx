import MapData from "../../Organism/API/AllProducts";
import Footer from "../../Organism/Footer/Footer";
import Note from "../../Organism/NoteArea/NoteArea";

const MarketPlaceTemplate = () =>{
  const info = "WELCOME";
  return (
    <div>
      <Note text={info} />
      <MapData filter={23} />
      <Footer />
    </div>
  );
}

export default MarketPlaceTemplate