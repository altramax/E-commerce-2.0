import UserProfileTemplate from "../Components/Templates/UserProfileTemplate/UserProfileTemplate";
import Cart from "../Components/Templates/CartTemplate/Cart";
import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";


const routes = [
  {
    elements: [
      {
        path: "/userProfilfe",
        component: Cart,
      },
    ],
  },
  
  // {
  //   elements: [
  //     {
  //       path: "/",
  //       component: HomePageTemplate,
  //     },
  //   ],
  // },
];

export default routes;
