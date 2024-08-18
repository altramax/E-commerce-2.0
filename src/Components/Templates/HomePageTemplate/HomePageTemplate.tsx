import HomePageTemplateStyle from "./HomePageTemplateStyle";
import HomeManager from "../../Organism/HomePage/HomeManager";
import Footer from "../../Organism/Footer/Footer";
import Navbar from "../NavbarTemplate/NavbarTemplate";

const HomePageTemplate = (): JSX.Element => {
  return (
    <HomePageTemplateStyle>
      <Navbar />
      <HomeManager />
      <Footer />
    </HomePageTemplateStyle>
  );
};

export default HomePageTemplate;
