import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";

const Price = () => {
  return (
    <section className="mb80">
      <Container>
        <h3 className="colorBlack fBold mb10">
          Get the right price for your task
        </h3>
        <p className="colorPara mb30">
          The Oneflare Cost Guide Centre is your one-stop shop to help you set
          your budget; from smaller tasks to larger projects.
        </p>
        <Row className="mb30 gy-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((obj, ind) => {
            return (
              <Col lg={3} xs={6} key={ind}>
                {
                  <GItemCard
                    width="100%"
                    cover={true}
                    title="Lorem Ipsum"
                    iconText="Average price $150 — $550"
                    src={Img.rectangle25544}
                    radius="4px"
                    icon={Svg.dollar}
                    titleMb="15px"
                    titleMt="5px"
                  />
                }
              </Col>
            );
          })}
        </Row>
        <div className="text-center mt40">
          <GButton>See more cost Guides</GButton>
        </div>
      </Container>
    </section>
  );
};

export default Price;
