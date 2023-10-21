
import UserProfileTemplate from "../Components/Templates/UserProfile/UserProfileTemplate";
import Cart from "../Components/pages/Cart";
import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";

const routes = [
  {
    elements: [
      {
        path: "/userProfile",
        component: UserProfileTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/Cart",
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
