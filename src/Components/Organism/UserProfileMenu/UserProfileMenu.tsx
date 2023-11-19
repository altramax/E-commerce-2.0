import UserProfileMenuStyle from "./UserProfileMenuStyle";
import { Link } from "react-router-dom";

const UserProfileMenu = () => {
  return (
    <UserProfileMenuStyle>
      <div className="menu__links">
        <Link to="/userprofile">
          <p> User Information</p>
        </Link>
        <p>Orders</p>
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
