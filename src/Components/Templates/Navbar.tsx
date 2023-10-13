import "./styles/Navbar.scss";
import { Link, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cart from "./assets/cart.png";
import { MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

type Customtype = {
  children: {} | any;
  className: string;
  path: string;
};

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [img, setImg] = useState<boolean>(true);
  const [notification, setNotification] = useState<number | null>(null);
  const [depend, setDepend] = useState<{}[] | null>(null)

  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNotification(res.data.length);
        setDepend(res.data)
      })
      .catch((err) => err);
  }, [depend]);

  const dropdownHandler = () => {
    setToggle(!toggle);
    setImg(!img);
  };

  return (
    <div className="NavContainer">
      <div>
        <CustomLink path="/" className="Logo">
          OneStore
        </CustomLink>
      </div>

      <div id="linkGroup" className={toggle ? "linkgroup" : "hidden"}>
        <CustomLink path="/MenWear" className="Link">
          Men
        </CustomLink>
        <CustomLink path="/WomenWear" className="Link">
          Women
        </CustomLink>
        <CustomLink path="/MarketPlace" className="Link">
          Store
        </CustomLink>
      </div>
      <div
        className={toggle ? "overlay" : "hidden"}
        onClick={dropdownHandler}
      ></div>
      <div className="carthan">
        <div className="hamburger" onClick={dropdownHandler}>
          {img ? <GiHamburgerMenu size={30} /> : <MdClear size={30} />}
        </div>

        <CustomLink path="/Cart" className="Link">
          <p className="cartNotificationIcon">{notification}</p>
          <img src={cart} alt="Cart" className="cart" />
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink(props: Customtype) {
  const resolvedpath = useResolvedPath(props.path);
  return (
    <Link to={props.path} {...props}>
      {props.children}
    </Link>
  );
}
