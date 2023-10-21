import NavbarStyle from "./NavbarTemplateStyle";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cartIcon from "../../assets/Icons/cart.png";

import { MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [img, setImg] = useState<boolean>(true);
  const [notification, setNotification] = useState<number | null>(null);
  const [depend, setDepend] = useState<{}[] | null>(null);

  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNotification(res.data.length);
        setDepend(res.data);
      })
      .catch((err) => err);
  }, [depend]);

  const dropdownHandler = () => {
    setToggle(!toggle);
    setImg(!img);
  };


  return (
    <NavbarStyle>
      <div className="NavContainer">
        
          <Link to="/" className="Logo">
            OneStore
          </Link>
        

        <div id="linkGroup" className={toggle ? "linkgroup" : "hidden"}>
          <NavLink to="/menswear" className="Link">
            Men
          </NavLink>
          <Link to="/womenwear" className="Link">
            Women
          </Link>
          <Link to="/marketplace" className="Link">
            Store
          </Link>
        </div>
        <div
          className={toggle ? "overlay" : "hidden"}
          onClick={dropdownHandler}
        ></div>
        <div className="carthan">
          <div className="hamburger" onClick={dropdownHandler}>
            {img ? <GiHamburgerMenu size={30} /> : <MdClear size={30} />}
          </div>

          <Link to="/Cart" className="Link">
            <p className="cartNotificationIcon">{notification}</p>
            <img src={cartIcon} alt="Cart" className="cart" />
          </Link>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
