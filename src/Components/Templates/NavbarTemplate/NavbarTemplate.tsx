import NavbarStyle from "./NavbarTemplateStyle";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cartIcon from "../../assets/Icons/cart.png";
import { IoMdPower } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../Redux/AuthSlice";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { db } from "../../../Config/Config";
import { doc, onSnapshot } from "firebase/firestore";
import { localClearCart, updateProductsData } from "../../../Redux/CartSlice";

const Navbar = (): JSX.Element => {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);

  const [response, setResponse] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.user);
  const alert = useAppSelector((state) => state.alert);
  const errorMessage = useAppSelector((state) => state.user);
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (user?.uid) {
      const docRef = doc(db, "Cart", user?.uid);
      onSnapshot(docRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          let currentItemsArray = docSnapshot.exists()
            ? docSnapshot?.data()?.items
            : [];
          // console.log("enter snap shot navbar");
          // console.log(currentItemsArray);
          currentItemsArray && dispatch(updateProductsData(currentItemsArray));
          setResponse(currentItemsArray);
        } else {
          console.log("notfound");
        }
      });
    }
  }, [user?.uid]);



  const goToProfile = () => {
    navigate("/userprofile");
  };

  const logoutUser = () => {
    dispatch(logOut());
    navigate("/");
    dispatch(localClearCart());
  };

  return (
    <NavbarStyle>
      <>
        <div className="NavContainer">
          <Link to="/" className="Logo">
            OneStore
          </Link>

          <div className="searchGroup">
            <div className="wrapper">
              <input type="text" />
              <div>
                <IoIosSearch size="25" />
              </div>
            </div>
          </div>

          <div className="group">
            <div className="profile_name_icon">
              {user === null && (
                <CgProfile size="30" onClick={goToProfile} className="center" />
              )}
              {user !== null && (
                <div className="center">
                  <p>Hi Ezekiel</p>
                  <div>
                    <IoMdPower size="30" onClick={logoutUser} />
                  </div>
                </div>
              )}
            </div>

            <Link to="/cart" className="Link">
              <p className="cartNotificationIcon">
                {cart !== null ? cart?.length : 0}
              </p>
              <img src={cartIcon} alt="Cart" className="cart" />
            </Link>
          </div>
        </div>
      </>
    </NavbarStyle>
  );
};

export default Navbar;
