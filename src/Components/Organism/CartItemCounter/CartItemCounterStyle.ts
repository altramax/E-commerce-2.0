import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CartItemCounterStyle = styled.div`
  padding: 0 10px;
  // background-color: rgba(238, 238, 238, 0.8);
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  #remove__item {
    position: absolute;
    margin-top: -250px;
    margin-left: -180px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      display: none;
      text-align: center;
      font-size: 10px;
      font-weight: 400;
      line-height: 160%;
      position: absolute;
      color: #fff;
      background: rgba(5, 18, 38, 0.9);
      border-radius: 4px;
      opacity: 7;
      padding: 4px 8px;
      font-family: Montserrat;
      z-index: 2;
      margin-top: 30px;
    }
  }

  #remove__item:hover {
    p {
      display: block;
    }
  }

  .countGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 15px;
    width: 90px;

    .countButton {
      cursor: pointer;
      border: 1px solid #d2cbcb;
      padding: 0 10px;
      background-color: #e0edf4;
      font-size: 25px;
    }
  }

  .delOverlay {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 3;
  }
  .deleteModal {
    width: 15rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: #fff;
    z-index: 5;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .buttons {
      width: 100%;
      display: flex;
      margin-top: 1rem;
      justify-content: space-between;
      button {
        padding: 0.4rem 0.7rem;
        border: none;
        font-weight: bold;
        border-radius: 0.4rem;
        cursor: pointer;
      }
      .btnCancle {
        background-color: #d2cbcb;
      }
      .btnDelete {
        background-color: #ff0000;
        color: #fff;
      }
    }
  }

  .hidden {
    display: none;
  }

  @media (min-width: 768px) {
  }
`;

export default CartItemCounterStyle;
