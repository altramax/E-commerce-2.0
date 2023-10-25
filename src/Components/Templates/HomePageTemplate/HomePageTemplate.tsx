import HomePageTemplateStyle from "./HomePageTemplateStyle";
import HomeHeader from "../../Organism/HomePage/HomeManager";
import Footer from "../../Organism/Footer/Footer";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { getProducts } from "../../../Redux/AllProductsSlice";
import {
  createUser,
  googleLogin,
  logOut,
  userLogin,
} from "../../../Redux/AuthSlice";
import { useState } from "react";

type fieldsType = {
  email: string;
  password: string;
};

const HomePageTemplate = (): JSX.Element => {
  const state = useAppSelector((state) => state.user);
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

  console.log(state);

  return (
    <HomePageTemplateStyle>
      <HomeHeader />
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
        onClick={() => {
          dispatch(createUser(fields));
        }}
      >
        create User
      </button>
      <button onClick={()=>dispatch(userLogin(fields))}>Login with Email</button>
      <button onClick={()=>dispatch(googleLogin())} >Login with Google</button>
      <button onClick={()=>dispatch(logOut())}>Logout</button>
      <button></button>
      <Footer />
    </HomePageTemplateStyle>
  );
};

export default HomePageTemplate;
