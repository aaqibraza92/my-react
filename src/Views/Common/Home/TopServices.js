import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import GLink from "../../../Components/GComponents/GLink";
const TopServices = () => {
  return (
    <>
      <section className="bgGrey pt80 pb80 mobPt40 mobPb40">
        <Container>
          <div className="text-center">
            <h3 className="colorBlack fBold mb15">
              Browse Top Service Professionals in USA
            </h3>
            <p className="colorPara mb60 width40 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
            </p>
          </div>
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (obj, ind) => {
                return (
                  <Col key={ind} lg={3} md={3} xs={4} className="mb15">
                    <GLink
                      to="#"
                      text="Trinidad"
                      color="#000"
                      hoverColor="#47BBD0"
                      hoverTextDecoration="underline"
                      className="w-100"
                    />
                  </Col>
                );
              }
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TopServices;
