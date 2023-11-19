import styled from "styled-components";

const UserProfileStyle = styled.div`
  width: 100%;


  .user__profile__body {
    display: flex;
    justify-content: space-between;
  }

  .user__profile__menu {
    width: 20%;
    position: fixed;
  }

  .user__profile__content {
    width: 80%;
    margin-left: auto;
    padding: 100px;
  }
`;

export default UserProfileStyle;
