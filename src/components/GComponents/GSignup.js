import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GCheckbox from "./GCheckbox";
import GIconInput from "./GIconInput";
import GAlign from "./GAlign";
import GLink from "./GLink";
import GPasswordInput from "./GPasswordInput";
import GButton from "./GButton";
import GSpacing from "./GSpacing";
import { Col, Row } from "reactstrap";
import AlertModal from "../AlertModal/AlertModal";
import API from "../../Helpers/Constants/Constants";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GSignup = (props) => {
  const [dataState, setDataState] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "Customer",
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
      role: "Customer",
      agree: false,
      offersAccepted: true,
      emailVerificationLink: API.productionurl,
    });
  };

  const sendForm = () => {
    try {
      if (dataState) {
        if (dataState.firstname.trim().length < 3)
          return AlertModal.show(
            "The first name should be at least 03 character long."
          );
        if (dataState.lastname.trim().length < 3)
          return AlertModal.show(
            "The last name should be at least 03 character long."
          );
        if (dataState.email.trim().length < 5)
          return AlertModal.show("Please enter a valid email address.");
        if (dataState.mobile.trim().length < 10)
          return AlertModal.show("Please enter a valid mobile number.");
        if (dataState.password.trim().length < 8)
          return AlertModal.show(
            "To protect your account your password needs to be between 8 and 30 character long and contains 1 upper-case letter and a number."
          );
        if (dataState.password.trim() !== dataState.confirmpassword.trim())
          return AlertModal.show("Confirm password not matched.");
        if (!dataState.agree)
          return AlertModal.show(
            "Please review and agree to our Terms of Use and Privacy Policy."
          );

        if (props.submitCall) {
          props.submitCall(dataState).then(res => {
            if(res){
              clearState();
            }
          });
        } else {
          return AlertModal.show(
            "Please provide call back function for signup component. (props.submitCall())"
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginWrapper>
      <h3>Signup Account</h3>

      <Row>
        <Col lg={6} md={6}>
          <GIconInput
            label="First name"
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={dataState.firstname}
            onChange={(e) =>
              setDataState({ ...dataState, firstname: e.target.value })
            }
          />
        </Col>

        <Col lg={6} md={6}>
          <GIconInput
            label="Last name"
            type="text"
            name="Lastname"
            placeholder="Enter Last name"
            value={dataState.lastname}
            onChange={(e) =>
              setDataState({ ...dataState, lastname: e.target.value })
            }
          />
        </Col>
      </Row>
      <GIconInput
        label="Mobile number"
        type="mobile"
        name="mobile"
        placeholder="Enter mobile number"
        value={dataState.mobile}
        onChange={(e) => setDataState({ ...dataState, mobile: e.target.value })}
      />
      <GIconInput
        label="Email"
        type="email"
        name="email"
        placeholder="Enter email address"
        value={dataState.email}
        onChange={(e) => setDataState({ ...dataState, email: e.target.value })}
      />
      <GPasswordInput
        label="Password"
        name="password"
        placeholder="Enter Password"
        value={dataState.password}
        onChange={(e) =>
          setDataState({ ...dataState, password: e.target.value })
        }
      />

      <GPasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Enter Confirm Password"
        value={dataState.confirmpassword}
        onChange={(e) =>
          setDataState({ ...dataState, confirmpassword: e.target.value })
        }
      />

      <GSpacing marginTop="10px" marginBottom="10px">
        <GCheckbox
          name="remember"
          id="remember"
          checked={dataState.agree}
          onChange={(e) =>
            setDataState({ ...dataState, agree: e.target.checked })
          }
          label="I Agree to the Terms of Service and Privacy Policy"
        />
      </GSpacing>

      <GButton onClick={() => sendForm()} width="100%">
        Create an Account
      </GButton>
    </LoginWrapper>
  );
};

export default GSignup;
