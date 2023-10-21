import PublicRouteTemplateStyle from "./PublicRouteTemplateStyle"
import Navbar from "../NavbarTemplate/NavbarTemplate"
import PublicRoutePath from "../../../Routes/PublicRoutePath"

const PublicRouteTemplate = () => {

  return (
    <PublicRouteTemplateStyle>
        <Navbar/>
        <PublicRoutePath/>
    </PublicRouteTemplateStyle>
  )
}

export default PublicRouteTemplate