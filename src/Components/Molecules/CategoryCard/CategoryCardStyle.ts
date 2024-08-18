import styled from "styled-components";

const CategoryCardStyle = styled.div`
  .category__card__container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .category__card__image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
      }
    }

    .category__card__image:hover {
      img {
        // opacity: 0.2
      }
      background-color: #D8D4FF;
    }

    p {
      margin-top: 10px;
      width: 100px;
      text-align: center;
    }
  }
`;

export default CategoryCardStyle;
