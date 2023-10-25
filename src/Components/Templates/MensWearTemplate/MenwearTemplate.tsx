import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilterData from "../../Organism/API/FilteredProducts";

const MensWearTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilterData filter="men's" />
      <Footer />
    </div>
  );
};
export default MensWearTemplate;
