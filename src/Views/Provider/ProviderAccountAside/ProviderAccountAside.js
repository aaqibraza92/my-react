import React from "react";
import { NavLink } from "react-router-dom";

const ProviderAccountAside = () => {
  return (
    <>
      <aside className="sticky mb30 bgGrey pt30 pb30 width75 mobWidth100 tabWidth100 tabLgWidth100">
        <div className="noUl taskAside pl30 pr30">
          <div className="colorPara fs14 mb15 bBottom">PROVIDER PROFILE</div>

          <NavLink
            to="/provider/profile/busniess-profile"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Business Profile
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            My Services
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Account Setting
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Membership Plan
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Payment & Billing Details
          </NavLink>

          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Transactions
          </NavLink>

          <div className="colorPara fs14 mb15 bBottom">ACCOUNT PROFILE</div>

          <NavLink
            to="/provider/profile/userprofile"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Edit Profile
          </NavLink>

          <NavLink
            to="/provider/profile/change-password"
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
            Notifications
          </NavLink>
          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Referral Bonus
          </NavLink>

          <NavLink
            to="/logout"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Log out
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default ProviderAccountAside;
