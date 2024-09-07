import CategoryCardStyle from "./CategoryCardStyle";
import { useNavigate } from "react-router-dom";

type cardType = {
  image: string;
  name: string;
};

const CategoryCard = ({ image, name }: cardType) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/category?id=${name}`);
  };

  const param = decodeURIComponent(window.location.href.split("=")[1]);

  return (
    <CategoryCardStyle>
      <div
        className={`category__card__container ${
        param === name ? "active" : ""
        }`}
        onClick={handleNavigation}
      >
        <div className="category__card__image">
          <img src={`${image}`} alt="" />
        </div>
        <p>{name}</p>
      </div>
    </CategoryCardStyle>
  );
};

export default CategoryCard;
