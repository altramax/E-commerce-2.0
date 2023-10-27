import UserProfileTemplateStyle from "./UserProfileTemplateStyle";
import UserProfile from "../../Organism/UserProfile/UserProfile";
import PrivateRoute from "../../../Config/PrivateRoute";
import SignInModal from "../../Organism/SignInModal/SignInModal";
import SignUpModal from "../../Organism/SignUpModal/SignUpModal";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hooks"

const UserProfileTemplate = (): JSX.Element => {
  const [authModal, setAuthModal] = useState<string>("signin");
  const user = useAppSelector(state=>state.user.userId)

 const openSignupModal = ()=>{
    setAuthModal("signup")
 }

 const openSigninModal = ()=>{
    setAuthModal("signin")
 }

  return (
    <UserProfileTemplateStyle>
      <>
        {authModal === "signin" && user === "" ? <SignInModal signUp={openSignupModal}/> : null}
        {authModal === "signup" && user === "" ? <SignUpModal signIn={openSigninModal}/> : null}

        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      </>
    </UserProfileTemplateStyle>
  );
};

export default UserProfileTemplate;
