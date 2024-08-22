import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const NavbarStyle = styled.div`
 

  .NavContainer {
    z-index: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    text-decoration: none;
    padding: 0 1rem;
    color: #000;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7f7f7;

    .Logo {
      font-size: 1.5rem;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      font-family: "Bruno Ace SC", cursive;
    }

    .cart {
      padding-top: 0.5rem;
      width: 1.5rem;
    }

    .hidden {
      display: none;
    }

    .cartNotificationIcon {
      position: absolute;
      color: #e70680;
      width: 1.2rem;
      height: 1.2rem;
      font-size: 1rem;
      font-weight: bold;
      right: 0.8rem;
      margin-top: -0.5rem;
      text-align: center;
    }
  }

   .goUp {
    top: -110px;
  }

  .profile_name_icon {
    z-index: 2;
    position: fixed;
    right: 0;
    bottom: 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 12px;
    width: 50%;
    cursor: pointer;
    .center {
      margin: auto;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      div {
        width: fit-content;
      }
    }
  }

  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }

  @media ${devices.tablet} {
    .NavContainer {
      height: 4rem;
      padding: 0 2rem;
      align-items: center;

      .Logo {
        font-weight: bold;
        font-size: 1.7rem;
      }

      .cartNotificationIcon {
        right: 1.5rem;
      }
    }
  }
  @media ${devices.smallLaptop} {
    .NavContainer {
      padding: 0 3rem;
      .Logo {
        font-size: 2rem;
      }

      .carthan {
        margin-right: 2rem;
      }
      .cartNotificationIcon {
        right: 4.5rem;
      }
    }
    .group {
      display: flex;
      justify-content: start;
      gap: 30px;
      width: fit-content;

      .profile_name_icon {
        position: relative;
        bottom: 0;
        width: fit-content;
        right: 0;
      }
    }
    .search__div {
      width: 50%;
    }
  }
`;
export default NavbarStyle;
