import UserProfileTemplateStyle from "./UserProfileTemplateStyle";
import UserProfile from "../../Organism/UserProfilePage/UserProfilePage";
import PrivateRoute from "../../../Config/PrivateRoute";
import SignInModal from "../../Organism/SignInModal/SignInModal";
import SignUpModal from "../../Organism/SignUpModal/SignUpModal";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks"

const UserProfileTemplate = (): JSX.Element => {
  const [authModal, setAuthModal] = useState<string>("signin");
  const user = useAppSelector(state=>state.user.user)

 const openSignupModal = ()=>{
    setAuthModal("signup")
 }

 const openSigninModal = ()=>{
    setAuthModal("signin")
 }

  return (
    <UserProfileTemplateStyle>
      <>
        {authModal === "signin" && user === null ? <SignInModal signUp={openSignupModal}/> : null}
        {authModal === "signup" && user === null ? <SignUpModal signIn={openSigninModal}/> : null}

        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      </> 
    </UserProfileTemplateStyle>
  );
};

export default UserProfileTemplate;
