import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";

import "./Header.css";
import Img from "../../../assets/Img/Img";
import { Link, useLocation } from "react-router-dom";
import LanguageDropdown from "../../Multilanguage/LanguageDropdown";
import GImage from "../../Layout/GImage/GImage";
import { getHeaderMenuList } from "../../../helpers/backend/index";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Svg from "../../../assets/svg/Svg";
import { t } from "i18next";
import HamburgerAuthMenu from "./HamburgerAuthMenu";
import LocationSearch from "./LocationSearch";
import { connect, useDispatch, useSelector } from "react-redux";
import { authUserProfile } from "../../../store/auth/profile/actions";
import { headerNavItems } from "../../../store/navitems/actions";

const Header = (props) => {
  const location = useLocation();
  const { users, onGetUsers } = props;
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    onGetUsers();
    setUserList(users);
    dispatch(headerNavItems());
  }, [users, onGetUsers]);

  let menuList = useSelector(
    (state) => state.navitems && state.navitems.navitems
  );

  return (
    <>
      <CookieConsent
        className="f_worksons_r"
        location="bottom"
        enableDeclineButton
        buttonText="Accept All Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#240b36" }}
        buttonStyle={{ background: "#ff385c", color: "#fff", fontSize: "13px" }}
        declineButtonStyle={{
          background: "transparent",
          color: "#fff",
          fontSize: "13px",
        }}
        declineButtonText={Svg.crossWhite}
        onDecline={() => {}}
        expires={150}
      >
        <p className="mb0 f14">{t("Cookie")}</p>
      </CookieConsent>
      {location.pathname === "/for-your-business" ? (
        ""
      ) : (
        <>
          <section className="pt-3 pb-3 bg_theme border-bottom">
            <Container>
              <Row className="align-items-center">
                <Col md="4">
                  <Link to="/">
                    <GImage src={Img.logo.default} alt="logo" />
                  </Link>
                </Col>
                <Col
                  md="8"
                  className="text-end d-flex justify-content-end align-items-center  header_top_menu text-uppercase f14 color_theme"
                >
                  <LocationSearch />
                  <div className="mr10">
                    <Link className="text_d_none" to="/for-your-business">
                      For Your Business
                    </Link>
                  </div>
                  <HamburgerAuthMenu />
                  <div>
                    <Link className="text_d_none" to="/login">
                      Login
                    </Link>
                    &nbsp; or &nbsp;
                    <Link className="text_d_none" to="/sign-up">
                      SignUp
                    </Link>
                  </div>
                  <div className="languege ml10">
                    <LanguageDropdown />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="pt-3 pb-3 bg_theme">
            <Container>
              <Row className="align-items-center">
                <Col md="12">
                  <nav role="navigation" className="primary-navigation">
                    <ul className="pl-0 mb-0">
                      <li>
                        <Link to="#">Home</Link>
                      </li>

                      {menuList &&
                        menuList.map((item, key) => (
                          <li key={key}>
                            <Link to="#">{item.name}</Link>
                            <ul className="dropdown">
                              {item.services &&
                                item.services.map((subitem, index) => (
                                  <li key={index}>
                                    <Link to="#">{subitem.name}</Link>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

Header.propTypes = {
  users: PropTypes.array,
  onGetUsers: PropTypes.func,
};

const mapStateToProps = ({ authInfo }) => ({
  users: authInfo.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onGetUsers: () => dispatch(authUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;
