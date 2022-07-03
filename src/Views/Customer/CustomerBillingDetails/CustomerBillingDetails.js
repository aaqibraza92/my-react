import React, { useState } from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../Components/GComponents/GAlign";
import GIconInput from "../../../Components/GComponents/GIconInput";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import Select from "react-select";

const CustomerBillingDetails = () => {
  const [cardNum, setcardNum] = useState("");
  const [cvv, setcvv] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [address, setaddress] = useState("");
  const [confirmAddress, setconfirmAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={8} md={8} xl={8}>
              <div className="pb6 borBottom">
                <h3 className="fBold">Billing Details</h3>
              </div>

              <section className="pt25">
                <div className="mb25">
                  <h4 className="fs22 mb25">Payment Method</h4>
                  <section className="border radius ">
                    <div className="bgGrey radius pt15 pb15 pl15 pr15">
                      <GAlign align="between">
                        <p className="fBold mb5">Credit/Debit Card</p>
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
                      marginBottom="8px"
                        label="Card Number *"
                        type="number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardNum}
                        onChange={(e) => setcardNum(e.target.value)}
                      ></GIconInput>
                      <Row>
                        <Col lg={6}>
                          {/* For Card CVV Number  */}
                          <GIconInput
                            label="CVV Code"
                            type="number"
                            placeholder="123"
                            iconRight={Svg.card}
                            value={cvv}
                            onChange={(e) => setcvv(e.target.value)}
                          ></GIconInput>
                        </Col>
                        {/* For Card Expiry Date */}
                        <Col lg={6}>
                          <GIconInput
                            label="Expiry Date"
                            type="number"
                            placeholder="MM/YYYY"
                            value={expiryDate}
                            onChange={(e) => setexpiryDate(e.target.value)}
                          ></GIconInput>
                        </Col>
                      </Row>
                    </div>
                  </section>
                </div>
                <div>
                  <h4 className="fs22 mb25">Billing Address</h4>
                  {/* For Address */}
                  <GIconInput
                  marginBottom="8px"
                    type="text"
                    label="Street Address *"
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></GIconInput>
                  {/* For Confirm Address */}
                  <GIconInput
                  marginBottom="8px"

                    type="text"
                    label="Address Line 2 "
                    placeholder="Address Line 2 "
                    value={confirmAddress}
                    onChange={(e) => setconfirmAddress(e.target.value)}
                  ></GIconInput>
                  <Row className="mb8">
                    <Col lg={6}>
                      {/* For City */}
                      <GIconInput
                        type="text"
                        label="City or Town *"
                        placeholder="City or Town"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      {/* For Zip Code */}
                      <GIconInput
                        type="number"
                        label="ZIP or Postcode"
                        placeholder="ZIP or Postcode"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row className="mb8">
                    <Col lg={6}>
                      {/* For Province(State) */}
                      <GIconInput
                        type="text"
                        label="State or Province"
                        placeholder="State or Province"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      {/* For Country Selection */}
                      <p className="mb4">Country</p>
                      <Select
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
                  <GAlign align="right">
                    <span className="mr20">
                      <GButton backgroundColor="#F7F8F9" color="#20272B" border="1px solid #E8E9E9">
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
    </>
  );
};

export default CustomerBillingDetails;
