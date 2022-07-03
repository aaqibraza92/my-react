import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import { Col, Container, Row } from "reactstrap";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
// import GFileInput from "../../Components/GComponents/GFileInput";
import CmnFileUploadFile from "../../../Components/CmnFileUploadFile/CmnFileUploadFile";

import GRadio from "../../../Components/GComponents/GRadio";

const ProviderVerifiedBadge = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <ProviderBusinessAside />
            </Col>
            <Col lg={9} md={9} xl={9}>
              <section className="bgWhite">
                <div className="pt30 pb30 pr30 pl30">
                  <div className="mb8">{Svg.backarrow}</div>
                  <h4 className="fs22 colorBlack fw600">
                    Earn a verified badge
                  </h4>
                  <p className="colorBlack">Guarantee Checkbox</p>

                  <Row>
                    <Col lg={4}>
                      <GCheckbox label="No - Show Reimbursement"></GCheckbox>
                    </Col>
                    <Col lg={4}>
                      <GCheckbox label="Late- Fee"></GCheckbox>
                    </Col>
                    <Col lg={4}>
                      <GCheckbox label="Money Back"></GCheckbox>
                    </Col>
                  </Row>
                  <Row className="mb12 mt12">
                    <p className="colorBlack fs16 mb7">
                      Are Your Services Insured?
                    </p>
                    <Col lg={3}>
                      <GRadio name="sole" id="sole" label="Male"></GRadio>
                    </Col>
                    <Col lg={3}>
                      <GRadio name="sole" id="register" label="Female"></GRadio>
                    </Col>
                  </Row>

                  <div>
                    <h5 className="fs20 mb15 colorBlack">
                      Credentials - Upload to earn a verified badge
                      <span className="ml5"></span>
                      {Svg.badge}
                    </h5>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Identity Document</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Proof of Address</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Business Registration</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">
                        Police Certificate of Good Character
                      </p>
                      <CmnFileUploadFile />
                    </div>

                    <div className="mt15">
                      <GAlign align="right">
                        <GButton>Continue</GButton>
                      </GAlign>
                    </div>

                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProviderVerifiedBadge;
