/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import Img from "../../../../src/Assets/Img/Img";
import Svg from "../../../../src/Assets/Svg/Svg";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import ProviderListMyServicesAside from "./ProviderListMyServicesAside";
import GButton from "../../../Components/GComponents/GButton";
import "./ProviderListMyServices.css";
import Select from "react-select";

const ProviderListMyServices = (props) => {
  const [requestType, setrequestType] = useState(1);

  return (
    <>
      <div className="tabbingSection bgLightOrange mb20 bgWhite bTop pt5 pb5 shadow">
        <Container>
          <Row className="align-items-center gy-4 mobColomnReverse">
            <Col lg={6} xl={6}>
              <div className="d-flex align-items-center ">
                <span
                  className={`${
                    requestType === 1 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pr10`}
                  onClick={(e) => setrequestType(1)}
                >
                  Broadcasted Requests
                </span>
                <span
                  className={`${
                    requestType === 2 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10`}
                  onClick={(e) => setrequestType(2)}
                >
                  Requested Tasks
                </span>
                <span
                  className={`${
                    requestType === 3 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10`}
                  onClick={(e) => setrequestType(3)}
                >
                  Assigned Tasks
                </span>
                <span
                  className={`${
                    requestType === 4 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10`}
                  onClick={(e) => setrequestType(4)}
                >
                  Past Tasks
                </span>
              </div>
            </Col>

            <Col lg={6} xl={6}>
              <div className="d-flex align-items-center flex-wrap justify-content-end ptmobb mobJustifyContentBetween">
                <div className="w-50 mr15">
                  <Select
                    label="Country"
                    className="w-100 themeSelect "
                    classNamePrefix="themeSelect"
                  />
                </div>
                <div className="ref">
                  <GButton
                    backgroundColor="#47C085"
                    pt="10px"
                    pb="10px"
                    pl="15px"
                    pr="15px"
                  >
                    {Svg.refresh} <span className="ml5">Refresh</span>
                  </GButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="bgGrey pt10 pb25">
        <Container>
          {/* {showProgress && (
          <div className="pageBody">
            <LoadinMsg message="Loading new leads.." />
          </div>
        )} */}
          <Row>
            <Col lg={3} xl={3} xxl={3}>
              <button
                onClick={() =>
                  AlertModal.show(
                    <ProviderListMyServicesAside />,
                    "",
                    () => {},
                    "fullscreen"
                  )
                }
                className="dNoneXl dNoneLg btnTheme w-100 d-flex align-items-center flex-wrap justify-content-between mb15"
              >
                <span className=" fs16">Filter</span>
                <span className="barColorWhite">{Svg.bar}</span>
              </button>
              <div className="sticky dNoneMd dNoneXs sidebarHeight mb60">
                <ProviderListMyServicesAside />
              </div>
            </Col>

            <Col lg={9} xl={9} xxl={9}>
              {requestType === 1 && <ListingLeads />}
              {requestType === 2 && <div>2</div>}
              {requestType === 3 && <div>3</div>}
              {requestType === 4 && <div>4</div>}
              {/* <CmnPagination number={1} totalPage={18} /> */}
            </Col>
          </Row>

          {/* <div className="pageBody colorPara w-100 fs14 text-center">
            There is no any new leads.
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default ProviderListMyServices;

const ListingLeads = (props) => {
  // const { data } = props;
  return (
    <>
      <section className="filterDate provider-border radius bgWhite pl30 pt30 pr30 pb30 mb30">
        <Row className="mb15 gy-3">
          <Col lg={3} md={6}>
            <div className="w128 text-center">
              <img
                className="img-fluid radius100"
                src={Img.group54493}
                alt=""
              />

              <div className="mt5 ">
                <Link to="#" className="colorOrange ">
                  {/* {data.userid.firstname} {data.userid.lastname} */}
                  Robin R
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div className="wListingtext">
              <h3 className="fs20 fBold mb5">
                {/* <Link
                  to="/service-provider-single"
                  className="colorBlack fBold"
                >
                  {data.title}
                </Link> */}
              </h3>
              <div className="rating colorPara fs20 mb10">R750 - R1000</div>

              <ul className="noUl colorpara">
                <li className="mb2 colorPara fs15">
                  <span className="mr10 ">{Svg.locationPinGrey}</span>
                  {/* {data.address} */}
                  Caribbean Blvd, Cutler Bay, FL, USA
                </li>
                <li className="mb2 colorPara fs15">
                  <span className="mr10 ">{Svg.calenderGrey}</span>
                  {/* {new Date(data.createdAt).toUTCString()} */}
                  April 26, 2021 Thursday
                </li>
                <li className="colorPara fs15">
                  <span className="mr10 colorPara">{Svg.clockgrey}</span>
                  {/* {data.timeslot} */}
                  Afternoon (12pm - 5pm)
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={12}>
            <div className="priceSection text-end d-flex flex-wrap justify-content-end mobJustifyContentStart align-items-center">
              <h4 className="colorPara fs14 mb3 mobMb0 mobMr10">
                13 hours ago
              </h4>
            </div>
            <div className="fBold fs20 text-end">$1500</div>
          </Col>
        </Row>

        <div className="bTop pt15">
          <div className="mb20">
            <h4 className="fs18 fw600 colorBlack ">Request Description</h4>
            <p className="colorPara mb0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>

          {/* <p className="fs15 mb20">{data.information}</p> */}
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="mobMb15">
              <span className="fs15 colorRed">Close</span>
            </div>

            <div className="d-flex align-items-center flex-wrap ">
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                mr="15px"
                fs="14px"
                pt="8px"
                pb="8px"
                pl="15px"
                pr="15px"
              >
                View Details
              </GButton>
              <GButton
                mr="15px"
                fs="14px"
                pt="8px"
                pb="8px"
                pl="15px"
                pr="15px"
              >
                {Svg.chat} <span className="ml10">Chat</span>
              </GButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
