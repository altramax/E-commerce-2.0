import SignInTemplateStyle from "./SignInTemplateStyle";
import google_Icon from "../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { userDetails } from "../../../Redux/AuthSlice";
import { useState } from "react";
// import axios from "axios";

type signinType = {
  signup: any;
  opacity: string;
};

type fieldsType = {
  email: string,
  password: string
}

const SignInTemplate = ({ signup, opacity }: signinType): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };
  // console.log(fields);
 

if(user.value){
  console.log(user)
}






  return (
    <SignInTemplateStyle>
      <form className={`signin ${opacity === "signup" ? "blurout" : "blurin"}`}>
        <h2>MUSE.</h2>
        <div className="signin__body">
          <div className="signin__body__welcome">
            <h1>Welcome</h1>
            {/* <p>Signin here</p> */}
          </div>

          <div>{user.message}</div>

          <div className="signin__inputs">
            <input
              className="input"
              type="text"
              placeholder="Your Email"
              name="email"
              onChange={(evt) => {
                onchange(evt.target.name, evt.target.value);
              }}
            />

            <input
              className="input"
              type="text"
              placeholder="Password"
              name="password"
              onChange={(evt) => {
                onchange(evt.target.name, evt.target.value);
              }}
            />
          </div>

          <button
            className="button"
            onClick={(evt) => {
              evt.preventDefault()
              dispatch(userDetails(fields));
            }}
          >
            Signin
          </button>

          <div className="signin__dash">
            <div>——————</div>
            <p>or</p>
            <div>——————</div>
          </div>

          <div className="signin__body__googlelogin">
            <img src={google_Icon} alt="google Icon" />
            <p>Signin with Google</p>
          </div>

          <p className="signup">
            Don't have an account ? <span onClick={signup}> Signup</span>
          </p>
        </div>
      </form>
    </SignInTemplateStyle>
  );
};

export default SignInTemplate;
