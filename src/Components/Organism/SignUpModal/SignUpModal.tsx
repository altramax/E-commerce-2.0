import SignUpModalStyle from "./SignUpModalStyle";
import google_Icon from "../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { createUser, googleLogin } from "../../../Redux/AuthSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cancle from "../../assets/Icons/cancle.svg";

type fieldsType = {
  email: string;
  password: string;
};

type signupType = {
  signIn: any;
};

const SignUpModal = ({ signIn }: signupType): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const createUserWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(createUser(fields));
  };

  const createUserWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin()).then(() => {});
  };

  return (
    <SignUpModalStyle>
      <form className={`signup`}>
        <div className="signin__header__img">
          <img onClick={() => navigate(-1)} src={cancle} alt="" />
        </div>
        <div className="signin__header">
   
          <h2>ONESTORE</h2>
        </div>
        <div className="signup__body">
          <div className="signup__inputs">
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
            onClick={createUserWithEmail}
          >
            Signup
          </button>

          <div className="signup__dash">
            <div>——————</div>
            <p>or</p>
            <div>——————</div>
          </div>

          <div className="signup__body__googlelogin" onClick={createUserWithGoogle}>
            <img src={google_Icon} alt="google Icon" />
            <p>Signup with Google</p>
          </div>

          <p className="signin">
            Already have an account ? <span onClick={signIn}> Signin</span>
          </p>
        </div>
      </form>
    </SignUpModalStyle>
  );
};

export default SignUpModal;
