import styled from "styled-components";

const CategoryGroupStyle = styled.div`
  display: flex;
  justify-content: center;
  

  .category__group__container::-webkit-scrollbar {
    display: none;
  }

  .category__group__container {
   -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 20px;
    margin: 40px 0 40px 0;
    overflow: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 40px;
    width: fit-content;
  }
`;

export default CategoryGroupStyle;
