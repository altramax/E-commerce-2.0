import SignUpTemplateStyle from "./SignUpTemplateStyle";

import google_Icon from "../../../assets/google.svg";

import { useEffect } from "react";

type signinType = {
  signin: any;
  opacity: string;
};

const SignUpTemplate = ({ signin, opacity }: signinType): JSX.Element => {
  // const goToSignin = ()=>{
  //    signin
  //   }

  // console.log(opacity);

  if (opacity === "signup") {
    window.location.reload;
  }

  // useEffect(() => {
  // });

  return (
    <SignUpTemplateStyle>
      <form className={`signup ${opacity === "signin" ? "blurout" : "blurin"}`}>
        <h2>MUSE.</h2>
        <div className="signup__body">
          <div className="signup__body__welcome">
            <h1>Hi there!</h1>
            <p> Create an Account here</p>
          </div>

          <div className="signup__inputs">
            <input className="input" type="text" placeholder="Username" />

            <input className="input" type="text" placeholder="Your Email" />
            <input className="input" type="text" placeholder="Password" />
          </div>

          <button className="button">Signup</button>

          <div className="signup__dash">
            <div>——————</div>
            <p>or</p>
            <div>——————</div>
          </div>

          <div className="signup__body__googlelogin">
            <img src={google_Icon} alt="google Icon" />
            <p>Signup with Google</p>
          </div>

          <p className="signin">
            Already have an account ? <span onClick={signin}> Signin</span>
          </p>
        </div>
      </form>
    </SignUpTemplateStyle>
  );
};

export default SignUpTemplate;
