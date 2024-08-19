import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const MarketPlaceTemplateStyle = styled.div`
  .category_margin {
    margin-top: 30px;
    position : fixed;
    width: 100%;
    background-color: #fff;
    z-index: 2;
  }

  .product{
   text-align: center;
   padding: 250px 0 30px 0 ;
  }

  @media ${devices.tablet}{

    .cartegory_height{
    min-height: 400px;
    }
  
  }
`;

export default MarketPlaceTemplateStyle;
