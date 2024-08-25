import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const SearchBarStyle = styled.div`
  .searchGroup {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    background-color: #f7f7f7;

    .wrapper {
      position: relative;
      width: 50%;
      div {
        position: absolute;
        right: 6px;
        top: 9px;
      }
      input {
        width: 100%;
        padding: 8px;
        border-radius: 10px;
        outline: none;
        font-size: 18px;
      }
    }
  }

  .search_results {
    position: absolute;
    bottom: 65px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 100%;

    p {
      padding: 10px;
      cursor: pointer;
    }
    p:hover {
      background-color: #d8d4ff;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  .hidden {
    display: none;
  }
  .visible {
    display: block;
  }

  @media ${devices.tablet} {
    .searchGroup {
      padding: 1rem 0 1rem 2rem;
    }
  }

  @media ${devices.smallLaptop} {
    .searchGroup {
        position: relative;
        max-width: 100%;
        padding: 0;

        .wrapper {
          width: 100%;
        }
      }

      
  .search_results {
  top: 45px;

  height: fit-content;

 
    }
  }
`;

export default SearchBarStyle;
