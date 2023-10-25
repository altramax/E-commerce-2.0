import PublicRouteTemplateStyle from "./PublicRouteTemplateStyle"
import Navbar from "../NavbarTemplate/NavbarTemplate"
import PublicRoutePath from "../../../Routes/PublicRoutePath"
import PrivateRouthPath from "../../../Routes/PrivateRoutePath"

const PublicRouteTemplate = () => {

  return (
    <PublicRouteTemplateStyle>
        <Navbar/>
        <PublicRoutePath/>
        <PrivateRouthPath/>
    </PublicRouteTemplateStyle>
  )
}

export default PublicRouteTemplate