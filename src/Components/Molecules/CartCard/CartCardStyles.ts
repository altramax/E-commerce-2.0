import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CartCardStyles = styled.div`
 .CartCard {
      padding: 2.5rem 1.5rem 1.5rem 1.5rem;
      margin: auto;
      border-bottom: 1px solid #000;
      .cartCardFlex {
        display: flex;
        justify-content: center;
        gap: 30px;
      }
      img {
        width: 6rem;
        height: 7rem;
        border-radius: 10px;
      }
    }

      .img__container {
      width: 7rem;
      height: 8rem;
      padding: 15px;
      background-color: #EEEEEE;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cart__inner__container__sub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
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
    .cart__name__price {
      h4 {
        padding: 10px 0 0px 0;
      }
    }
  }
  .PriceGroup {
    width: 7rem;
    text-align: end;
    .OldpriceandDiscount {
      display: flex;
      justify-content: space-between;
      width: 7rem;
      margin-top: 0.6rem;
    }
    .oldPrice {
      text-decoration: line-through;
      text-decoration-thickness: 2px;
    }
  }

  .quantityGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 1rem;

    .removeProduct {
      background-color: #e70680;
      padding: 0.2rem;
      border-radius: 0.3rem;
      font-size: 0.8rem;
      color: #fff;
    }
    .CountGroup {
      width: 8rem;
      display: flex;
      justify-content: space-between;
    }
    .countButton {
      cursor: pointer;
      border: 1px solid #d2cbcb;
      padding: 0 0.3rem;
      background-color: #e0edf4;
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


 
`;

export default CartCardStyles;
