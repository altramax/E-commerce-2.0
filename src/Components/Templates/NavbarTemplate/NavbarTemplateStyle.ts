import styled from "styled-components";
import { devices } from "../../Media Queries/Media";
import bg from "../../assets/Icons/profile-icon.svg";
import bgActive from "../../assets/Icons/profile-active.svg";




const NavbarStyle = styled.div`
.network__response{
  position: fixed;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px 10px;
  background-color: green;
  color: #fff;
  margin: 24px 24px 0 0;
  z-index: 5000;
  border-radius: 6px;

}

  .NavContainer {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    text-decoration: none;
    padding: 0 1rem;
    color: #000;
    position: fixed;
    top: 0;
    width: 95%;
    background-color: #fff;


    .Logo {
      font-size: 1.5rem;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      font-family: "Bruno Ace SC", cursive;
    }

    .cart__hamburger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 0.5rem;
      cursor: pointer;
      padding-top: 0.5rem;
    }

    .hamburger {
      margin-right: 1rem;
    }

    .user__profile__group {
      cursor: pointer;
      margin-right: 10px;
    }


    .user__profile__group__title {
     
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
   
      .profile__icon {
        width: 1.5rem;
        height: 1.5rem;
        background-image: url(${bg});
        background-size: 1.5rem;
      }
    }

    .user__profile__group__title:hover {
      .profile__icon{
        background-image: url(${bgActive});
        backgroung-size: 1.5rem;
      }
      p{
        color: #e70680;
      }
    }

    

    .profile__links { 
   
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
      position: absolute;
      margin-left: -90px;
      border-radius: 10px;
      padding: 12px 10px;
      display: flex;
      flex-direction: column;
      background-color: #ff0;
      z-index: 20;
      .profile__link__sub {
        display: flex;
        flex-direction: column;
        button{
        border: none;
        padding: 5px 7px;
        margin-top: 10px;
        cursor: pointer;
        }
      }

      @keyframes growDown {
        0% {
            transform: scaleY(0)
        }
        80% {
            transform: scaleY(1.1)
        }
        100% {
            transform: scaleY(1)
        }
    }


      .user__profile {
        color: black;
        text-decoration: none;
        border-radius: 8px;
        padding: 5px 7px;
        cursor: pointer;
      }
      .user__profile:hover {
        background-color: grey;
      }
    }

    .open {
      display: absolute;
    }

    .cart {
      padding-top: 0.5rem;
      width: 1.5rem;
    }

    .linkgroup {
      background-color: #fff;
      position: absolute;
      right: 1rem;
      top: 4rem;
      padding: 0 1rem 1rem 1.5rem;
      border-bottom-left-radius: 0.5rem;
      z-index: 2;
    }

    .hidden {
      display: none;
    }

    .Link {
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      display: block;
      padding-bottom: 0.5rem;
      transition: 0.3s ease-in-out;
    }
    .Link:hover {
      color: #e70680;
    }

    .overlay {
      position: fixed;
      opacity: 0.8;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
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

  @media ${devices.tablet} {
    .NavContainer {
      height: 4rem;
      padding: 0 2rem;
      align-items: center;

      .Logo {
        font-weight: bold;
        font-size: 1.7rem;
      }
      .hamburger {
        display: none;
      }

      .cart__hamburger {
        width: fit-content;
        justify-content: center;
        margin-right: 1.5rem;
      }

      .cartNotificationIcon {
        right: 3rem;
      }

      #linkGroup {
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        width: 50%;
      }

      .linkgroup {
        position: relative;
        top: 0;
        padding: 0;
        right: 0;
      }
      .Link {
        font-size: 1rem;
      }
    }
  }

  @media ${devices.laptop} {
    .NavContainer {
      padding: 0 3rem;
      .Logo {
        font-size: 2rem;
      }
      #linkGroup {
        width: 35%;
      }
      .Link {
        font-size: 1rem;
      }
      .carthan {
        margin-right: 2rem;
      }
      .cartNotificationIcon {
        right: 4.5rem;
      }
    }
  }
`;
export default NavbarStyle;
