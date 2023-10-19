import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import HomeHeader from "../Templates/HomeManager";
import axios from "axios";

export default function Home() {
  const test = async () => {
  await fetch("https://localhost:900/posts",{
        headers:{
           " content-Type" : "application/json"
        }
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
   
  };

  test();
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <Footer />
    </div>
  );
}
