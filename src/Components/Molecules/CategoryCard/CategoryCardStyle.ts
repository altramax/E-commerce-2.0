import styled from "styled-components";

const CategoryCardStyle = styled.div`
  .category__card__container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, background-color 0.3s ease;

    .category__card__image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s ease;

      img {
        width: 40px;
        transition: opacity 0.3s ease;
      }
    }

    .category__card__image:hover {
      background-color: #d8d4ff;
    }

    p {
      margin-top: 10px;
      width: 100px;
      text-align: center;
    }
  }

  .category__card__container:hover {
    transform: scale(1.1); /* Smooth scaling effect */
  }

  /* Adding a slight pop effect on hover with a keyframe animation */
  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.1);
    }
  }

  .category__card__container:hover {
    animation: pop 0.3s ease forwards;
  }

  .active {
    // background-color: #d8d4ff;
    transform: scale(1.1);
    .category__card__image {
      background-color: #d8d4ff;
    }
  }
`;

export default CategoryCardStyle;
