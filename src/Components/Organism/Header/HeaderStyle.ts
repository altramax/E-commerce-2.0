import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const HeaderStyle = styled.div`
  /* Carousel.css */
  .header__container {
    margin-top: 65px;
    width: 100%;
    position: relative;
    background-color: #b7b6b4;
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-img {
    width: 100%;
    flex-shrink: 0;
  }

  .carousel-buttons {
    position: absolute;
    bottom: 10px;
    left: 10%;
    // transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .carousel-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: gray;
    cursor: pointer;
  }

  .carousel-button.active {
    background-color: black;
  }
  .visible {
    display: block;
  }

  .headerText__one {
    padding-left: 16px;
    text-align: start;
    color: #6a5acd;
    position: absolute;
    top: 50px;
    // width: 50%;
    // font-size:30px;
  }

  .headerText {
    padding-left: 16px;
    text-align: start;
    color: #6a5acd;
    position: absolute;
    top: 70px;
    width: 70%;
    font-size: 30px;
    line-height: 120%;
  }

  .hidden {
    display: none;
  }

  @media ${devices.tablet} {
    .carousel-img {
      height: 500px;
    }

    .headerText__one {
      padding-left: 32px;
      top: 210px;
    }

    .headerText {
      padding-left: 32px;
      top: 240px;
      width: 55%;
      font-size: 40px;
      line-height: 130%;
    }
  }

  @media (min-width: 1080px) {
    .headerText__one {
      padding-left: 32px;
      top: 100px;
    }

    .headerText {
      padding-left: 32px;
      top: 130px;
      width: 40%;
      font-size: 50px;
      line-height: 130%;
    }
  }

  @media ${devices.laptop} {
    .headerText__one {
      padding-left: 32px;
      // top: 210px;
    }

    .headerText {
      padding-left: 32px;
      // top: 240px;
      width: 35%;
      font-size: 65px;
      line-height: 130%;
    }
  }
`;

export default HeaderStyle;
