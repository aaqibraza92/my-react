import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GLogin from "../../Components/GComponents/GLogin";
import GSignup from "../../Components/GComponents/GSignup";
import GSection from "../../Components/GComponents/GSection";
import GSpacing from "../../Components/GComponents/GSpacing";
import GSwitchTab from "../../Components/GComponents/GSwitchTab";
import GSectionTitle from "../../Components/GSectionTitle";

const Login = (props) => {
  return (
    <GSection>
      <Container>
        <Row>
          <Col lg={6} xl={6} md={6}>
            <div className="maxWidth80">
              <GSectionTitle
                titleSize="28px"
                title="#1 Trinidad and Tobago ondemand Service Provider platform for cleaning, painting & more."
              />

              <img src={Img.login.default} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col lg={6} xl={6} md={6}>
            <GSpacing padding="40px" paddingTop="20px">
              <GSection background="#fff" minHeight="inherit">
                <GSpacing paddingLeft="30px"  paddingRight="30px">
                  <GSwitchTab align="right" firstContent={<GLogin />} secondContent={<GSignup/>} />
                  
                </GSpacing>
              </GSection>
            </GSpacing>
          </Col>
        </Row>
      </Container>
    </GSection>
  );
};

export default Login;
