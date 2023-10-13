import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import DiscountHeader from "../Templates/DiscountHeader";
import FilterData from "../Resources/API/FilterData";

export default function WomenWear() {
  return (
    <div>
      <Navbar />
      <DiscountHeader />
      <FilterData filter="women's" />
      <Footer />
    </div>
  );
}
