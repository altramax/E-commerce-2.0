import { useRef, useEffect, useState } from 'react';

const useHorizontalScroll = () => {
  const scrollContainer = useRef<any>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollContainer.current) {
        scrollContainer.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return {
    scrollContainer,
    showLeftButton,
    showRightButton,
    scrollLeft,
    scrollRight,
  };
};

export default useHorizontalScroll;
