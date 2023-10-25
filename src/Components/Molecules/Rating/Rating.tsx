import { Fragment } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

type description={
   compare : number
}
const Rating = (props: description) => {
  return (
    <Fragment>
      {props.compare < 4 ? (
        <div>
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
          <BsStarHalf color="orange" size={25} />
          <BsStar color="orange" size={25} />
        </div>
      ) : (
        <div>
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
          <BsStarFill color="orange" size={25} />
        </div>
      )}
    </Fragment>
  );
};

export default Rating;
