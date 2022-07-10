import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import "./CustomerUserProfile.css";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import DatePicker from "react-datepicker";
import Svg from "../../../Assets/Svg/Svg";
import "react-datepicker/dist/react-datepicker.css";

const CustomerUserProfile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  // const [mobileverified, setmobileverified] = useState("");
  // const [emailverified, setemailverified] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState(Date.now());

  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={5} md={5} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={7} md={7} xl={8}>
              <div className="pb6 borBottom">
                <h3 className="fBold">User Profile</h3>
              </div>
              <Row>
                <Col lg={12} md={12} xl={9}>
                  <section className="pt25">
                    <div className="mb25">
                      <h4 className="fs22 mb25">Profile Image</h4>
                      <GAlign>
                        <div className="w100 mr20">
                          <img
                            src={Img.group7359}
                            alt=""
                            className="radius100 img-fluid"
                          />
                        </div>
                        <div>
                          <div className="mb10">
                            <span className="mr20">
                              <GButton>Upload Avtar</GButton>
                            </span>
                            <GButton backgroundColor="#F7F8F9" color="#20272B">
                              Delete
                            </GButton>
                          </div>
                          <span className="fs14 colorPara">
                            This should be a image upload form only that allows
                            image types as png, jpg, bitmap. Maximum size is of
                            10MB.
                          </span>
                        </div>
                      </GAlign>
                    </div>
                    <div className="">
                      <h4 className="fs22 mb25">Personal Information</h4>
                      <Row>
                        <Col lg={6}>
                          <GIconInput
                            label="First Name *"
                            placeholder="Praveen"
                            className="mr20"
                            type="text"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                          ></GIconInput>
                        </Col>
                        <Col lg={6}>
                          <GIconInput
                            label="Last Name *"
                            placeholder="Solanki"
                            type="text"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                          ></GIconInput>
                        </Col>
                      </Row>
                    </div>
                    <GIconInput
                      className="bgLightOrange"
                      label="Mobile Number"
                      type="number"
                      placeholder="9876 543 210"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                      readOnly={true}
                      disabled={true}
                      iconRight={Svg.verify}
                    ></GIconInput>
                    <span className="user-email">
                      <GIconInput
                        label="Email *"
                        type="email"
                        placeholder="Example@gmail.com"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        readOnly={true}
                        disabled={true}
                        iconRight={Svg.pencil}
                      ></GIconInput>
                    </span>
                    <Row>
                      <Col>
                        <p className="colorBlack fs16 mb7">Date of Birth</p>
                        <div className="position-relative mb20">
                          <DatePicker
                            selected={dob}
                            onChange={(dob) => setdob(dob)}
                            dateFormat="yyyy-M-dd"
                            locale="es"
                            placeholderText="Choose Date"
                            className="w-100 inputTransparent outlineNone"
                          />
                          {/* <div className="acp-dob">
                            <span>{Svg.dob}</span>
                          </div> */}
                        </div>
                      </Col>
                    </Row>

                    {/* For checkbox  */}

                    <Row>
                      <GAlign align="right">
                        <span className="mr20">
                          <GButton backgroundColor="#F7F8F9" color="#20272B">
                            Cancel
                          </GButton>
                        </span>
                        <GButton>Update Info</GButton>
                      </GAlign>
                    </Row>
                  </section>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerUserProfile;
