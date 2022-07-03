import React from "react";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../../Components/GComponents/GAlign";
import "./Ourservices.css";

const Ourservices = () => {
  return (
    <section className="bgDarkBlue pt100 pb100 mobPt40 mobPb40">
      <Container>
        <div className="text-center">
          <h2 className="colorWhite fBold mb15">Our Services</h2>
          <p className="colorWhite width62 mb30 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
            Ahlookin is the medium between service providers and the people who
            hire them. We provide the booking service to help customers find
            quality service providers for their various projects, whether the
            service is required immediately or in the future. Customers can find
            vendors for:
          </p>
        </div>
        {/* Cards  */}
        <Row>
          <Col lg={4} className="">
            <section className="bgWhite mb20 pl30 pr30 pt40 pb40 text-center">
              <GAlign align="center">
                <div className="services-circle radius100 bgBlue mb12"></div>
              </GAlign>
              <h2 className="fs20 fBold colorBlack mb12">
                Tell us what you need
              </h2>
              <p className="colorPara mb0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking .
              </p>
            </section>
          </Col>
          <Col lg={4}>
            <section className="bgWhite mb20 pl30 pr30 pt40 pb40 text-center">
              <GAlign align="center">
                <div className="services-circle radius100 bgBlue mb12"></div>
              </GAlign>
              <h2 className="fs20 fBold colorBlack mb12">
                Tell us what you need
              </h2>
              <p className="colorPara mb0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking .
              </p>
            </section>
          </Col>
          <Col lg={4}>
            <section className="bgWhite mb20 pl30 pr30 pt40 pb40 text-center">
              <GAlign align="center">
                <div className="services-circle radius100 bgBlue mb12"></div>
              </GAlign>
              <h2 className="fs20 fBold colorBlack mb12">
                Tell us what you need
              </h2>
              <p className="colorPara mb0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking .
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ourservices;
