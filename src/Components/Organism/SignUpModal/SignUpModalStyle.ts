import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const SignUpTemplateStyle = styled.div`
  padding: 32px;

  .blurout {
    opacity: 0;
    transition: opacity 1s linear;
  }

  .blurin {
    opacity: 1;
    transition: opacity 1s linear;
  }

  .signup {
    h2 {
      font-size: 20px;
      letter-spacing: 0;
      position: fixed;
    }
  }
  .signup__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 60px;

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
      width: 240px;
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
        padding: 14px 65px 14px 8px;
        width: 240px;
        margin: 32px;
        font-size: 16px;
        border-radius: 12px;
        border: 1px solid grey;
      }
    }
    .button {
      padding: 14px 65px;
      width: 320px;
      margin: 14px;
      font-size: 14px;
      border-radius: 16px;
      border: none;
      background-color: #000;
      color: #fff;
    }
    .signin {
      margin: 20px 0;
      font-size: 14px;
      span {
        color: blue;
      }
    }
  }

  @media ${devices.laptop} {
    width: 50vw;
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

export default SignUpTemplateStyle;