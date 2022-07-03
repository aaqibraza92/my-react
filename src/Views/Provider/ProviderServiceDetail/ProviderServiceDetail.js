import React from "react";
import { Container, Row, Col } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GButton from "../../../Components/GComponents/GButton";
import GAlign from "../../../Components/GComponents/GAlign";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
// ProviderBusinessDetail
// ProviderServiceDetail
const ProviderServiceDetail = () => {
  return (
    <div>
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
                  <h4 className="fs22 mb15 colorBlack fw600">
                    Services & Documents
                  </h4>
                  <h5 className="fs20 mb15 colorBlack">
                    Business Categories & Description
                  </h5>
                  <GIconInput
                    label="Services Offered Category"
                    placeholder="Add Category"
                  ></GIconInput>
                  <GIconInput
                    label="Subcategory/keywords"
                    placeholder="Add keywords that relate specifically to your business. E.g. Garden Services"
                  ></GIconInput>
                  <h6 className="fs14 mb15 colorPara">
                    Add keywords that relate specifically to your business.
                    Customer requests are matched to your keywords and sent to
                    you.
                  </h6>
                  <GTextarea
                    label="Description"
                    placeholder="Enter a detailed description of what your business does and its experience"
                    className="mb20"
                  ></GTextarea>
                  <GAlign align="right">
                    <GButton>Continue</GButton>
                  </GAlign>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProviderServiceDetail;
