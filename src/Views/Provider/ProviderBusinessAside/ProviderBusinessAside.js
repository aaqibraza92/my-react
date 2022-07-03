import React from "react";
import { NavLink } from "react-router-dom";
// import "./ProviderBusinessAside.css";

const ProviderBusinessAside = () => {
  return (
    <>
      <aside className="sticky mb30 bgGrey pt30 pb30 width75 mobWidth100">
        <div className="noUl taskAside pl30 pr30">
          <NavLink
            to="/provider/business-detail"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active "
          >
            Business Detail
          </NavLink>

          <NavLink
            to="/provider/service-detail"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Description
          </NavLink>

          <NavLink
            to="/provider/provider-location"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Location
          </NavLink>

          <NavLink
            to="/provider/verified-badge"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Verified badge
          </NavLink>

          <NavLink
            to="/provider/media"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Upload Images
          </NavLink>
          <NavLink
            to="/provider/request-reviews"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Review
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default ProviderBusinessAside;
