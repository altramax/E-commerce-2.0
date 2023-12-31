import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CartManagerStyle = styled.div`
.CartGroup {
  margin: 0 auto;
  padding: 2rem 0;
  min-height: 100vh;
  max-height: 100%;
  .CartCard {
    width: 20rem;
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    .cartCardFlex {
      display: flex;
      justify-content: space-between;
      .imgAndName{
        display: flex;
        img{
          margin-right: 0.7rem;
        }
      }
    }
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  .emptyImage {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80vw;
      height: 80vh;
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
  .buttons{
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    button{
      padding: 0.4rem 0.7rem;
      border: none;
      font-weight: bold;
      border-radius: 0.4rem;
      cursor: pointer;
    }
    .btnCancle{
      background-color: #d2cbcb;
    }
    .btnDelete{
      background-color: #ff0000;
      color: #fff;
    }
  }
}

.subTotalContainer {
  width: 16rem;
  // top: 16rem;
  // right: 1rem;
  margin: 1rem auto;
  background-color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.8rem;
  color: #000000;
  box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
  .subTotal {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
  }
  .Checkout {
    background-color: #e70680;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #fff;
  }
}
.cancleImage {
  width: 2rem;
  margin-right: auto;
  margin-bottom: 1rem;
}

@media ${devices.tablet} {
  .CartGroup {
    .CartCard {
      width: 30rem;
      margin-bottom: 3rem;
    }
    .CartCard .cartCardFlex {
      justify-content: space-between;
    }
    .emptyImage {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60vw;
        height: 90vh;
      }
    }
  }
}

@media ${devices.smallLaptop} {
  .CartGroup {
    width: 80%;

    .CartCard {
      margin-left: 8rem;
      margin-bottom: 3rem;
      width: 30rem;
    }
    .CartCard .cartCardFlex {
      justify-content: space-between;
    }
  }
  .subTotalContainer {
    position: absolute;
    top: 14rem;
    right: 7rem;
  }
}
`;

export default CartManagerStyle


