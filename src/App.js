import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RouterList from "./Helpers/Routes/RoutesList";
// import Pages from "./Views";
import "./Helpers/Global/GCss";
import "./Assets/Themes/Themes.css";
import AlertModal from "./Components/AlertModal/AlertModal";

import Notification from "react-notify-toast";
import OTPModal from "./Components/OTPModal/OTPModal";
import FormModal from "./Components/FormModal/FormModal";
import AlertModal02 from "./Components/AlertModal02/AlertModal02";
import LoadingModal from "./Components/LoadingModal/LoadingModal";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Assets/Img/Img"
function App() {
  return (
    <>

      <Notification />
      <OTPModal />
      <LoadingModal />
      <AlertModal02/>
      <AlertModal />
      <FormModal />
      <div className="wrapperApp">
        <Switch>
          {RouterList.map((route, ind) => {
            return (

              <Route
                exact={ind === 0 ? true : false}
                key={ind}
                path={route.path}
              >
                {route.element}
              </Route>
            );
          })}
        </Switch>
      </div>
    </>
  );
}

export default App;
