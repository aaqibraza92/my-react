import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../Assets/Img/Img";

const Generated = () => {
  return (
    <section className="mb80 ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div>
                <img src={Img.group55489} alt="" className="w-100" />
              </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="ml40 mobMl0">
              <h2 className="fBold colorBlack">
                The generated Lorem Ipsum is therefore always free
              </h2>
              <p className="colorLightBlack">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="colorLightBlack">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Generated;
