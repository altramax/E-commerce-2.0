import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const SignUpModalStyle = styled.div`
animation: show-bg 1s linear forwards;
box-sizing:border-box;
display:flex;
justify-content: center;
align-items: center;
height:100vh;
left:0;
position:fixed;
top: 0;
width:100vw;
z-index:50;
@keyframes show-bg{
    0%{
        background:rgba(0, 0, 0, 0)
      opacity: 0;

    }
    100%{
        background:rgba(0, 0, 0, 0.8);
      opacity: 1;

    }
}

  .signup {
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
    flex-direction: column;
    align-items: center;

    margin-bottom: 12px;
    font-family: "Bruno Ace SC", cursive;
  }


  .signup__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;

    h1 {
      font-size: 50px;
    }

    .signup__body__welcome {
      margin-top: 20px;
      p {
        font-weight: 600;
      }
    }

    .signup__body__googlelogin {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: 1px solid grey;
      border-radius: 12px;
      padding: 8px 36px;
      margin: 14px;
      width: 280px;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      img {
        width: 20px;
      }
    }

    .signup__dash {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 25px 0;

      div {
      }
    }

    .signup__inputs {
      .input {
        display: block;
        padding: 10px 65px 10px 8px;
        width: 280px;
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
    .signin {
      margin: 20px 0;
      font-size: 14px;
      span {
        color: blue;
      cursor: pointer;
      }
    }
  }

  @media ${devices.laptop} {
    padding: 32px;

    .signup {
      h2 {
        font-size: 25px;
      }
    }

    .signup__body {
      h1 {
        font-size: 70px;
      }
    }
  }
`;

export default SignUpModalStyle;
