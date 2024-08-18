import UserProfileStyle from "./UserProfilePageStyle";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import PrivateRouthPath from "../../../Routes/PrivateRoutePath";
import Navbar from "../../Templates/NavbarTemplate/NavbarTemplate";

const UserProfile = (): JSX.Element => {
  return (
    <UserProfileStyle>
      <div>
        <Navbar />
        <div className="user__profile__body">
          <div className="user__profile__menu">
            <UserProfileMenu />
          </div>
          <div className="user__profile__content">
            <PrivateRouthPath />
          </div>
        </div>
      </div>
    </UserProfileStyle>
  );
};

export default UserProfile;
