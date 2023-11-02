import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilteredProducts from "../../Organism/ProductsContainer/FilteredProductsContainer";

const MensWearTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilteredProducts filter="men's" />
      <Footer />
    </div>
  );
};
export default MensWearTemplate;
