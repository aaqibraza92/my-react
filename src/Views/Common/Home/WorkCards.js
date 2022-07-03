import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";

const workData = [
  {
    image: Img.group7343,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
  {
    image: Img.group7344,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
  {
    image: Img.group7345,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
];

const WorkCards = () => {
  return (
    <>
      <section className="mb80">
        <Container>
          <Row>
            <div className="text-center">
              <h3 className="fBold colorBlack mb30">How does bluelbis work?</h3>
            </div>
            {workData.map((obj, ind) => {
              return (
                <Col lg={4} md={4} key={ind}>
                  <section className="bgGrey text-center pt40 pb40 mb20 pl30 pr30">
                    <GItemCard
                      src={obj.image}
                      className="mb15"
                      align="center"
                      title={obj.title}
                      para={obj.para}
                      fsTitle="20px"
                      mtTitle="18px"
                      mbTitle="18px"
                      colorPara
                    ></GItemCard>
                  </section>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WorkCards;
