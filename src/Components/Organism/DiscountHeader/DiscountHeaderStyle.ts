import styled from "styled-components";
import { devices } from "../../Media Queries/Media";
import bg from "../../assets/Images/background.jpg"

const DiscountHeaderStyle = styled.div`

.discountHeader {
    background-image: url(${bg});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    margin: 4rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .textGroup {
      color: #ffffff;
      padding: 0.2rem 0 0.2rem 0.5rem;
      border-left: 2px solid #e70680;
      z-index: 1;
      h3,
      h2 {
        margin: 1rem 0;
      }
      h3,
      span {
        color: #e70680;
      }
    }
    .imgGroup {
      display: flex;
      flex-direction: column;
      align-items: center;
      .point {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        background-color: #e70680;
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
    .discountHeader {
      margin: 4rem 2rem 1rem 2rem;
      flex-direction: row;
      align-items: start;
      background-position: center;
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
          width: 1.5rem;
          height: 1.5rem;
        }
        img {
          width: 16xrem;
        }
      }
    }
  }
  
  @media ${devices.laptop}{
    .discountHeader {
      margin-top: 5rem;
      .textGroup {
        width: 30rem;
        h2 {
          font-size: 2.5rem;
        }
      }
      .imgGroup {
        margin-left: 10rem;
        .point {
          width: 1.9rem;
          height: 1.9rem;
        }
        img {
          width: 25rem;
        }
      }
    }
  }
  
`;
export default DiscountHeaderStyle