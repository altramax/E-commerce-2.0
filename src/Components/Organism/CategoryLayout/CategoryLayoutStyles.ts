import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CategoryLayoutStyle = styled.div`
  margin-top: 100px;

  .category__layout__flex {
    display: flex;
    align-items: start;
    margin-top: 40px;
  }

  .category__layout__header {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-left: 20px;
    .route {
      cursor: pointer;
    }
  }

  .category__layout__head {
    margin: 20px auto;
    width: 100%;
    text-align: center;
  }

  .category__layout__aside {
    width: fit-content;
  }

  .category__layout__products {
    width: 90%;
    margin: 0 auto;
  }

  .category__group__container {
    flex-direction: column;
    margin: 0;
    padding-left: 20px;

    .category__card__container {
      .category__card__image {
        width: 40px;
        height: 40px;
        img {
          width: 20px;
        }
      }
      p {
        display: none;
      }
    }
    // .category__card__container:hover {
    //   p {
    //     display: block;
    //     width: fit-content;
    //     font-size:10px;
    //   }
    // }
  }

  @media ${devices.tablet} {
    .category__group__container {
      padding-left: 36px;
    }
    .category__layout__header {
      margin-left: 36px;
    }
  }
  @media ${devices.smallLaptop} {
    .category__group__container {
      padding-left: 42px;

      .category__card__container {
        padding: 5px 5px 5px 0;
        .category__card__image {
          width: 50px;
          height: 50px;
          img {
            width: 30px;
          }
        }
        p {
          display: block;
          width: fit-content;
          font-size: 13px;
        }
      }
    }

    .category__layout__header {
      margin-left: 48px;
    }
  }
`;

export default CategoryLayoutStyle;
