import Navbar from "../Templates/Navbar";
import MapData from "../Resources/API/MapData";
import Footer from "../Templates/Footer";
import Note from "../Templates/NoteArea";

export default function MarketPlace() {
  const info = "WELCOME";
  return (
    <div>
      <Navbar />
      <Note text={info} />
      <MapData filter={23} />
      <Footer />
    </div>
  );
}
