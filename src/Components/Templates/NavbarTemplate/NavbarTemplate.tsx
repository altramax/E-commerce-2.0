import NavbarStyle from "./NavbarTemplateStyle";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cartIcon from "../../assets/Icons/cart.png";
import profileActive from "../../assets/Icons/profile-active.svg";
import profileIcon from "../../assets/Icons/profile-icon.svg";
import { MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../Redux/AuthSlice";
import { otherErrors } from "../../../Redux/AlertSlice";

const Navbar = (): JSX.Element => {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);
  const [notification, setNotification] = useState<number | null>(null);
  const [profileLinks, setProfileLinks] = useState<boolean>(false);
  const [networkResponse, setNetworkResponse] = useState<boolean>(false);
  const [depend, setDepend] = useState<any>(null);
  const userId = useAppSelector((state) => state.user.userId);
  const alert = useAppSelector((state) => state.alert);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const url = "http://localhost:3000/products";

  useEffect(() => {
    cartCountUpdate();
    d();
  }, []);

  useEffect(() => {
    handleNetWorkChange();
  }, [alert.message]);

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
    setMenuIcon(!menuIcon);
  };

  const profileMenuHandler = () => {
    setProfileLinks(!profileLinks);
  };

  const logoutUser = () => {
    dispatch(logOut());
    navigate(-1);
  };

  const d = () => {
    if (alert.message !== "") {
      setNetworkResponse(true);
    }
  };

  const handleNetWorkChange = () => {
    if (alert.message !== "") {
      setNetworkResponse(true);
      setTimeout(() => {
        setNetworkResponse(false);
        dispatch(otherErrors(""));
      }, 2000);
    }
  };

  return (
    <NavbarStyle>
      <>
        <div className="NavContainer">
          {networkResponse && (
            <div className="network__response">{alert.message}</div>
          )}
          <Link to="/" className="Logo">
            OneStore
          </Link>

          <div id="linkGroup" className={menuIcon ? "linkgroup" : "hidden"}>
            <Link to="/menswear" className="Link">
              Men
            </Link>
            <Link to="/womenwear" className="Link">
              Women
            </Link>
            <Link to="/womenwear" className="Link">
              Accessories
            </Link>
            <Link to="/marketplace" className="Link">
              Store
            </Link>
          </div>

          <div
            className={menuIcon ? "overlay" : "hidden"}
            onClick={dropdownHandler}
          ></div>
          <div
            className={profileLinks ? "overlay" : "hidden"}
            onClick={profileMenuHandler}
          ></div>

          <div className="cart__hamburger">
            <div className="user__profile__group" onClick={profileMenuHandler}>
              <div className="user__profile__group__title">
                <div className="profile__icon"></div>
                {userId !== "" ? <p>Hi Ezekiel</p> : null}
              </div>
              {/* {!profileLinks ? <p className="hover">Profile</p> : null} */}
              <div
                className={`profile__links  ${
                  profileLinks ? "Open" : "hidden"
                }  `}
              >
                <Link to="/userprofile" className="user__profile">
                  My Account
                </Link>
                {userId !== "" ? (
                  <div className="profile__link__sub">
                    <Link to="#" className="user__profile">
                      Saved Item
                    </Link>
                    <Link to="#" className="user__profile">
                      My Orders
                    </Link>
                    <button onClick={logoutUser}>Logout</button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="hamburger" onClick={dropdownHandler}>
              {!menuIcon ? (
                <GiHamburgerMenu size={30} />
              ) : (
                <MdClear size={30} />
              )}
            </div>

            <Link to="/cart" className="Link">
              <p className="cartNotificationIcon">{notification}</p>
              <img src={cartIcon} alt="Cart" className="cart" />
            </Link>
          </div>
        </div>
      </>
    </NavbarStyle>
  );
};

export default Navbar;
