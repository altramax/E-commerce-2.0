import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const CategoryGroupStyle = styled.div`
  display: flex;
  justify-content: center;

  .category__group__container::-webkit-scrollbar {
    display: none;
  }

  .category__group__container {
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 20px 20px 20px 0;
    margin: 40px;
    overflow: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    width: fit-content;
    scroll-behaviour: smooth;
  }

  .direction {
    display: none;
    position: absolute;
    width: fit-content;
    border: 1px solid grey;
    border-radius: 50%;
    padding: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .rightscroll {
    right: 16px;
  }
  .leftscroll {
    left: 16px;
  }

  .category__group__container:hover {
    .direction {
      display: flex;
    }
  }

  @media ${devices.smallLaptop} {
    .category__group__container:hover {
      .direction {
        display: none;
      }
    }
  }
`;

export default CategoryGroupStyle;
