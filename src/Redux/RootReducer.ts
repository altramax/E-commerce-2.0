import { combineReducers } from "@reduxjs/toolkit";
import  UserAuthSlice  from "./AuthSlice";
import  ProductsSlice  from "./ProductsSlice";
import AlertSlice from "./AlertSlice";
import cart from "./CartSlice"

 const rootReducer:any = combineReducers({
   user : UserAuthSlice,
   products :  ProductsSlice,
   alert : AlertSlice,
   cart: cart
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;


// import AddToCartStyle from "./AddToCartStyle";
// import { useState, useEffect } from "react";
// import { GiShoppingCart } from "react-icons/gi";
// import axios from "axios";
// import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
// import { addToCart, getCartItem, updateItem } from "../../../Redux/CartSlice";
// import { successful } from "../../../Redux/AlertSlice";

// export interface dataStructure {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   rating: { rate: number };
//   id: number;
// }

// export interface postStructure {
//   name: string;
//   img: string;
//   price: number;
//   quantity: number;
//   rating: number;
//   id: number;
// }

// const AddToCart = (props: dataStructure): JSX.Element => {
//   const [count, setCount] = useState<number>(0);
//   const [message, setMessage] = useState<string>("");
//   const dispatch = useAppDispatch();
//   const items = useAppSelector((state) => state.cart);

//   const addCount = (data: any) => {
//     let count = 0;
//     items.cartItems.map((res: any) => {
//       if (res.id === data.id) {
//         count = res.quantity + count;
//       }
//     });
//     return count;
//   };

//   const postHandler = async (data: dataStructure) => {

// // await axios.post(`http://localhost:9000/cart`)



//     if (items.cartIds.includes(data.id) && count > 0) {
//       const update = {
//         id: data.id,
//         quantity: addCount(count),
//       };
//       await dispatch(updateItem(update));
//       setMessage("update");
//       setCount(0);
//       setTimeout(() => {
//         setMessage("");
//       }, 2000);
//     } else if (!items.cartIds.includes(data.id) && count > 0) {
//       const post = {
//         id: props.id,
//         name: props.title,
//         img: props.image,
//         price: props.price,
//         quantity: count,
//         rating: props.rating.rate,
//       };
//       console.log(post);
//       dispatch(addToCart(post));
//       setMessage("add");
//       setCount(0);
//       setTimeout(() => {
//         setMessage("");
//       }, 2000);
//     } else if (count === 0) {
//       setMessage("failed");
//       setTimeout(() => {
//         setMessage("");
//       }, 2000);
//     }
//   };

//   const increaseHandler = (info: dataStructure) => {
//     setCount(count + 1);
//   };

//   const decreaseHandler = (info: dataStructure) => {
//     if (count >= 1) {
//       setCount(count - 1);
//     }
//   };

//   const renderHandlerMessage = () => {
//     if (message === "update") {
//      return <p className="errorMessage green">Product Updated Successfully</p>;
//     } else if (message === "add") {
//       return <p className="errorMessage green">Product Added Successfully</p>;
//     }
//     else if(message === "failed") {
//     return  <p className="errorMessage">Select Quantity of Product</p>;
//     }
//   };

//   return (
//     <AddToCartStyle>
//       <>
//         {renderHandlerMessage()}
//         <div className="addToCartGroup">
//           <div
//             className="addToCartButton"
//             onClick={() => {
//               postHandler(props);
//             }}
//           >
//             <span> Add To Cart</span>
//             <GiShoppingCart size={20} />
//           </div>

//           <div className="countGroup">
//             <span
//               onClick={() => {
//                 decreaseHandler(props);
//               }}
//               className="countButton"
//             >
//               -
//             </span>
//             <span className="counter">{count}</span>
//             <span
//               onClick={() => {
//                 increaseHandler(props);
//               }}
//               className="countButton"
//             >
//               +
//             </span>
//           </div>
//         </div>
//       </>
//     </AddToCartStyle>
//   );
// };

// export default AddToCart;
