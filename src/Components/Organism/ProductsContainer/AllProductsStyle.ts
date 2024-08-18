import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const AllProductsStyle = styled.div`
  @keyframes popUp {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes popDown {
    0% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
  }

  .emptyImage {
    margin: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    img {
      width: 80vw;
    }
  }

  .card__group {
    display: flex;
    // min-height: 80vh;
    justify-content: start;
    align-items: center;
    // margin-bottom: 2rem;
    row-gap: 70px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .cart {
    transform: scaleY(0);
    animation: popDown 0.5s ease;
    transform-origin: bottom center;
  }

  .card__container:hover {
    .cart {
      animation: popUp 0.5s ease;
      transform-origin: bottom center;
      display: block;
      transform: scaleY(1);
    }
  }

  .card__container {
    width: 150px;
    height: 180px;
    margin: 0 auto 2rem auto;
    background-color: #fff;
    border-radius: 16px;
    

    .card__inner__container {
      box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 180px;
      position: relative;

      .cart {
        position: absolute;
        display: inline;
        z-index: 2;
        bottom: 0;
        width: 150px;
      }
    }

    .product__image {
      width: 100px;
      height: 120px;
      cursor: pointer;
    }

    .product__name,
    .product__price {
      font-size: 14px;
      text-align: center;
      margin-top: 15px;
    }

    .product__price {
      margin-top: 5px;
    }
  }

  .discount {
    margin-left: auto;
    margin-bottom: 0.3rem;
    background-color: #e70680;
    color: #fff;
    font-size: bold;
    width: fit-content;
  }

  @media ${devices.tablet} {
    .emptyImage {
      width: 50vw;

      img {
        width: 100%;
        // height: 90vh;
      }
    }
  }
`;

export default AllProductsStyle;
