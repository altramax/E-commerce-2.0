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
      <div onClick={reloadHandler}>
        <Navbar />
        <div className="cartegory_height">
          <CategoryLayout />
        </div>
      </div>
      <Footer />
    </MarketPlaceTemplateStyle>
  );
};

export default MarketPlaceTemplate;
