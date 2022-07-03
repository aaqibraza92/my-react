import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../Assets/Img/Img";
import "./Generated.css";
const Generated = () => {
  return (
    <section className="mb100 ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div>
              <img src={Img.group55489} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="ml80 mobMl0">
              <h2 className="fBold colorBlack mb20">
                Developing And Promoting Standards
              </h2>
              <p className="colorPara">
                At Ahlookin, we are trying our best to build a reliable platform
                with service providers that are:
              </p>
              <ul className="fs16 colorPara mb0 promoting-ul">
                <li className="mb15">Experienced within their industry</li>
                <li className="mb15">Honest</li>
                <li className="mb15">
                  Grow their companies through referrals (which means customers
                  love them)
                </li>
                <li className="mb15">Organized and detail-focused</li>
                <li className="mb15">
                  Responsible for their mistakes and learn from them
                </li>
                <li>Good communicators</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Generated;
