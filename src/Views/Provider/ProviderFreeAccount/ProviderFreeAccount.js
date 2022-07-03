import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GLink from "../../../Components/GComponents/GLink";
import GPasswordInput from "../../../Components/GComponents/GPasswordInput";
import OTPModal from "../../../Components/GComponents/OTPModal/OTPModal";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";
import "./ProviderFreeAccount.css";

const ProviderFreeAccount = () => {
  const history = useHistory();
  const [dataState, setDataState] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "Provider",
    agree: false,
    offersAccepted: true,
    emailVerificationLink: API.productionurl,
  });

  const clearState = () => {
    setDataState({
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
      confirmpassword: "",
      role: "Provider",
      agree: false,
      offersAccepted: true,
      emailVerificationLink: API.productionurl,
    });
  };

  const verifyOTP = async (mobile, otp) => {
    var result = false;
    try {
      await HTTP.post(
        API.verifyOTP,
        { mobile: mobile, otp: otp },
        false,
        ""
      ).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          result = true;
          return result;
        }
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  const onSave = () => {
    try {
      if (dataState.firstname === null || dataState.firstname === "") {
        return AlertModal.show(
          "Please enter first name ",
          "Enter Required Field"
        );
      }
      if (dataState.lastname === null || dataState.lastname === "") {
        return AlertModal.show(
          "Please enter last name",
          "Enter Required Field"
        );
      }
      if (dataState.email === null || dataState.email === "") {
        return AlertModal.show(
          "Please enter a valid email address",
          "Enter Required Field"
        );
      }
      if (dataState.mobile === null || dataState.mobile === "") {
        return AlertModal.show(
          "Please enter a valid mobile number",
          "Enter Required Field"
        );
      }
      if (dataState.password === null || dataState.password === "") {
        return AlertModal.show("Please enter password", "Enter Required Field");
      }
      if (dataState.password !== dataState.confirmpassword) {
        return AlertModal.show(
          "Confirm password mismatched, Please enter correct password",
          "Error!"
        );
      }
      if (dataState.agree === false) {
        return AlertModal.show(
          "Please review and agree to our Terms of Use and Privacy Policy.",
          "Info"
        );
      }

      HTTP.post(API.register, dataState, false, "", true).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          clearState();
          history.push("/login");
        } else {
        }
        console.log("reg", res);
      });
    } catch (e) {
      console.log(e, "Error in Provider Sign up page");
    }
  };

  const resendOTP = async (mobile) => {
    var result = false;
    try {
      await HTTP.post(API.resendOTP, { mobile: mobile }, false, "").then(
        (res) => {
          if (res && res.status && res.status.toString() === "200") {
            result = true;
            return result;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row className="align-items-center gx-5">
            <Col lg={5} className="mb20 dNoneXs">
              <div>
                <img src={Img.rectangle13793} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={7}>
              <section className="bgWhite">
                <h3 className="fs24 fBold colorBlack mb25">
                  Create Your Free provider Account
                </h3>
                <Row className="mb8">
                  <Col lg={6}>
                    <GIconInput
                      label="First Name *"
                      placeholder="e.g. Jhon"
                      name="fname"
                      type="text"
                      value={dataState.firstname}
                      onChange={(e) =>
                        setDataState({
                          ...dataState,
                          firstname: e.target.value,
                        })
                      }
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      label="Last Name *"
                      placeholder="e.g. Doe"
                      type="text"
                      name="lname"
                      value={dataState.lastname}
                      onChange={(e) =>
                        setDataState({ ...dataState, lastname: e.target.value })
                      }
                    ></GIconInput>
                  </Col>
                </Row>
                <Row className="mb8">
                  <Col lg={6}>
                    <GIconInput
                      label="Email *"
                      placeholder="example@mail.com"
                      type="email"
                      name="email"
                      value={dataState.email}
                      onChange={(e) =>
                        setDataState({ ...dataState, email: e.target.value })
                      }
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      label="Mobile Number *"
                      placeholder="e.g. 9876 543 210"
                      type="number"
                      name="mobile"
                      value={dataState.mobile}
                      onChange={(e) =>
                        setDataState({ ...dataState, mobile: e.target.value })
                      }
                    ></GIconInput>
                  </Col>
                </Row>
                <Row className="mb8">
                  <Col lg={6}>
                    <GPasswordInput
                      label="Password"
                      placeholder="example@mail.com"
                      type="password"
                      name="password"
                      value={dataState.password}
                      onChange={(e) =>
                        setDataState({ ...dataState, password: e.target.value })
                      }
                    ></GPasswordInput>
                  </Col>
                  <Col lg={6}>
                    <GPasswordInput
                      label="Confirm Password *"
                      placeholder="e.g. 9876 543 210"
                      type="password"
                      name="cpassword"
                      value={dataState.confirmpassword}
                      onChange={(e) =>
                        setDataState({
                          ...dataState,
                          confirmpassword: e.target.value,
                        })
                      }
                    ></GPasswordInput>
                  </Col>
                </Row>

                <GCheckbox
                  value="I agree"
                  onChange={(e) =>
                    setDataState({ ...dataState, agree: e.target.checked })
                  }
                  label="I agree to the "
                  id="agreement"
                ></GCheckbox>
                <span>
                  <GLink
                    to="/terms-conditions"
                    marginLeft="5px"
                    text={
                      <span>
                        Terms of Service{" "}
                        <span className="colorBlack ml5 mr8"> and</span>
                      </span>
                    }
                  ></GLink>
                  <GLink
                    to="/privacy-policy"
                    text={<span>Privacy Policy</span>}
                  ></GLink>
                  {/* <GLink to="" text=""></GLink> */}
                </span>
                <GAlign align="right">
                  <GButton onClick={(e) => onSave()}>Create an Account</GButton>
                </GAlign>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProviderFreeAccount;
