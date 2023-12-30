import HomePageTemplateStyle from "./HomePageTemplateStyle";
import HomeHeader from "../../Organism/HomePage/HomeManager";
import Footer from "../../Organism/Footer/Footer";

const HomePageTemplate = (): JSX.Element => {


  return (
    <HomePageTemplateStyle>
      <HomeHeader />
      <Footer />
    </HomePageTemplateStyle>
  );
};

export default HomePageTemplate;
