import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const NewPriceStyle = styled.div`
  .dis {
    background-color: #000;
    border-radius: 10px;
    width: fit-content;
    padding: 3px 7px;
    color: #fff;
    font-size: 10px;
    align-self: end;
    #image {
      width: 10px;
      height: 11px;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: center;
    gap: 10px;
    letter-spacing: 2px;
    height: 73px;
    h5 {
      text-decoration: line-through;
      text-decoration-thickness: 1.5px;
      color: #808080;
      margin-top: -3px;
      font-size: 10px;
    }
  }

  h2 {
    font-size: 18px;
      align-self: end;
  }

  @media (min-width: 768px) {
    .dis {
      // margin-bottom: 15px;
    }

    .flex {
      // display: flex;
      // flex-direction: row;
      // width: fit-content;
      // align-items: end;
      // justify-content: start;
      // gap: 10px;
      // margin: 10px 15px 15px 0;
      // letter-spacing: 2px;
      h5 {
        font-size: 13px;
        // margin-left: auto;
      }
      h2 {
        font-size: 20px;
        margin-top: -3px;
          margin-left: auto;
      }
    }
  }
`;

export default NewPriceStyle;
