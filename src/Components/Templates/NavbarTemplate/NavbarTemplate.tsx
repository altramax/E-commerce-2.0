import NavbarStyle from "./NavbarTemplateStyle";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cartIcon from "../../assets/Icons/cart.png";
import profileIcon from "../../assets/Icons/profile-icon.svg";
import { MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import SignInModal from "../../Organism/SignInModal/SignInModal";
import { useAppDispatch, useAppSelector} from "../../../Redux/Hooks"
import { logOut } from "../../../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [img, setImg] = useState<boolean>(true);
  const [notification, setNotification] = useState<number | null>(null);
  const [depend, setDepend] = useState<any>(null);
  const user = useAppSelector(state=> state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const url = "http://localhost:3000/products";

  useEffect(() => {
    cartCountUpdate();
  }, []);

  const cartCountUpdate = async () => {
    try {
      let res = await axios.get(url);
      setDepend(res.data);
      setNotification(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const dropdownHandler = () => {
    setToggle(!toggle);
    setImg(!img);
  };



  return (
    <NavbarStyle>
      <>
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


            <Link to="/userProfile" className="Link">
              <img src={profileIcon} alt="User Profile" className="cart" />
            </Link>




            <Link to="/cart" className="Link">
              <p className="cartNotificationIcon">{notification}</p>
              <img src={cartIcon} alt="Cart" className="cart" />
            </Link>
          </div>
        <p onClick={()=>{
          dispatch(logOut())
          navigate("/")
        }}>logout </p>
        </div>
      </>
    </NavbarStyle>
  );
};

export default Navbar;
