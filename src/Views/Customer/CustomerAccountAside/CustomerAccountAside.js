import React from "react";
import { NavLink } from "react-router-dom";
import Svg from "../../../Assets/Svg/Svg";
import "./CustomerAccountAside.css";
const CustomerAccountAside = () => {
  return (
    <>
      <aside className="sticky mb30 bgGrey pt30 pb30 width75 mobWidth100 tabWidth100 tabLgWidth100">
        <div className="noUl taskAside pl30 pr30">
          <NavLink
            to="/customer/profile/userprofile"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active "
          >
            User Profile
          </NavLink>

          <NavLink
            to="/customer/profile/billing"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Billing Details
          </NavLink>

          <NavLink
            to="/customer/profile/favourite"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Favourite Provider
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            My Tasks
          </NavLink>

          <NavLink
            to="/customer/profile/changepassword"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Change Password
          </NavLink>
          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Switch To provider
          </NavLink>
          <NavLink
            to="/customer/profile/notifications"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Notifications
          </NavLink>

          <NavLink
            to="/customer/profile/transactions"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Transactions
          </NavLink>
          <NavLink
            to="/customer/profile/referral"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Referral Bonus
          </NavLink>

          <div className="customer-aside-img text-center pt18 pb18">
            <div className="mb7">{Svg.addpeople}</div>
            <span className="fs16 colorWhite">Refer Friends & Earn</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CustomerAccountAside;
