// import Navbar from "../Templates/Navbar";
import Footer from "../Organism/Footer/Footer";
import HomeHeader from "../Organism/HomePage/HomeManager";
import axios from "axios";
import WelcomePage from "./login/WelcomePage";
import { useAppSelector } from "../../Redux/Hooks";

const Home = () => {
  // const user = useAppSelector((state) => state.user);

  const test = async () => {
    let b = await axios.get("http://localhost:900/posts", {
      responseType: "json",
    });
    // console.log(b);
  };

  test();

  // console.log(user.value.user.uid);

  return (
    <div>
      {/* <Navbar /> */}
      <WelcomePage />
      <HomeHeader />
      <Footer />
    </div>
  );
};

export default Home;
