import styled from "styled-components";
import { devices } from "../../Media Queries/Media";
import color from "../../Atom/color/color";

const AllProductsStyle = styled.div`
  .card__group {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-bottom: 2rem;
  }

  .card__container {
    width: 20rem;
    height: 20rem;
    box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
    margin: 2rem 0.5rem;
    border-radius: 1rem;
    padding: 1rem 0;
   

    .card__container__sub {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .card__image__container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15rem;
    }

    .hover__image,
    .main__image {
      width: 14rem;
      height: 14rem;
      cursor: pointer;
      opactity: 1;
      transition: opacity 1s;
    }

    .hover__image {
      opacity: 0;
      width: 0;
      height: 0;
    }

    h2 {
      // padding: 1rem 0 0 0;
      // height: 4rem;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
    }

    h3 {
      padding: 0.5rem 0;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .addToCartGroup {
    margin: 0 auto 3rem auto;
  }

  .card__container:hover {
    .hover__image {
      opacity: 1;
      width: 14rem;
      height: 14rem;
    }
    .main__image {
      opacity: 0;
      opacity: 0;
      width: 0;
      height: 0;
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
    .card__group {
      width: 95%;
      margin: auto;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
      .card__container {
        width: 16rem;
        height: 25rem;
      }
      .main__image,
      hover__image {
        width: 12rem;
        height: 12rem;
      }
      .addToCartGroup {
        margin-top: 0;
      }
    }
  }
`;

export default AllProductsStyle;
