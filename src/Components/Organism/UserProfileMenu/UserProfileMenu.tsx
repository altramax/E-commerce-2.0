import UserProfileMenuStyle from "./UserProfileMenuStyle";
import { Link } from "react-router-dom";

const UserProfileMenu = () => {
  return (
    <UserProfileMenuStyle>
      <div className="menu__links">
        <Link to="/userprofile" className="link">Account Information</Link>
        <Link to="/userprofile/orders" className="link">Orders</Link>
        <Link to="/userprofile/contactus" className="link">Contact US</Link>
        <p>Past Activities</p>
        <p>Contact Us</p>
      </div>
      <div>
        <p>ONESTORE</p>
      </div>
    </UserProfileMenuStyle>
  );
};

export default UserProfileMenu;
