import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const FooterStyle = styled.div`


.FooterContainer {
    text-align: center;
    background-color: #20272F;
    color: #fff;
    padding: 3rem 0;
    .logo {
      font-size: 2rem;
      font-family: "Bruno Ace SC", cursive;
    }
    ul {
      width: 7rem;
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: auto;
      margin-bottom: 2rem;
    }
  
    p {
      padding-bottom: 1rem;
      margin: auto;
    }
    h3{
      margin: 1rem 1rem;
    }
  
    p:hover{
  
     text-decoration-color: #e70680;
      text-decoration: underline;
    }
    .payCardGroup{
      width: 12rem;
      display: flex;
      justify-content: space-around;
      margin: auto;
      padding-bottom: 2rem;
      // align-items: center;
      .payCard{
        width: 3rem;
      }
    } 
  }
  
  @media ${devices.tablet} {
    .FooterContainer {
      padding: 2rem 2rem 3rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: start;
      .logoContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .logo {
        padding-top: 0;
        margin-top: -0.5rem;
      }
      h3{
        margin-top: 0;
      }
    }
  }
  
  @media ${devices.laptop}{
    .FooterContainer{
      padding: 2rem 3rem;
    }
  }
  
`;
export default FooterStyle