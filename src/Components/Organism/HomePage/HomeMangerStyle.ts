import styled from "styled-components";
import { devices } from "../../Media Queries/Media";
import bg from "../../assets/Images/Header.jpg"

const HomeManagerStyle = styled.div`

.headerContainer {
    margin: 3rem 1rem 2rem 1rem;
    background-size: contain;
    background-image: url(${bg});
    background-repeat: no-repeat;
    .headerText {
      padding: 7rem 2rem 4rem 2rem;
      text-align: center;
      color: #f9f8f8;
    }
  }
  .brandsContainer {
    margin: 0 1rem;
    h3 {
      padding-bottom: 1rem;
      text-align: center;
      font-family: "Bruno Ace SC", cursive;
    }
    .brandsGroup {
      display: flex;
      justify-content: space-between;
      .brands {
        width: 4rem;
        height: 3rem;
      }
    }
  }
  .benefits {
    margin: 4rem 1rem 3rem 1rem;
    h2 {
      padding-bottom: 2rem;
    }
    p {
      border-left: 3px solid #000;
      padding: 0.5rem 0.5rem;
      line-height: 2rem;
    }
  }
  .offersGroups {
    margin: 4rem 1rem 2rem 1rem;
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
  .shopGroup {
    margin: 3rem 1rem;
    h2 {
      margin: 2rem 0;
      text-align: center;
      font-family: "Bruno Ace SC", cursive;
    }
    .shops {
      .shopType {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
        .shopImg {
          width: 21rem;
          border-radius: 1rem;
        }
        .shopButton {
          text-decoration: none;
          color: #000;
          cursor: pointer;
          width: 11rem;
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgb(245, 239, 239);
          position: absolute;
          margin-top: 10rem;
          border-radius: 0.5rem;
          font-weight: bold;
          box-shadow: inset 0 0 0 0 #e70680;
          transition: 0.3s ease-in-out;
        }
        .shopButton:hover {
          color: #fff;
          box-shadow: inset 12rem 0 0 0 #e70680;
        }
      }
    }
  }
  
  .discountFooter {
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .textGroup {
      padding: 0.2rem 0 0.2rem 0.5rem;
      border-left: 2px solid #ff0000;
      z-index: 1;
      h3,
      h2 {
        margin: 1rem 0;
      }
      h3,
      span {
        color: #ff0000;
      }
    }
    .imgGroup {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      .point {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: #ac2415;
        z-index: 1;
      }
      img {
        width: 12rem;
        margin-top: -1rem;
        animation: swing 1s ease-in-out alternate infinite;
        transform-origin: center -10px;
      }
      @keyframes swing {
        0% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(20deg);
        }
      }
    }
  }
  
  
  
  @media ${devices.tablet} {
    .headerContainer {
      margin: 5rem 2rem 2rem 2rem;
      .headerText {
        padding: 13rem 9rem 6rem 9rem;
        font-size: 3rem;
      }
    }
    .brandsContainer {
      margin: 0 2rem;
    }
    .benefits {
      margin: 5rem 2rem 3rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: start;
      h2 {
        line-height: 3rem;
      }
      p {
        margin-left: 2rem;
      }
    }
    .offersGroups {
      margin: 4rem 2rem 2rem 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
  
      .offers {
        width: 45%;
      }
    }
    .shopGroup {
      margin: 0 2rem;
      h2 {
        margin-bottom: 4rem;
      }
      .shops {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .shopType {
          width: fit-content;
        }
      }
    }
    .discountFooter {
      margin: 5rem 3rem 3rem 3rem;
      flex-direction: row;
      align-items: start;
      .textGroup {
        width: 25rem;
        h3 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
      .imgGroup {
        .point {
          width: 2rem;
          height: 2rem;
        }
        img {
          width: 16xrem;
        }
      }
    }
  }
  
  @media ${devices.laptop} {
    .headerContainer {
      margin: 5rem 3rem 2rem 3rem;
      background-size: 100% 100%;
      .headerText {
        padding: 18rem 15rem;
      }
    }
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
    .benefits {
      margin: 7rem 3rem 5rem 3rem;
      h2 {
        font-size: 2rem;
      }
    }
    .offersGroups {
      margin: 8rem 3rem 0 3rem;
      .offers {
        width: 22%;
        align-items: start;
        text-align: start;
      }
    }
    .shopGroup {
      margin: 0 3rem;
      h2 {
        margin: 5rem 0 4rem 0;
      }
    }
  
    .discountFooter {
      margin-top: 6rem;
      .imgGroup {
        margin-left: 10rem;
        img {
          width: 25rem;
        }
      }
    }
  }
  
`;
export default HomeManagerStyle