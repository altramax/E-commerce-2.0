import Footer from "../../Organism/Footer/Footer";
import Navbar from "../NavbarTemplate/NavbarTemplate";
import CategoryLayout from "../../Organism/CategoryLayout/CategoryLayout";
import CategoryGroup from "../../Organism/CategoryGroup/CategoryGroup";
import MarketPlaceTemplateStyle from "./MarketPlaceTemplateStyle";
import { useEffect, useState } from "react";

const MarketPlaceTemplate = () => {
  const [reload, setreload] = useState<boolean>(false);

  useEffect(() => {}, [reload]);

  const reloadHandler = () => {
    setreload(!reload);
  };

  return (
    <MarketPlaceTemplateStyle>
      <div  className="category_margin" onClick={reloadHandler}>
      <Navbar />
        <CategoryGroup />
      </div>
      <h1 className="product">Products</h1>
      <div className="cartegory_height">
        <CategoryLayout />
      </div>
      <Footer />
    </MarketPlaceTemplateStyle>
  );
};

export default MarketPlaceTemplate;
