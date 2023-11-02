import Footer from "../../Organism/Footer/Footer";
import DiscountHeader from "../../Organism/DiscountHeader/DiscountHeader";
import FilteredProducts from "../../Organism/ProductsContainer/FilteredProductsContainer";

const AccessoriesTemplate = () => {
  return (
    <div>
      <DiscountHeader />
      <FilteredProducts filter="jewelery" />
      <Footer />
    </div>
  );
};
export default AccessoriesTemplate;
