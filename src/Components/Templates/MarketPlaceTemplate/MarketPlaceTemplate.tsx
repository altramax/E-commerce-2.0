import Footer from "../../Organism/Footer/Footer";
import Navbar from "../NavbarTemplate/NavbarTemplate";
import CategoryLayout from "../../Organism/CategoryLayout/CategoryLayout";

const MarketPlaceTemplate = () => {
  return (
    <div>
      <Navbar />
      <div>
        <CategoryLayout />
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlaceTemplate;
