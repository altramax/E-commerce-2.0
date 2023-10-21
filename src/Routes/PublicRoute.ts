import HomePageTemplate from "../Components/Templates/HomePageTemplate/HomePageTemplate";
import MensWearTemplate from "../Components/Templates/MensWearTemplate/MenwearTemplate";
import WomenWearTemplate from "../Components/Templates/WomenWearTemplate/WomenWearTemplate";
import MarketPlaceTemplate from "../Components/Templates/MarketPlaceTemplate/MarketPlaceTemplate";

const PublicRoutes = [
    {
        elements:[

            {  path: "/",
              component: HomePageTemplate,
            }
        ]
        
    },{
        elements:[
            {
                path:"/menswear",
                component: MensWearTemplate
            }
        ]
    },{
        elements:[
            {
                path:"/womenwear",
                component: WomenWearTemplate
            }
        ]
    },
    {
        elements:[
            {
                path:"/marketplace",
                component: MarketPlaceTemplate
            }
        ]
    },
]

export default PublicRoutes;