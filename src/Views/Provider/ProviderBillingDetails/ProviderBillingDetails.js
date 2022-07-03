import React from "react";
import ProviderAccountAside from "../ProviderAccountAside/ProviderAccountAside";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../Components/GComponents/GAlign";
import GIconInput from "../../../Components/GComponents/GIconInput";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import Select from "react-select";
import "./ProviderBillingDetails.css";

const ProviderBillingDetails = () => {
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <ProviderAccountAside />
            </Col>

            <Col lg={8} md={8} xl={8}>
              <div className="pb6 borBottom">
                <h3 className="fBold">Payment & Billing Details</h3>
              </div>

              <section className="pt25">
                <div className="mb25">
                  <h4 className="fs22 mb25">Payment Method</h4>
                  <section className="border radius ">
                    <div className="bgGrey radius pt15 pb15 pl15 pr15">
                      <GAlign align="between">
                        <p className="fBold ">Credit/Debit Card</p>
                        <div>
                          <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                          <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                          <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                          <span className="pt5 pb5 pl18 pr18 bgLightBlue radius4"></span>
                        </div>
                      </GAlign>
                      <span className="fs14 colorDarkGrey">
                        Safe money transfer using your bank account visa,
                        maestro, discover, American express.
                      </span>
                    </div>
                    <div className="pt25 pb15 pl15 pr15">
                      {/* For Card Number  */}
                      <GIconInput
                        label="Card Number *"
                        type="number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        marginBottom="5px"
                      ></GIconInput>
                      <Row>
                        <Col lg={6}>
                          {/* For Card CVV Number  */}
                          <GIconInput
                            label="CVV Code"
                            type="number"
                            placeholder="123"
                            iconRight={Svg.card}
                          ></GIconInput>
                        </Col>
                        <Col lg={6}>
                          {/* For Card Expiry Date */}
                          <GIconInput
                            label="Expiry Date"
                            type="number"
                            placeholder="MM/YYYY"
                          ></GIconInput>
                        </Col>
                      </Row>
                    </div>
                  </section>
                </div>
                <div>
                  <h4 className="fs22 mb25">Bank Detail</h4>
                  <GIconInput
                    type="text"
                    label="Bank name *"
                    placeholder="Bank name"
                    marginBottom="5px"
                  ></GIconInput>
                  <Row className="mb5">
                    <Col lg={6}>
                      <GIconInput
                        type="text"
                        label="Account name *"
                        placeholder="Account name"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <GIconInput
                        type="number"
                        label="Account number *"
                        placeholder="e.g. 1234567890"
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row className="mb5">
                    <Col lg={6}>
                      <GIconInput
                        type="number"
                        label="Branch code *"
                        placeholder="e.g. 1234567890"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      {/* For Country Selection */}
                      <p className="colorPara mb4">Account type</p>
                      <div className="cbd-select">
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
                      </div>
                    </Col>
                  </Row>
                  <GTextarea
                    label="Any additional information type below in text box"
                    placeholder="Write your information"
                    className="mb25"
                  ></GTextarea>
                  <GAlign align="between">
                    <h4 className="fs22 mb25">Billing Address</h4>
                    <GCheckbox label="Same as business location"></GCheckbox>
                  </GAlign>
                  {/* For Address */}
                  <GIconInput
                    type="text"
                    label="Street Address *"
                    placeholder="Street Address"
                    marginBottom="5px"
                  ></GIconInput>
                  {/* For Confirm Address */}
                  <GIconInput
                    type="text"
                    label="Address Line 2 "
                    placeholder="Address Line 2 "
                  ></GIconInput>
                  <Row className="mb5">
                    <Col lg={6}>
                      {/* For City */}
                      <GIconInput
                        type="text"
                        label="City or Town *"
                        placeholder="City or Town"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      {/* For Zip Code */}
                      <GIconInput
                        type="number"
                        label="ZIP or Postcode"
                        placeholder="ZIP or Postcode"
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row className="mb15">
                    <Col lg={6}>
                      {/* For Province(State) */}
                      <GIconInput
                        type="text"
                        label="State or Province"
                        placeholder="State or Province"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      {/* For Country Selection */}
                      <p className="colorPara mb4">Country</p>
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
                        >
                        </Select>
                    </Col>
                  </Row>
                  <GAlign align="right">
                    <span className="mr20">
                      <GButton backgroundColor="#F7F8F9" color="#20272B">
                        Cancel
                      </GButton>
                    </span>
                    <GButton>Update Info</GButton>
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

export default ProviderBillingDetails;
