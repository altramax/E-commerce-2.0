import { Fragment, useState, useEffect } from "react";

type propType = {
  value: number;
};

export default function NewPrice(props: propType) {
  const [currentprice, setCurrentPrice] = useState<number>(0);

  useEffect(() => {
    if (props.value > 100 && props.value < 200) {
      setCurrentPrice(props.value - props.value * (15 / 100));
    } else if (props.value > 200) {
      setCurrentPrice(props.value - props.value * (20 / 100));
    } else {
      setCurrentPrice(props.value - props.value * (10 / 100));
    }
  }, []);
  return <Fragment>{currentprice.toFixed(2)}</Fragment>;
}
