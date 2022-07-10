import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RouterList from "./Helpers/Routes/RoutesList";
// import Pages from "./Views";
import "./Helpers/Global/GCss";

function App() {
  return (
    <>
      <div className="wrapperApp">
        <Switch>
          {RouterList.map((route, ind) => {
            return (
              <Route
                exact={ind === 0 ? true : false}
                key={ind}
                path={route.path}
              >
                {
                  route.element
                }
              </Route>
            );
          })}
        </Switch>

      </div>
    </>
  );
}

export default App;
