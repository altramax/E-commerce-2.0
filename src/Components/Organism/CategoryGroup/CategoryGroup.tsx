import CategoryGroupStyle from "./CategoryGroupStyle";
import CategoryCard from "../../Molecules/CategoryCard/CategoryCard";
import useHorizontalScroll from "../../../hooks/UseScrollHorizontally";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const CategoryGroup = () => {
  const {
    scrollContainer,
    showLeftButton,
    showRightButton,
    scrollLeft,
    scrollRight,
  } = useHorizontalScroll();


  const dataObj = [
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723729723/shirt_16797148_dpvqjx.png",
      category: "Men",
      name: "Men",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723730085/shopping_15090193_yg6ndl.png",
      category: "Women",
      name: "Women",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723730347/shoes_11760018_lkphid.png",
      category: "Shoes",
      name: "Shoes",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723730347/high-heels_3295936_hy9ddw.png",
      category: "Heels",
      name: "Heels",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723729722/sunglasses_16517162_ekrw9x.png",
      category: "Glasses",
      name: "Glasses",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723729722/hand-watch_3549070_yjdg0w.png",
      category: "Watches",
      name: "Watches",
    },
    {
      image:
        "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723729723/briefcase_7316755_wjd6my.png",
      category: "Bags",
      name: "Bags",
    },
    {
        image:"https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723744648/button_13801178_qwlgae.png",
        category: "allProducts",
        name: "All Category"
    }
  ];

  return (
    <CategoryGroupStyle>
      <div className="category__group__container" ref={scrollContainer}>
        
      {showLeftButton && (
          <div className="leftscroll direction" onClick={scrollLeft}>
            <SlArrowLeft size="20px" />
          </div>
        )}
        {dataObj.map((data, i) => {
          return <CategoryCard {...data} key={i}/>;
        })}
            {showRightButton && (
          <div className="rightscroll direction" onClick={scrollRight}>
            <SlArrowRight size="20px" />
          </div>
        )}
      </div>
    </CategoryGroupStyle>
  );
};

export default CategoryGroup;
