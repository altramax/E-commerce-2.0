import UserProfileMenuStyle from "./UserProfileMenuStyle";
import { Link } from "react-router-dom";

const UserProfileMenu = () => {
  return (
    <UserProfileMenuStyle>
      <div>SideBar</div>
      <Link to="/userprofile">
        <p> User Information</p>
      </Link>
    </UserProfileMenuStyle>
  );
};

export default UserProfileMenu;