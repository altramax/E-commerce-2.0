import UserProfileTemplateStyle from "./UserProfileTemplateStyle";
import UserProfile from "../../Organism/UserProfile/UserProfile";
import PrivateRoute from "../../../Config/PrivateRoute";
import SignInModal from "../../Organism/SignInModal/SignInModal";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks"

const UserProfileTemplate = (): JSX.Element => {
  const [signInModal, setSignInModal] = useState<boolean>(true);
  const user = useAppSelector(state=>state.user.userId)

//   const openSigninModal = () => {
//     setSignInModal(true);
//   };

//   const closeSignInModal = () => {
//     setSignInModal(false);
//   };

  const renderSignInModal = () => {
      if (signInModal) {
        <SignInModal/>;
    }
  };

  return (
    <UserProfileTemplateStyle>
      <>
        <h1>UserProfileTemplate</h1>
        {signInModal && user === "" ? <SignInModal/> : null}

        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      </>
    </UserProfileTemplateStyle>
  );
};

export default UserProfileTemplate;
