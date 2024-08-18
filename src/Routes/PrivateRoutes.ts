import AccountInformation from "../Components/Organism/AccountInformation/AccountInformation";
// import Cart from "../Components/Templates/CartTemplate/Cart";
// import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";
import Orders from "../Components/Organism/Orders/Orders";
import ContactUs from "../Components/Organism/Contactus/ContactUs";
import CheckoutTemplate from "../Components/Templates/CheckoutTemplate/CheckoutTemplate";

const routes = [
  {
    elements: [
      {
        path: "/",
        component: AccountInformation,
      },
    ],
  },
  {
    elements: [
      {
        path: "/orders",
        component: Orders,
      },
    ],
  },
  {
    elements: [
      {
        path: "/contactus",
        component: ContactUs,
      },
    ],
  },
  // {
  //   elements: [
  //     {
  //       path: "/checkout",
  //       component: CheckoutTemplate,
  //     },
  //   ],
  // },
];

export default routes;
