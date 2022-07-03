/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import AuthHelper from "../../Helpers/Auth/AuthHelper";
import SideBarProfileCard from "./AdminRV/ProfileCard/SidebarProfileCard";
import * as Icon from "react-bootstrap-icons";
import Admin from "./AdminRV/Admin";
import Svg from "../../Assets/Svg/Svg";
import Testpage from "./TestPage";
import HomePage from "./HomePage/HomePage";
import CategoriesPage from "./Categories/CategoriesPage";

export default function Dashboard() {
  const history = useHistory();
  let { path, url } = useRouteMatch();
  useEffect(() => {
    if (!AuthHelper.getAdminToken()) {
      history.push("/login");
    }
  }, []);
  let profilecard = new SideBarProfileCard(
    "Mr Ravi Verma",
    "webprolix@gmail.com",
    "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
  );
  let items = [
    {
      id: 1,
      icon: <Icon.House />,
      title: "Dashboard",
      to: "/admin/king/dashboard",
    },
    {
      id: 2,
      icon: <Icon.ListStars />,
      title: "Categories",
      to: `${url}/categories`,
    },
    {
      id: 3,
      icon: <Icon.QuestionCircle />,
      title: "Questions",
      to: `${url}/questions`,
    },
    {
      id: 2,
      icon: <Icon.ListNested />,
      title: "SubCategories",
      to: `${url}/subcategories`,
    },
    {
      id: 3,
      icon: <Icon.Person />,
      title: "Customers",
      to: `${url}/customers`,
    },
    {
      id: 4,
      icon: <Icon.ShopWindow />,
      title: "Providers",
      to: `${url}/providers`,
    },
    {
      id: 5,
      icon: <Icon.CurrencyDollar />,
      title: "Transactions",
      to: `${url}/transactions`,
    },
    { id: 9, icon: <Icon.Nut />, title: "Settings", to: "#" },
    {
      id: 10,
      title: "Contact Info",
      to: `${url}/update-contactinfo`,
      isnested: true,
      itemsfor: 9,
    },
    {
      id: 11,
      title: "Change Password",
      to: `${url}/change-password`,
      isnested: true,
      itemsfor: 9,
    },
  ];
  return (
    <div className="admin_wrapper">
      <Admin logo={Svg.locationPinGrey} profileCard={profilecard} Items={items}>
        <Switch>
          <Route exact path={path}>
            <HomePage />
          </Route>
          <Route path={`${path}/categories`}>
            <CategoriesPage />
          </Route>
        </Switch>
      </Admin>
    </div>
  );
}
