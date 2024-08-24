import styled from "styled-components";
import { devices } from "../../Media Queries/Media";

const MarketPlaceTemplateStyle = styled.div`
  .category_margin {
    padding-top: 30px;
    // position: absolute;
    width: fit-content;
    background-color: #fff;
    z-index: 2;
  }

  .cartegory_height {
    padding-bottom: 70px;
  }

  @media ${devices.tablet} {
    .cartegory_height {
      min-height: 400px;
    }
  }
`;

export default MarketPlaceTemplateStyle;
