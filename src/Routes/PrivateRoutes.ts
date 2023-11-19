import UserInformation from "../Components/Organism/UserInformation/UserInformation";
import Cart from "../Components/Templates/CartTemplate/Cart";
import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";


const routes = [
  {
    elements: [
      {
        path: "/",
        component: UserInformation,
      },
    ],
  },
  // {
  //   elements: [
  //     {
  //       path: "/",
  //       component: UserInformation,
  //     },
  //   ],
  // },  
];

export default routes;
