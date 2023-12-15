import UserProfileStyle from "./UserProfilePageStyle";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import PrivateRouthPath from "../../../Routes/PrivateRoutePath";

const UserProfile = (): JSX.Element => {
  return (
    <UserProfileStyle>
      <div className="user__profile__body">
        <div className="user__profile__menu">
          <UserProfileMenu />
        </div>


        <div className="user__profile__content">
          <PrivateRouthPath />
        </div>
      </div>
    </UserProfileStyle>
  );
};

export default UserProfile;


// import UserProfileStyle from "./UserProfilePageStyle";
// import { useState } from "react";
// import UserProfileNav from "../../Templates/UserProfileNavTemplate/UserProfileNavTemplate";
// import AccountInformation from "../AccountInformation/AccountInformation";

// const UserProfile = (): JSX.Element => {
// const [activePage, setActivePage] = useState<string>("accountInformation")

//   return (
//     <UserProfileStyle>
//       <div className="user__profile__body">
//         <div className="user__profile__menu">
//           <UserProfileNav/>
//         </div>
//         <div className="user__profile__content">
//           {activePage === "accountInformation" ? <AccountInformation/> : null}

//         </div>
//       </div>
//     </UserProfileStyle>
//   );
// };

// export default UserProfile;
