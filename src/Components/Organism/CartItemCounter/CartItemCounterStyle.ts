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

  @media (min-width: 768px) {
  }
`;

export default CartItemCounterStyle;
