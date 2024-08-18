import React, { useState, useEffect, useRef } from "react";

import HeaderStyle from "./HeaderStyle";

const Header = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const imgArr = [
    "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723679021/shirt-mockup-concept-with-plain-clothing_acphex.jpg",
    "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723680055/attractive-young-stylish-woman-celebrating-new-year-drinking-champagne-holding-air-balloons-golden-confetti-flying-smiling-happy-white-isolated-wearing-party-dress_llfngn.jpg",
    "https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723938049/12624_aygyhi.jpg",
  ];

  const imgArrWithLoop = [...imgArr, imgArr[0]];

  const headerText = [
    "THE BEST DISCOUNTS UP TO 50% OFF!!!",
    "OUR LOW PRICES WILL MAKE YOU CELEBRATE! ",
    "WE OFFER A WIDE RANGE OF THE BEST ACCESSORIES",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentIndex === imgArr.length) {
      timeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Duration of the slide transition
    }
  }, [currentIndex, imgArr.length]);

  const handleButtonClick = (index: number) => {
    clearInterval(timeoutRef.current as number);
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <HeaderStyle>
        <div className="header__container">
      <div className="carousel-container">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {imgArrWithLoop.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Slide ${index}`}
              className="carousel-img"
            />
          ))}
        </div>
        <div className="carousel-buttons">
          {imgArr.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`carousel-button ${
                currentIndex === index ? "active" : ""
              }`}
            ></button>
          ))}
        </div>
    
      </div>
      <div>
        <h4 className="headerText__one">#Your Choice Store</h4>
        {headerText.map((txt, i) => {
          return (
            <h2
              key={i}
              className={`headerText ${
                currentIndex === i ? "visible" : "hidden"
              }`}
            >
              {txt}
            </h2>
          );
        })}
        </div>

        </div>
    </HeaderStyle>
  );
};

export default Header;
