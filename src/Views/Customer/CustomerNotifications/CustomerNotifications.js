import React, { useState } from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GAlign from "../../../Components/GComponents/GAlign";
import "./CustomerNotification.css";
const CustomerNotifications = () => {
  const [selected, setselected] = useState(1);
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={5} md={5} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={7} md={7} xl={8}>
              {/* By Default Screen if no favourite is available  */}
              {selected === 0 && <NoNotification />}

              {selected === 1 && (
                <div>
                  <NotificationsAvailable />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerNotifications;

{
  /* By Default Screen If No Notification available */
}
const NoNotification = () => {
  return (
    <>
      <div className="pb6 borBottom mb12">
        <h3 className="fBold">Notifications</h3>
      </div>
      <GAlign align="between">
        <span className="fs16 colorBlack">New</span>
        <span className="fs16 colorBlue">Mark as read</span>
      </GAlign>
      <section className="text-center pt100 pb100">
        <div>
          <img src={Img.MaskGroup13} alt="" className="img-fluid mb15" />
        </div>
        <h4 className="fs20">There are no notifications yet</h4>
        <p className="colorPara">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </section>
    </>
  );
};

/* If Notifications is available */
const NotificationsAvailable = () => {
  const [selectedTab, setselectedTab] = useState(0);

  return (
    <>
      {/* <div className="pb6 borBottom mb12 d-flex justify-content-between align-items-center">
        <h3 className="fBold">Notifications</h3>
      </div> */}
      <GAlign align="between" className="borBottom pb6 ">
        {/* Header Part of Customer Dashboard  */}
        <div>
          <h3 className="colorBlack fBold">Notifications</h3>
        </div>
        <div className="dNoneXs">
          <span
            className={`${
              selectedTab === 1 ? "colorBlue" : "colorBlack"
            } fs16 mr20 pointer`}
            onClick={() => {
              setselectedTab(1);
            }}
          >
            All
          </span>
          <span
            className={`${
              selectedTab === 2 ? "colorBlue" : "colorBlack"
            } fs16 mr20 pointer`}
            onClick={() => {
              setselectedTab(2);
            }}
          >
            Quotations
          </span>
        </div>
      </GAlign>

      <div className="mt15">
        <GAlign align="between">
          <span className="fs16 colorBlack">New</span>
          <span className="fs16 colorBlue">Mark as read</span>
        </GAlign>
      </div>
      <Row className="bBottom pt18 pb18">
        <Col lg={9} xs={12}>
          <div className="d-flex">
            <div className="w48 mr15">
              <img className="radius100 " src={Img.rectangle1400999} alt="" />
            </div>
            <div>
              <p className="fs18 mb5 fw600">BlueBis Offer</p>
              <p className="mb0 colorPara">
                Hello, I am BliueBis assistant and I am here for you. If you
                need a help with anything feel free to let me know :)
              </p>
            </div>
          </div>
        </Col>
        <Col lg={3} xs={12}>
          <div className="text-end">
            <span className="fs14 colorPara">April 26, 2021</span>
          </div>
        </Col>
      </Row>
    </>
  );
};
