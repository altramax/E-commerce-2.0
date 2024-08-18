import styled from "styled-components";

const ProductDetailsModalStyle = styled.div`
  .products__details__modal__container::-webkit-scrollbar {
    display: none;
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

  @keyframes popUp {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .cancleIcon {
    width: 100%;
    cursor: pointer;
    padding: 20px;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    .cancleIcon__img {
      width: 40px;
      display: block;
    }
  }

  .products__details__modal__container {
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;
    animation: popUp 0.5s ease;
    transform-origin: bottom center;
    padding: 0 20px;
    background-color: #ffffff;
  }

  .small__boxes__container {
    display: flex;
    justify-content: start;
    gap: 8px;

    .small__box {
      cursor: pointer;
      border-radius: 5px;
      margin-top: 10px;
      background-color: "#F9F9F9";
      padding: 8px;
      font-size: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      border: none;
      outline: none;
    }
    .small_width {
      width: 40px;
    }
    .large_width {
      width: 80px;
    }
    img {
      width: 10px;
    }
  }

  .dis {
    background-color: #000;
    border-radius: 10px;
    width: fit-content;
    padding: 3px 7px;
    color: #fff;
    font-size: 10px;
    margin-bottom: 15px;
  }

  .flex {
    display: flex;
    width: fit-content;
    align-items: end;
    justify-content: start;
    gap: 10px;
    margin: 10px 15px 15px 0;
    letter-spacing: 2px;
    h5 {
      text-decoration: line-through;
      text-decoration-thickness: 1.5px;
      color: #808080;
    }
  }

  .images__container {
    border-radius: 10px;
    // border: 1px solid;
    margin-bottom: 40px;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 20px;
    // background-color: #808080;
  }

  .main__images {
    width: 80%;
    height: 420px;
    // border: 1px solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f9f9f9;

    img {
      border-radius: 10px;
      width: 265px;
      max-height: 420px;
    }
  }

  .sub__images__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .sub__image {
      border-radius: 10px;
      width: 70px;
      height: 83.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: #f9f9f9;
    }
    .img {
      width: 100%;
      height: 83.5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  .products__details__modal {
    width: 100%;

    .discription__container {
      padding: 0 20px 20px 20px;
      .product__name {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 15px;
      }
      .price {
        font-size: 16px;
      }

      ul {
        padding: 0 20px 20px 20px;
      }
      li {
        padding: 5px;
        font-size: 14px;
      }
      p {
        font-size: 14px;
        margin-bottom: 10px;
      }
      h4 {
        margin-bottom: 5px;
        margin-top: 20px;
      }
    }
  }

  .selected {
    background-color: #99f3fc;
    color: "#000000";
  }

  .info {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 768px) {
    .products__details__modal__container {
      // height: 60%;
    }
    .images__container {
      width: fit-content;
      margin-right: 50px;
    }

    .cancleIcon {
      padding: 20px 30px;
    }

    .main__images {
      width: fit-content;

      img {
        width: 360px;
        max-height: 445px;
      }
    }

    .sub__images__container {
      width: fit-content;
      gap: 15px;
      .sub__image {
        width: 85px;
      }
      .img {
        width: 100%;
        height: 95px;
      }
    }
  }

  .addtocart__div {
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    // width: fit;
    .addtocart__container {
      justify-content: start;
      align-items: center;
      flex-direction: row;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      background-color: #fff;

      gap: 20px;
    }
    .countGroup {
      .countButton {
        width: 30px;
        text-align: center;
        font-size: 25px;
      }
    }
    .hide {
      display: block;
    }
  }

  @media (min-width: 1080px) {
    .products__details__modal {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
    }

    .cancleIcon {
      padding: 20px 50px;
    }

    .images__container {
      justify-content: start;
    }

    .discription__container {
      width: 50%;
      .product__name {
        font-weight: 500;
        font-size: 16px;
      }
      .price {
      }
    }
  }
`;
export default ProductDetailsModalStyle;
