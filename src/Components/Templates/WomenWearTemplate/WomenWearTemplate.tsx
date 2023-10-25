import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilterData from "../../Organism/API/FilteredProducts";

const WomenWearTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilterData filter="women's" />
      <Footer />
    </div>
  );
};

export default WomenWearTemplate;
