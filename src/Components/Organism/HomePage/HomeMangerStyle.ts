import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const HomeManagerStyle = styled.div`
  // scroll-behaviour: smooth;

  .brandsContainer {
    // margin: 0 1rem;
    padding: 70px 50px;
    // background-color: #fcfcfc;
    // transform: translateY(30%);
    // transition: opacity 0.5s ease, transform 0.5s ease;

    .direction {
      display: none;
      position: absolute;
      width: fit-content;
      border: 1px solid grey;
      border-radius: 50%;
      padding: 5px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .rightscroll {
      right: 16px;
    }
    .leftscroll {
      left: 16px;
    }

    h3 {
      padding-bottom: 1rem;
      text-align: center;
      font-family: "Bruno Ace SC", cursive;
    }
    .brandsGroup {
      // position: relative;
      -ms-overflow-style: none;
      scrollbar-width: none;
      display: flex;
      justify-content: space-between;
      scroll-behaviour: smooth;
      align-items: center;
      overflow: auto;
      gap: 30px;
      .brands {
        width: 4rem;
        // height: 3rem;
      }
    }
    .brandsGroup::-webkit-scrollbar {
      display: none;
    }
  }

  .brandsContainer:hover {
    .direction {
      display: flex;
    }
  }

  .offersGroups {
    padding: 4rem 1rem 4rem 1rem;
    background-color: #5d6269;
    color: #fff;
    .offers {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 3rem;
      .offersImg {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;
      }
      h3 {
        margin-bottom: 0.7rem;
      }
    }
  }

  .discountGroup {
    // margin: 3rem 16px;
    padding: 50px 16px;
    // border: 1px solid;
    // background-color: #efefef;
    background-color: #d8d4ff;

    h2 {
      margin: 2rem 0;
      text-align: center;
      line-height: 130%;
      font-family: "Bruno Ace SC", cursive;
    }

    .img__group {
      width: 100%;
      position: relative;
      margin-bottom: 40px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .shopButton {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      width: 15rem;
      font-size: 16px;
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(245, 239, 239);
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0.5rem;
      font-weight: bold;
      box-shadow: inset 0 0 0 0 #6a5acd;
      transition: 0.3s ease-in-out;
    }
    .shopButton:hover {
      color: #fff;
      box-shadow: inset 16rem 0 0 0 #6a5acd;
    }
  }

  .allProducts__container {
    // transform: translateY(30%);
    // transition: opacity 0.5s ease, transform 0.5s ease;
    margin-top: 30px;
    // background-color: #efefef;
    background-color: #f1f0ff;
    padding: 50px 0;
    h3 {
      padding-bottom: 1rem;
      text-align: center;
      font-family: "Bruno Ace SC", cursive;
    }
    .card__group {
      // flex-wrap: nowrap;
      // overflow: auto;
      .card__container {
        flex-shrink: 0;
      }
    }
  }

  .fadein__left {
    opacity: 1;
    transform: translateY(100);
  }

  .fadein__right {
    opacity: 1;
    transform: translateY(0);
  }

  // .categoryContainer{
  //    transform: translateY(-100%);
  //   transition: opacity 0.8s ease, transform 0.8s ease;
  // }

  @media ${devices.tablet} {
    .brandsContainer:hover {
      .direction {
        display: none;
      }
    }

    #large {
      width: 300px;
    }
    #smaller {
      width: 360px;
    }
    .allProducts__container {
      margin-top: 0px;

      padding: 70px 0 80px 0;
    }

    .brandsContainer {
      margin: 0 2rem;
    }

    .offersGroups {
      padding: 4rem 2rem 2rem 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .offers {
        width: 45%;
      }
    }

    .discountGroup {
      padding: 2rem;

      .img__group__main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 100%;
      }

      .img__group__sub {
        width: fit-content;
      }

      .img__group {
        width: fit-content;
        position: relative;
        margin-bottom: 40px;
        img {
          width: 100%;
        }
      }
    }
  }

  @media ${devices.laptop} {
    .brandsContainer {
      margin: 4rem 4rem;
      font-size: 1.5rem;
      .brandsGroup {
        width: 80%;
        margin: 2rem auto;
        .brands {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    .offersGroups {
      padding: 4rem 3rem 4rem 3rem;
      .offers {
        width: 22%;
        align-items: start;
        text-align: start;
      }
    }
    .discountGroup {
      padding: 3rem;
    }
  }
`;
export default HomeManagerStyle;
