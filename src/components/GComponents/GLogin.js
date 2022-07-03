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
import AlertModal from "../AlertModal/AlertModal";
import $ from "jquery";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GLogin = (props) => {
  const [dataState, setDataState] = useState(
    props.state || {
      userid: "",
      password: "",
    }
  );

  const submitCall = () => {
    if (dataState) {
      if (dataState.userid.length < 4) {
        return AlertModal.show("Please enter a valid email address.");
      }
      if (dataState.password.length < 8) {
        return AlertModal.show(
          "To protect your account your password needs to be between 8 and 30 character long and contains 1 upper-case letter and a number."
        );
      }
    } else {
      return alert(
        "please set state in login component. component will use props.state to manage userid and password."
      );
    }
    if (props.submitCall) {
      props.submitCall(dataState);
    }
  };

  return (
    <LoginWrapper>
      <h3>Log In Account</h3>
      <GIconInput
        id="useridinput"
        label="Email *"
        type="email"
        name="email"
        placeholder="Enter email address"
        value={dataState.userid}
        onChange={(e) => setDataState({ ...dataState, userid: e.target.value })}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            $("#paswwordinput").focus();
          }
        }}
      />

      <GPasswordInput
        id="paswwordinput"
        label="Password"
        name="password"
        placeholder="Enter password"
        value={dataState.password}
        onChange={(e) =>
          setDataState({ ...dataState, password: e.target.value })
        }
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            submitCall();
          }
        }}
      />

      <GSpacing marginTop="10px" marginBottom="10px">
        <GAlign align="between">
          <div>
            <GCheckbox name="remember" id="remember" label="Remember me" />
          </div>

          <div>
            <GLink to="/forget" text="Forgot Password" />
          </div>
        </GAlign>
      </GSpacing>

      <GButton onClick={submitCall} width="100%">
        Log In
      </GButton>
    </LoginWrapper>
  );
};

export default GLogin;
