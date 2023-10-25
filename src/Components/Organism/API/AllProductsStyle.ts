import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const AllProductsStyle = styled.div`
  .CardGroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  .CardContainer {
    width: 20rem;
    height: 28rem;
    box-shadow: -10px 11px 23px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    margin: 2rem 0.5rem;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem 0;

    img {
      width: 14em;
      height: 14rem;
      cursor: pointer;
    }

    h2 {
      padding: 1rem 0 0 1rem;
      height: 4rem;
      cursor: pointer;
      font-size: 1.2rem;
    }

    h3 {
      padding: 0.5rem 0;
    }
  }

  .CardContainer > .addToCartGroup {
    margin: 1rem auto 0 auto;
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
    .CardGroup {
      width: 95%;
      margin: auto;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
      .CardContainer {
        width: 16rem;
        height: 25rem;
      }
      img {
        width: 12rem;
        height: 12rem;
      }
    }
  }
`;

export default AllProductsStyle;
