import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Img from "../../Assets/Img/Img";
// import GButton from "../GComponents/GButton";
import GButton from "../GComponents/GButton";
import GIconInput from "../GComponents/GIconInput";
import Svg from "../../Assets/Svg/Svg";
import { useSelector,useDispatch  } from "react-redux";

const Header = () => {
  const dispatch=useDispatch();
  useEffect(() => {
   // dispatch(getAboutCompAction());
  }, [dispatch]);
 
  const loggedInData = useSelector((state) => {
    return (
      state &&
      state.loggedInData
    );
  });

  

  console.log("header loggedData",loggedInData);
 
  const [data, setdata] = useState(
    loggedInData && loggedInData
  );
  useEffect(() => {
    setdata(loggedInData && loggedInData);
  }, [loggedInData]);
  return (
    <div>
      <header className="siteHeader bgWhite pt15 pb15 topUp">
        <Container>
          <Row className="align-items-center">
            <WebRightSideHeaderContentWithoutLogin />
            <Link to="/logout">Logout</Link>
            {/* <WebRightSideHeaderContentWithLogin /> */}
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;

const WebRightSideHeaderContentWithoutLogin = () => {
  return (
    <>
      <Col lg={6} xs={6}>
        <div className="d-flex align-items-center flex-wrap">
          <div className="logo mr20">
            <Link to="/">
              <img src={Img.logo.default} alt="" />
            </Link>
          </div>
          {/* Custom Added  Start*/}
          <div className="input-width dNoneMd dNoneXs dNoneLg">
            <GIconInput
            className="pb0"
            paddingBottom="0px"
              placeholder="Search Service provider & service you need"
              iconLeft={Svg.search}
            ></GIconInput>
          </div>
          {/* Custom Added  End*/}
        </div>
      </Col>
      <Col lg={6} xs={6} className="d-flex justify-content-end">
        <ul className="noUl mb0 d-flex align-items-center flex-wrap dNoneXl">
          <li className="position-relative">
            <Link to="#" className="f16 colorBlack mr5">
              <span>{Svg.notification}</span>
              <div className="active-notification radius100 bgRed"></div>
            </Link>
          </li>
        </ul>
        <button
          className="btnBlank dNoneXl"
          onClick={(e) => {
            // AlertModal.show(<MobileMenu />, "", () => {}, "xl", true);
          }}
        >
          {Svg.bar}
        </button>

        <div className="d-flex align-items-center flex-wrap justify-content-end dNoneMd dNoneXs dNoneLg">
          <ul className="noUl mb0 d-flex align-items-center flex-wrap ">
            <li>
              <Link to="#" className="f16 colorBlack mr20 fLight">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/provider/signup"
                className="f16 colorBlack mr20 fLight"
              >
                Post a task
              </Link>
            </li>
            <li>
              <Link to="/" className="f16 colorBlack mr20 fLight">
                Login/Signup
              </Link>
            </li>
          </ul>

          <GButton>
            <span className="d-none d-lg-block">Become a Provider</span>
          </GButton>
        </div>
      </Col>
    </>
  );
};

const WebRightSideHeaderContentWithLogin = () => {
  return (
    <>
      <Col lg={6} xs={6}>
        <div className="d-flex align-items-center flex-wrap">
          <div className="logo mr20">
            <Link to="/">
              <img src={Img.logo} alt="" />
            </Link>
          </div>
          {/* Custom Added  Start*/}
          <div className="input-width dNoneMd dNoneXs dNoneLg">
            <GIconInput
             className="pb0"
             text="Lorem"
              paddingBottom="0px"
              placeholder="Search Service provider & service you need"
              iconLeft={Svg}
            ></GIconInput>
          </div>
          {/* Custom Added  End*/}
          <ul className="noUl mb0 d-flex align-items-center flex-wrap liSpacer dNoneMd dNoneXs dNoneLg"></ul>
        </div>
      </Col>

      <Col lg={6} xs={6} className="d-flex justify-content-end">
        <ul className="noUl mb0 d-flex align-items-center flex-wrap dNoneXl">
          <li className="mr20">
            <span>{Svg.Search}</span>
          </li>
          <li>
            <Link to="#" className="f16 colorBlack mr20">
              {Svg.notification}
            </Link>
          </li>
        </ul>

        <button
          className="btnBlank dNoneXl"
          onClick={(e) => {
            // AlertModal.show(<MobileMenu />, "", () => {}, "xl", true);
          }}
        >
          {Svg.bar}
        </button>

        {/* Customer Navigation */}
        {/* <CustomerNav /> */}
        {/* Provider Navigation */}
        <ProviderNav />
      </Col>
    </>
  );
};

const CustomerNav = () => {
  return (
    <div className="d-flex align-items-center flex-wrap justify-content-end dNoneMd dNoneXs dNoneLg">
      <ul className="noUl mb0 d-flex align-items-center flex-wrap ">
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            Services
          </Link>
        </li>
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            Post a task
          </Link>
        </li>

        <li>
          <Link to="/customer/dashboard" className="f16 colorBlack mr20">
            My Tasks
          </Link>
        </li>
        <li>
          <span className="mr20">{Svg.notification}</span>
        </li>
      </ul>
      <UncontrolledDropdown className="noBgonDropDown">
        <DropdownToggle>
          <div className="d-flex align-items-center">
            <div className="header_profile_img mr10">
              <img className="radius100 w-100" alt="" src={Img.group7359} />
            </div>
            <div className="colorBlack fw500 fs16">
              {/* {Auth.getLoginAuth()[0].name} */}
              Praveen Solanki
              <span className="ml5">{Svg.downArrowSmall}</span>
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className="radius4 shadow noBorder">
          <DropdownItem>
            <ul className="noBg noUl mb0">
              <li className="mb10">
                <Link
                  to="/customer/update-account-profile"
                  className="fs15 d-block w-100 colorPara"
                >
                  My Profile
                </Link>
              </li>
              <li className="mb10">
                <Link
                  to="#"
                  // onClick={(e) => switchToProvder()}
                  className="fs15 d-block w-100 colorPara"
                >
                  Switch to Provider
                </Link>
              </li>
              <li>
                <Link to="/logout" className="fs15 d-block w-100 colorPara">
                  Logout
                </Link>
              </li>
            </ul>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

const ProviderNav = () => {
  return (
    <div className="d-flex align-items-center flex-wrap justify-content-end dNoneMd dNoneXs dNoneLg">
      <ul className="noUl mb0 d-flex align-items-center flex-wrap ">
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            Services
          </Link>
        </li>
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            Post a Task
          </Link>
        </li>
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            My Tasks
          </Link>
        </li>
        <li>
          <Link to="#" className="f16 colorBlack mr20">
            <span>{Svg.notification}</span>
          </Link>
        </li>
      </ul>

      <UncontrolledDropdown className="noBgonDropDown">
        <DropdownToggle>
          <div className="d-flex align-items-center">
            <div className="header_profile_img mr10">
              <img className="radius100 w-100" alt="" src={Img.group7359} />
            </div>
            <div className="colorBlack fw500 fs16">
              {/* {Auth.getLoginAuth()[0].name} */}
              Praveen Solanki
              <span className="ml5">{Svg.downArrowSmall}</span>
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className="radius4 shadow noBorder">
          <DropdownItem>
            <ul className="noBg noUl mb0">
              <li className="mb10">
                <Link to="" className="fs15 d-block w-100 colorPara">
                  My Profile
                </Link>
              </li>
              <li className="mb10">
                <Link
                  to="#"
                  // onClick={(e) => switchToCustomer()}
                  className="fs15 d-block w-100 colorPara"
                >
                  Switch to Customer
                </Link>
              </li>
              <li>
                <Link to="" className="fs15 d-block w-100 colorPara">
                  Logout
                </Link>
              </li>
            </ul>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};
