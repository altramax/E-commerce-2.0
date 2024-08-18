import SignInModalStyle from "./SignInModalStyle";
import google_Icon from "../../assets/Icons/google.svg";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { userLogin, googleLogin } from "../../../Redux/AuthSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cancle from "../../assets/Icons/cancle.svg";
import { AuthGetCart } from "../../../Redux/CartSlice";
// import CartUpdateFunction from "../../Molecules/CartUpdateFunction/CartUpdateFunction";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  getDocs,
  arrayRemove,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "../../../Config/Config";
import { updateProductsData } from "../../../Redux/CartSlice";


type fieldsType = {
  email: string;
  password: string;
};

type signinType = {
  signUp: any;
};

const SignInModal = ({ signUp }: signinType): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const cartItems = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = useState<fieldsType>({
    email: "",
    password: "",
  });

  let getcart = async () => {
    const docRef = doc(db, "Cart", user?.uid);
    // const getDoc= await getDocs(docRef)
    try {
      onSnapshot(docRef, async (docSnapshot) => {
        let currentItemsArray = docSnapshot.exists()
          ? docSnapshot?.data()?.items
          : [];
       dispatch(updateProductsData(currentItemsArray));
      });
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };

  const onchange = async (name: string, value: string) => {
    const fieldsValue: any = Object.assign({}, fields);
    fieldsValue[name] = value;
    await setFields(fieldsValue);
  };

  const signInWithEmail = async (evt: any) => {
    evt.preventDefault();

    await dispatch(userLogin(fields)).then((res: any) => {
      let arg = {
        items: cartItems,
        uid: res?.payload?.user.uid,
      };
      if (res?.payload) {
        dispatch(AuthGetCart(arg)); 
        // getcart()
        console.log("signin"); 
      }
    });
  };


  const signInWithGoogle = async (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    await dispatch(googleLogin()).then(() => { 
    
    });
  };

  return (
    <SignInModalStyle>
      <form className={`signin `} onSubmit={signInWithEmail}>
       
        <div className="signin__header__img">
          <img onClick={() => navigate("/")} src={cancle} alt="" />
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

          <button type="submit" className="button">
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
