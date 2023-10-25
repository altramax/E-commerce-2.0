import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";
import MensWearTemplate from "../Components/Templates/MensWearTemplate/MenwearTemplate";
import WomenWearTemplate from "../Components/Templates/WomenWearTemplate/WomenWearTemplate";
import MarketPlaceTemplate from "../Components/Templates/MarketPlaceTemplate/MarketPlaceTemplate";
import Cart from "../Components/Templates/CartTemplate/Cart";
import SignInModal from "../Components/Organism/SignInModal/SignInModal";
import UserProfileTemplate from "../Components/Templates/UserProfileTemplate/UserProfileTemplate";

const PublicRoutes = [
  {
    elements: [{ path: "/", component: HomePageTemplate }],
  },
  {
    elements: [
      {
        path: "/menswear",
        component: MensWearTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/womenwear",
        component: WomenWearTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/marketplace",
        component: MarketPlaceTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/cart",
        component: Cart,
      },
    ],
  },
  {
    elements: [
        {
         path: "/userProfile",
         component: UserProfileTemplate,
         }
        ],
  },
];

export default PublicRoutes;
