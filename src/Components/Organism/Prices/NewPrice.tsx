import NewPriceStyle from "./NewPriceStyle";
import arrowDown from "../../assets/Icons/arrowDownLongLight.svg";

type propType = {
  price: number;
  discount: any;
};

export default function NewPrice({ price, discount }: propType) {
  const cost = Number(price);
  const dis = discount ? Number(discount) : "";
  const percentDis = dis !== "" ? (dis * 100) / cost : 0 ;
  const newPrice = dis !== "" ? cost - dis : cost;
  const newDis = percentDis.toFixed(0)

  return (
    <NewPriceStyle>
      <div className="flex">
        {dis !== "" && (
          <small className="dis">
            {newDis}%<img src={arrowDown} alt="" id="image" />
          </small>
        )}
        {newPrice && <h2>₦{newPrice.toLocaleString()}</h2>}
        {dis !== "" && <h5>₦{Number(price).toLocaleString()}</h5>}
      </div>
    </NewPriceStyle>
  );
}
