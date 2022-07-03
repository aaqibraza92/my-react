import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";
const Categories = () => {
  return (
    <>
      <section className="mb80">
        <Container>
          <h3 className="fBold mb30">Browse popular categories</h3>
          <Row className="mb30 gy-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((obj, ind) => {
              return (
                <Col lg={3} xs={6} key={ind}>
                  {
                    <GItemCard
                      width="100%"
                      cover={true}
                      title="Removalist"
                      rating="4.5"
                      icon={Svg.star}
                      iconText="1,000"
                      src={Img.rectangle2554}
                      radius="4px"
                      titleMb="15px"
                      titleMt="5px"
                    />
                  }
                </Col>
              );
            })}
          </Row>
          <div className="text-center mt50">
            <GButton>See all Catagories</GButton>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Categories;
