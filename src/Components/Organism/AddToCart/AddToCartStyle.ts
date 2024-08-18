import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const AddToCartStyle = styled.div`
  .addtocart__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 10px;
    background-color: rgba(238, 238, 238, 0.8);
    color: #000;
    gap: 10px;
  }
  .hide {
    display: none;
  }
  .margin-top {
    margin-bottom: 20px;
  }

  .inactive {
    color: #808080;
  }

  .addToCartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border: none;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    padding: 5px 10px;
    // margin-bottom: 10px;
    background-color: rgba(238, 238, 238, 0.8);
    outline: none;
    border-radius: 10px;
  }
  img {
    width: 16px;
    height: 16px;
  }

  .countGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 15px;

    .countButton {
      cursor: pointer;
      border: 1px solid #d2cbcb;
      padding: 0 0.3rem;
      background-color: #e0edf4;
      font-size: 15px;
    }
  }

  .errorMessage {
    position: fixed;
    z-index: 4;
    color: #fff;
    background-color: #e70680;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    width: 100vw;
    text-align: center;
  }

  .green {
    background-color: #07bd07;
  }
`;

export default AddToCartStyle;
