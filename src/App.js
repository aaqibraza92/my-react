import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RouterList from "./Helpers/Routes/RoutesList";
// import Pages from "./Views";
import "./Helpers/Global/GCss";

function App() {
  return (
    <>
      <div className="wrapperApp">
        <Routes>
          {RouterList &&
            RouterList.map((elem, ind) => {
              return (
                <Route key={ind} path={elem.path} element={elem.element} />
              );
            })}
        </Routes>
      </div>
    </>
  );
}

export default App;
