import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const ProductDetailsStyle = styled.div`.ModalContainer {
    background-color: #fff;
    width: 100%;
    height: 30rem;
    overflow-y: scroll;
    color: #000000;
    z-index: 3;
    position: fixed;
    bottom: 0;
    .cancleIcon {
      width: fit-content;
      margin: 1rem auto 0 auto;
      cursor: pointer;
    }
  
    .modalImage {
      display: flex;
    }
    .modalImageGroup {
      padding: 1rem;
    }
    .descriptionGroup {
      padding: 1rem;
      h3 {
        margin: 1rem 0;
      }
      h2 {
        margin-right: auto;
        text-decoration: underline;
      }
    }
  
    img {
      width: 15rem;
      height: 16rem;
      margin: auto;
    }
    h3 {
      padding: 1rem 1rem 0 0;
    }
  }
  
  .overlayModal {
    background-color: #0f0f0f;
    position: fixed;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  
  @media ${devices.tablet} {
    .modalFlex {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin: auto;
      .descriptionGroup,
      .modalImageGroup {
        width: 50%;
      }
      .modalImage {
        display: block;
      }
    }
  }
  
  
  
`;
export default ProductDetailsStyle;