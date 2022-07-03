import React from "react";
import { Container, Row, Col } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GSectionTitle from "../../../Components/GSectionTitle";
import Select from "react-select";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";

const ContactUs = () => {
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <GSectionTitle
            title="How can we help you?"
            pretitle="Contact Us"
            subtitle="We want to hear from you. Let us know how we can help."
            align="center"
            marginTop="50px"
          ></GSectionTitle>

          <Row>
            <Col lg={6}>
              <GIconInput
                label="First Name"
                placeholder="Enter Last Name"
                type="text"
              ></GIconInput>
            </Col>
            <Col lg={6}>
              <GIconInput
                label="Last Name"
                placeholder="Enter Last Name"
                type="text"
              ></GIconInput>
            </Col>
            <Col lg={6}>
              <GIconInput
                label="Mail"
                placeholder="monicageller@mail.com"
                type="email"
                iconRight={Svg.iredbutton}
              ></GIconInput>
            </Col>
            <Col lg={6}>
              <p className="fs16 colorBlack mb4">Select a Subject *</p>
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
          <GTextarea
            label="Message"
            placeholder="Describe your problem or question"
          ></GTextarea>
          <span className="fs14 colorPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
          <div className="mt15">
            <GAlign align="right">
              <GButton>Send message</GButton>
            </GAlign>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
