import HomePageTemplateStyle from "./HomePageTemplateStyle";
import HomeHeader from "../../Organism/HomePage/HomeManager";
import Footer from "../../Organism/Footer/Footer";
import axios from "axios";
import { json } from "react-router-dom";

const HomePageTemplate = (): JSX.Element => {

const geti = async()=>{
  let g =await axios.get("http://localhost:9000/products",{ responseType: "json"})
  console.log(g);
}
geti()
  
  return (
    <HomePageTemplateStyle>
      <HomeHeader />
      <Footer />
    </HomePageTemplateStyle>
  );
};

export default HomePageTemplate;
