import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CartManagerStyle = styled.div`
  .cartManager__container {
    margin-top: 40px;
    padding: 30px;
  }

     .header__name {
      padding: 20px 0;
      position: fixed;
      top: 62px;
      margin-bottom: 20px;
      background-color: #fff;
      width: 100%;
      z-index: 2;
    }

  .cart__items__list {
    width: 100%;
    padding: 4rem 0;

 

    // .CartCard {
    //   padding: 2rem;
    //   margin: auto;
    //   border-bottom: 1px solid #000;
    //   .cartCardFlex {
    //     display: flex;
    //     justify-content: start;
    //     gap: 30px;
    //   }
    //   img {
    //     width: 6rem;
    //     height: 7rem;
    //     border-radius: 10px;
    //   }
    // }

    // .img__container {
    //   width: 7rem;
    //   height: 8rem;
    //   padding: 15px;
    //   background-color: #EEEEEE;
    //   border-radius: 10px;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }
    // .cart__inner__container__sub {
    // }

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
    // .cart__name__price {
    //   h4 {
    //     padding: 10px 0 0px 0;
    //   }
    // }
  }
  // .PriceGroup {
  //   width: 7rem;
  //   text-align: end;
  //   .OldpriceandDiscount {
  //     display: flex;
  //     justify-content: space-between;
  //     width: 7rem;
  //     margin-top: 0.6rem;
  //   }
  //   .oldPrice {
  //     text-decoration: line-through;
  //     text-decoration-thickness: 2px;
  //   }
  // }

  // .quantityGroup {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   cursor: pointer;
  //   margin-top: 1rem;

  //   .removeProduct {
  //     background-color: #e70680;
  //     padding: 0.2rem;
  //     border-radius: 0.3rem;
  //     font-size: 0.8rem;
  //     color: #fff;
  //   }
  //   .CountGroup {
  //     width: 8rem;
  //     display: flex;
  //     justify-content: space-between;
  //   }
  //   .countButton {
  //     cursor: pointer;
  //     border: 1px solid #d2cbcb;
  //     padding: 0 0.3rem;
  //     background-color: #e0edf4;
  //   }
  // }
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
    top: 12rem;
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

  .subTotalContainer {
    padding: 20px;
    width: 19rem;
    // top: 16rem;
    // right: 1rem;
    margin: 1rem auto;
    background-color: #f7f7f7;
    text-align: center;
    border-radius: 0.5rem;
    // padding: 0.8rem;
    color: #000000;
    // box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
    // border: 1px solid #000;
    .subTotal {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      // gap: 150px;
      h4 {
        margin-right: 30px;
      }
    }
    .line {
      border: 1px solid black;
      width: 100%;
      height: 1px;
      margin: 20px 0 10px 0;
    }
    .Checkout {
      // backgroundVariant2 : "#EEEEEE",
      // backgroundVariant3 : "#F9F9F9",
      // buttonbackground: "#99f3fc"
      // background-color: #7B8B8A;
      background-color: #121212;

      // background-color: #161a21;
      padding: 15px;
      border-radius: 0.5rem;
      cursor: pointer;
      color: #fff;
      margin-top: 20px;
    }
  }
  .cancleImage {
    width: 2rem;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  @media ${devices.tablet} {
    .cart__items__list {
      margin-right: auto;
      .CartCard {
        width: 30rem;
      }
      .emptyImage {
        width: 50vw;

        img {
          width: 100%;
          // height: 90vh;
        }
      }
    }
  }

  @media ${devices.smallLaptop} {
    margin-top: 70px;
    padding: 0 90px;
    width: 100%;

    .cart__items__list {
      width: 65%;
      padding: 0;
      margin-top: 0;
      margin-right: auto;

      .header__name {
        text-align: start;
      }
      .CartCard {
        width: 70%;
        margin: 0;
      }
    }

    .cartManager__container {
      display: flex;
      justify-content: start;
      align-items: start;
      // margin:auto;
    }
    .subTotalContainer {
      width: 35%;
      right: 90px;
      height: fit-content;
      position: fixed;
      // top: 14rem;
      // right: 7rem;
    }
  }
`;

export default CartManagerStyle;
