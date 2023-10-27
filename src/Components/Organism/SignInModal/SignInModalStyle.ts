import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const SignInModalStyle = styled.div`
  animation: show-bg 1s linear forwards;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 5000;
  @keyframes show-bg {
    0% {
      background: rgba(0, 0, 0, 0);
      opacity: 0;
    }
    100% {
      background: rgba(0, 0, 0, 0.8);
      opacity: 1;
    }
  }

  .signin {
    background-color: #fff;
    width: fit;
    border-radius: 12px;
    h2 {
      font-size: 20px;
      letter-spacing: 0;
      position: fixed;
    }
  }

  .signin__header__img {
    display: flex;
    justify-content: end;
    padding: 12px;
    img {
      margin-left: auto;
      cursor: pointer;
    }
  }

  .signin__header {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    font-family: "Bruno Ace SC", cursive;
  }

  .signin__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;

    .signin__inputs {
      .input {
        display: block;
        padding: 10px 65px 10px 8px;
        width: 200px;
        margin: 24px;
        font-size: 14px;
      
        border-outline: none;
        border: none;
        border-bottom: 1px solid grey;
      }
    }
    .button {
      padding: 12px 65px;
      width: 280px;
      margin: 14px;
      font-size: 14px;
      border-radius: 16px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }

    .signin__body__googlelogin {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: 1px solid grey;
      border-radius: 12px;
      padding: 8px 36px;
      margin: 14px;
      width: 200px;
      cursor: pointer;
      p {
        font-size: 14px;
      }

      img {
        width: 20px;
      }
    }

    .signin__dash {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 15px 0;
    }
    .signup {
      margin: 15px 0 25px 0;
      font-size: 14px;
      font-size: 14px;
      span {
        color: blue;
        cursor: pointer;
      }
    }
  }

  @media ${devices.laptop} {
    width: 100vw;
    padding: 32px;

    .signin {
      h2 {
        font-size: 25px;
      }
    }

    .signin__body {
      h1 {
        font-size: 70px;
      }
    }
  }
`;
export default SignInModalStyle;
