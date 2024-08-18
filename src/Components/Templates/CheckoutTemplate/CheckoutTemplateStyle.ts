import styled from "styled-components";

const CheckoutTemplateStyle = styled.div`
  .checkout__container {
    padding: 40px 20px;
    text-align: center;
    margin-top: 64px;
    // color: #D3D3D3;
  }

  //   #D3D3D3

  .cancle {
    border: 1px solid #000;
    width: fit-content;
    padding: 10px;
  }


  .progress__bar__container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    gap: 10px;
    margin-top: 20px;
  }
  .progress__bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .line {
   width: 10%;
   height:2px;
   background-color: #d3d3d3;
  }

  .progress__bar__dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 8px;
    }
  }
        .fill{
     background-color: red;
    }

  @media (min-width: 768px) {
  }
`;

export default CheckoutTemplateStyle;
