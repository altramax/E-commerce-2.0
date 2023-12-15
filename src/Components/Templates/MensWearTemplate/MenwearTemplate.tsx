import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilteredProducts from "../../Organism/ProductsContainer/FilteredProductsContainer";

const MensWearTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilteredProducts filter="men's" />
      <img src="https://drive.google.com/uc?id=1-49KqLzb3DjjOFrhGSO75rbf1JN_T6vv" alt="broken" />
      <Footer />
    </div>
  );
};
export default MensWearTemplate;
