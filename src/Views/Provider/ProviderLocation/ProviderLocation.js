import React from "react";
import { Container, Row, Col } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GIconInput from "../../../Components/GComponents/GIconInput";
import Select from "react-select";
import GButton from "../../../Components/GComponents/GButton";
import GAlign from "../../../Components/GComponents/GAlign";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";

const ProviderLocation = () => {
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
                <div className="pt30 pb30 pr30 pl30 bBottom ">
                  <div className="mb8">{Svg.backarrow}</div>
                  <h4 className="fs22 colorBlack fw600">
                    What Is Your Location
                  </h4>
                  <p className="colorPara">
                    We will send you tasks from your neighborhood and nearby
                    areas.
                  </p>
                  <GIconInput
                    label="Street Address *"
                    placeholder="Street Address"
                    type="text"
                  ></GIconInput>
                  <GIconInput
                    label="Address Line 2"
                    placeholder="Address Line 2"
                    type="text"
                  ></GIconInput>
                  <Row>
                    <Col lg={6}>
                      <GIconInput
                        label="City or Town *"
                        placeholder="City or Town"
                        type="number"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <GIconInput
                        label="ZIP or Postcode"
                        placeholder="ZIP or Postcode"
                        type="text"
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <GIconInput
                        label="State or Province"
                        placeholder="State or Province"
                        type="number"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <p className="mb4 colorBlack">Country *</p>
                      <Select
                        label="Country"
                        className="w-100 themeSelect "
                        classNamePrefix="themeSelect"
                        // options={countryListData}
                        // value={country}
                        // onChange={(e) => {
                        //   setcountry(e);
                        //   console.log(e);
                        // }}
                      />
                    </Col>
                  </Row>

                  <div className="mapList mt30">
                    <iframe
                      src="https://www.google.com/maps"
                      // src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Iframe"
                    ></iframe>
                  </div>

                </div>
                <div className="pt30 pb30 pr30 pl30">
                  <h4 className="fs22 colorBlack fw600">
                    Radius for Service Area
                  </h4>
                  <p className="colorPara">
                    Set the radius from your city which covers your service
                    area, we'll only send you customer requests within this
                    coverage.
                  </p>
                  <Select
                    label="Country"
                    className="w-100 themeSelect "
                    classNamePrefix="themeSelect"
                    // options={countryListData}
                    // value={country}
                    // onChange={(e) => {
                    //   setcountry(e);
                    //   console.log(e);
                    // }}
                  />
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

export default ProviderLocation;
