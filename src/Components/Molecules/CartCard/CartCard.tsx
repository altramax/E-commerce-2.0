import CartCardStyles from "./CartCardStyles";
import { getStructure } from "../../Organism/CartManager/CartManager";
import NewPrice from "../../Organism/Prices/NewPrice";
import CartItemCounter from "../../Organism/CartItemCounter/CartItemCounter";

const CartCard = (item: any) => {
  const productImageHandler = (images: any) => {
    let img = images?.find((image: any) => {
      if (image.url !== "") {
        return image.url;
      }
    })?.url;
    return img !== undefined ? img : "";
  };

  return (
    <CartCardStyles>
      <div key={item.id} className="CartCard">
        <div className="cartCardFlex">
          <div className="img__container">
            <img src={productImageHandler(item.images)} alt="Product Image" />
          </div>
          <div className="cart__inner__container__sub">
            <div className="cart__name__price">
              {/* <h4>{item.name.slice(0, 36)}</h4> */}

              <NewPrice price={item.price} discount={item.discount} />
            </div>
            <div className="cart__count__container">
              <CartItemCounter productId={item.id} />
            </div>
          </div>
        </div>
      </div>
    </CartCardStyles>
  );
};

export default CartCard;
