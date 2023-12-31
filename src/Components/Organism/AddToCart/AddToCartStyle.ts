import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const AddToCartStyle = styled.div`
  .addToCartGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto 0 auto;
    width: 16rem;
    font-size: 1.1rem;

    .addToCartButton {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0.2rem;
      background-color: #e70680;
      color: #fff;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
      font-size: 0.8rem;
    }
    img {
      width: 1rem;
      height: 1rem;
    }

    .countGroup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 5rem;

      .countButton {
        cursor: pointer;
        border: 1px solid #d2cbcb;
        padding: 0 0.3rem;
        background-color: #e0edf4;
      }
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

  @media ${devices.tablet} {
    .addToCartGroup {
      width: 14rem;
    }
    .errorMessage {
      font-size: 2rem;
    }
  }
`;

export default AddToCartStyle;