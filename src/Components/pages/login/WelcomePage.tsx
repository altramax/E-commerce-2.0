// import { useDispatch, useSelector } from "react-redux";
import WelcomePageStyle from "./WelcomePageStyle";
import SignInTemplate from "../../Templates/SignInTemplate/SignInTemplate";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";
import cover from "../../../assets/signup.jpeg";
import { useState } from "react";

const WelcomePage = (): JSX.Element => {


  const [view, setView] = useState<string>("signin");
  const [opacity, setOpacity] = useState<string>("signin")

  const signinHandler = () => {
    setView("signin");
   setOpacity("signin")
  };

  const signupHandler = () => {
    setView("signup");
  };

  return (
    <WelcomePageStyle>
      <div className="welcomepage__container">
        <SignUpTemplate signin={signinHandler} opacity={view}/>
        <SignInTemplate signup={signupHandler} opacity={view}/>
        <img src={cover} alt="" className={`cover ${view === "signin" ? "--signin" : "--signup"}`} />
      </div>
    </WelcomePageStyle>
  );
};

export default WelcomePage;
