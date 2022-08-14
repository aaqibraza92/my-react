import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import AlwaysFree from "./AlwaysFree/AlwaysFree";
import Counter from "./Counter/Counter";
import Generated from "./Generated/Generated";
import Ourservices from "./Ourservices/Ourservices";
import Ourteam from "./Ourteam/Ourteam";

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
    <section className="mb80 ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div>
              <span className="fs14 colorBlue">About Us</span>
              <h2 className="fBold colorBlack">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="colorBlack">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum est ultricies integer quiz. Iaculis urna id volutpat
                lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
                odio tempor orci dapibus ultrices in. Egestas diam in arcu
                cursus euismod. Dictum
              </p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="ml40 mobMl0">
              <img src={Img.group7359} alt="" className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};