import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilteredProducts from "../../Organism/ProductsContainer/FilteredProductsContainer";

const WomenWearTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilteredProducts filter="women's" />
      <Footer />
    </div>
  );
};

export default WomenWearTemplate;
