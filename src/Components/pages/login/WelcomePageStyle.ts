import styled from "styled-components";

const WelcomePageStyle = styled.div`
background-color: #fff;
 position: absolute;
 top: 0;
 left: 0;
  .welcomepage__container {
    display: flex;
    justify-content: start;
    align-items: start;

    .cover{
        position: fixed;
        width: 50vw;
        height: 100vh;
        top: 0;
        transition: left 0.5s linear;
    }
    
    .--signin{
        left: 0;

    }
    .--signup{
        left: 50%;
    }
    
  }
`;
export default WelcomePageStyle;
