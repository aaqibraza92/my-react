import React, { useState } from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import "./CustomerReferral.css";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GTextarea from "../../../Components/GComponents/GTextarea";
import Svg from "../../../Assets/Svg/Svg";

const CustomerReferral = () => {
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={5} md={5} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={7} md={7} xl={8}>
              {/* <section className="bgBlue radius4 pl25 pr25 pb25 mb25">
                <GAlign align="between">
                  <div className="pt25">
                    <h2 className="colorWhite mb0">
                      Refer Friends & Earn Credit
                    </h2>
                    <p className="colorWhite">
                      Introduce a friend to Bluebis and you'll be credited $100
                      to your account
                    </p>
                  </div>
                  <div className="referral-badge">
                    <h2 className="colorWhite mb0">$100</h2>
                    <span className="fs20 colorWhite mb0">Credit</span>
                  </div>
                </GAlign>
              </section> */}
              <div className="bgBlue pl30 pb20 pr30 pt20 mb30 radiusTop">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h1 className="fs32 fBold colorWhite crb-head mb15">
                      Refer Friends & Earn Credit
                    </h1>
                    <p className="fs16 colorWhite mb0 crb-para">
                      Introduce a friend to Bluebis and you'll be credited $100
                      to your account
                    </p>
                  </div>
                  <div className="position-relative badge-mb">
                    <span className="credit-badge-svg">{Svg.creditbadge}</span>
                    <div className="credit-badge-content text-center">
                        <h1 className="fs32 colorWhite crb-badge-head mb5">$100</h1>
                        <h3 className="fs20 colorWhite crb-para">Credit</h3>
                      </div>
                  </div>
                </div>
              </div>
              <GIconInput
                label="Enter email address(es)"
                placeholder="Separate each email address with a comma."
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></GIconInput>
              <GIconInput
                label="Subject"
                placeholder="Praveen Solanki wants you to join BlueBis"
                className=""
                type="text"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
              ></GIconInput>
              <GTextarea
                label="Subject"
                placeholder="Praveen Solanki wants you to join BlueBis"
                className=""
                type="text"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              ></GTextarea>
              <span className="fs14 colorPara">
                Note: Each person will receive a separate email. This is not a
                group email.
              </span>
              <GAlign align="right">
                <span className="mr20">
                  <GButton backgroundColor="#F7F8F9" color="#20272B">
                    Cancel
                  </GButton>
                </span>
                <GButton>Send Invite</GButton>
              </GAlign>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerReferral;
