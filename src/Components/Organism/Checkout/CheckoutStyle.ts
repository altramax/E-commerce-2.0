import styled from "styled-components";

const CheckoutStyle = styled.div`

.Form {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  background-color: #fff;
  height: 100vh;
  padding: 1rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  h2,
  h1 {
    color: #e80582;
  }
  .cancleImage {
    width: 2rem;
    margin: 0 auto 1rem 1rem;
    cursor: pointer;
  }
  .inputGroup {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 1.5rem;
    label {
      font-size: 1rem;
      padding-bottom: 0.6rem;
    }
    input {
      padding: 0.8rem;
      font-size: 1.2rem;
      width: 20rem;
    }
  }
  .PaymentGroup {
    margin-top: 3rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
  }

  .PaymentOptions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 1rem;
    span {
      font-size: 1.2rem;
    }
    input {
      width: 2rem;
      height: 2rem;
      margin-bottom: 1rem;
    }
    h3 {
      position: absolute;
      margin-top: 3rem;
      color: #ff0000;
    }
  }

  .amount {
    width: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .PaymentConfirmation {
    .confirmText {
      text-align: center;
      background-color: #e80582;
      color: #fff;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-bottom: 4rem;
    }
    .ConfirmOrder {
      text-align: center;
      position: fixed;
      top: 7rem;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: #fff;
      box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
      width: 13rem;
      border-radius: 0.5rem;
      padding: 1rem;
      overflow-wrap: break-word;
      z-index: 2;

      img {
        width: 4rem;
        color: #e80582;
      }

      h3 {
        border-bottom: 1px solid black;
        width: fit-content;
        text-align: start;
        overflow-wrap: break-word;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      p {
        text-align: start;
        padding-bottom: 0.5rem;
      }

      #downloadButton {
        text-decoration: none;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e80582;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        margin-top: 1rem;
        margin: auto;
      }
    }
  }
  .FormOverlay {
    position: fixed;
    top: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    z-index: 1;
  }
}

.error {
  position: fixed;
  top: 0;
  padding: 0.8rem 0;
  text-align: center;
  width: 100vw;
  background-color: red;
  color: #fff;
}

`;

export default CheckoutStyle;
