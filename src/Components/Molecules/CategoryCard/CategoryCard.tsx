import CategoryCardStyle from "./CategoryCardStyle";
import { useNavigate } from "react-router-dom";

type cardType = {
  image: string;
  category: string;
  name: string;
};

const CategoryCard = ({ image, category, name }: cardType) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/category?id=${category}`);
  };

  return (
    <CategoryCardStyle>
      <div className="category__card__container" onClick={handleNavigation}>
        <div className="category__card__image">
          <img src={`${image}`} alt="" />
        </div>
      <p>{name}</p>
      </div>
    </CategoryCardStyle>
  );
};

export default CategoryCard;
