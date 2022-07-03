import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import GIconInput from "../Layout/GIconInput";

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(../../..${props.bgImage})`};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#12B0B9")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  padding: 70px 0;

}

.Headingcenter {
  font-size: 40px;
  padding-top: ${(props) => (props.pt ? props.pt : "0px")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "0px")};
  padding-left: ${(props) => (props.pl ? props.pl : "0px")};
  padding-right: ${(props) => (props.pr ? props.pr : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-transform: ${(props) => {
    return props.transform ? props.transform : "initial";
  }};
}

  .text {
    padding-top: ${(props) => (props.textpt ? props.textpt : "0")};
    padding-bottom: ${(props) => (props.textpb ? props.textpb : "0")};
    padding-left: ${(props) => (props.textpl ? props.textpl : "0")};
    padding-right: ${(props) => (props.textpr ? props.textpr : "0")};
    margin-top: ${(props) => (props.textmt ? props.textmt : "0")};
    margin-bottom: ${(props) => (props.textmb ? props.textmb : "0")};
    margin-left: ${(props) => (props.textml ? props.textml : "0")};
    margin-right: ${(props) => (props.textmr ? props.textmr : "0")};
    font-size: ${(props) => (props.textfs ? props.textfs : "15px")};
    color: ${(props) => (props.textcolor ? props.textcolor : "#fff")};
  }

  @media only screen and (max-width: 767px) {
    .Headingcenter {
      font-size: 18px;
    }
  }
`;

const HeroSection = (props) => {
  return (
    <Wrapper
      bgColor={props.backgroundColor}
      bgImage={props.backgroundImage}
      color={props.color}
    >
      <section className="HeroSectionBg">
        <Container>
          <Row className="justify-content-center">
            <Col md={7}>
              <section className="text-center">
                <h1 className="Headingcenter lb">{props.title}</h1>
                {/* {props.input && <GIconInput />} */}
                {props.text && <p className="text">{props.text}</p>}
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
};

export default HeroSection;
