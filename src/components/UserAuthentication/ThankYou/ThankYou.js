import React from "react";
import { CardTitle, CardText, Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../Layout/GButton";

const ThankYou = () => {
  return (
    <>
      <Container className="pt_45 pb_45">
        <Row>
          <Col className="text-center m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              {Svg.succes}
              <CardTitle tag="h3" className="pt25 pb15">
                Your password reset successfully
              </CardTitle>
              <CardText>
                You can now use your new password to log in to your account!
              </CardText>
              <GButton className="w-100">Go to my profile</GButton>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThankYou;
