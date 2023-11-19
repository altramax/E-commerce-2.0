import SignInModalStyle from "./SignInModalStyle";
import google_Icon from "../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { userLogin, googleLogin } from "../../../Redux/AuthSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cancle from "../../assets/Icons/cancle.svg";


type fieldsType = {
  email: string;
  password: string;
};

type signinType = {
  signUp : any
}

const SignInModal = ({signUp}:signinType): JSX.Element => {
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

  const signInWithEmail = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(userLogin(fields));
  };

  const signInWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin()).then(() => {});
  };


  return (
    <SignInModalStyle>
      <form className={`signin `}>
        <div className="signin__header__img">
          <img onClick={() => navigate(-1)} src={cancle} alt="" />
        </div>
        <div className="signin__header">
          <h3>Welcome Back</h3>
        </div>
        <div className="signin__body">
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

          <button className="button" onClick={signInWithEmail}>
            Signin
          </button>

          <div className="signin__dash">
            <div>——————</div>
            <p>or</p>
            <div>——————</div>
          </div>

          <div className="signin__body__googlelogin" onClick={signInWithGoogle}>
            <img src={google_Icon} alt="google Icon" />
            <p>Signin with Google</p>
          </div>

          <p className="signup">
            Don't have an account ? <span onClick={signUp}> Signup</span>
          </p>
        </div>
      </form>
    </SignInModalStyle>
  );
};

export default SignInModal;
