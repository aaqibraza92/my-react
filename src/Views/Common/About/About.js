import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import AlwaysFree from "./AlwaysFree/AlwaysFree";
import Counter from "./Counter/Counter";
import Generated from "./Generated/Generated";
import Ourservices from "./Ourservices/Ourservices";
import Ourteam from "./Ourteam/Ourteam";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
const About = () => {
  return (
    <div>
      <Aboutus />
      <Counter />
      <Generated />
      <Ourservices />
      <Ourteam />
      <AlwaysFree />
    </div>
  );
};

export default About;

const Aboutus = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60 mb100">
        <GSectionTitle
          title="About Us"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          fontWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">About Us </span>
        </div>
      </section>
      <section className="mb100 ">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div>
                <span className="fs14 colorBlue mb10">About Us</span>
                <h2 className="fs32 fBold colorBlack width65 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  Services delivered by the community for the community.
                </h2>
                <p className="colorBlack width90 mb0 tabWidth100 tabLgWidth100 mobWidth100">
                  At Ahlookin, we believe in the power of community. People
                  helping people. We connect people requiring services with
                  service providers who can’t wait to help. Ahlookin is a
                  marketplace for local services. We believe that in an era
                  where everything in our lives is connected, finding services
                  for you and your home in Trinidad and Tobago should be as easy
                  as clicking a few buttons. That is why we have created a
                  comprehensive digital marketplace for local services that make
                  doing projects and chores a breeze.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <img src={Img.group7359} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
