import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { AuthMobileVerification } from "../../store/auth/mobileverification/actions";
import GButton from "../Layout/GButton";
import GImage from "../Layout/GImage/GImage";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { notify } from "react-notify-toast";
import GAlign from "../Layout/GAlign";
import { resendOtp } from "../../helpers/backend/index";
import { OTPVerifyStyle } from "./OTPVerifyStyle";

const OtpVerify = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [otp, setotp] = useState(null);
  const callbackState = (value) => {
    props.getStateFromComp(value);
    setotp(value);
  };

  const successMsg = (resp) => {
    if (resp.status === 200) {
      let myColor = { background: "green", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      if (location.pathname === "/salon/mobile-verification") {
        navigate("/salon/login");
      } else {
        navigate("/login");
      }
    }
    if (resp.status === 201) {
      let myColor = { background: "red", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
  };

  const handleFormSubmit = () => {
    const iData = {
      otp: otp,
      mobile: state === null ? null : state.mobile,
    };

    dispatch(AuthMobileVerification(iData, successMsg));
  };
  const successMsgResend = (resp) => {
    if (resp.status === 200) {
      let myColor = { background: "green", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if (resp.status === 201) {
      let myColor = { background: "red", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
  };

  const handleResend = () => {
    const iData = {
      username: state === null ? null : state.mobile,
    };

    //dispatch(AuthResendOtp(iData, successMsgResend));

    resendOtp(iData).then((res) => {
      if (res && res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
    });
  };
  return (
    <>
      <OTPVerifyStyle />
      <div className="text-center mx-auto otpWrapper radius5 mb25  mobWidth100 pt30 pb30 pl30 pr30">
        {props.iconImage && (
          <div className="mb30">
            <GImage src={props.iconImage} />
          </div>
        )}
        {props.heading && <h4 className="lb">{props.heading}</h4>}

        {props.text && <p className="text-center fs13">{props.text}</p>}
        {state !== null && (
          <p className="text-center fs13">
            You have got OTP on &nbsp; {state.mobile}
          </p>
        )}

        <div className="mb25 otpmodalnew_otpinput">
          <OtpInput
            value={otp}
            onChange={(e) => callbackState(e)}
            numInputs={4}
            separator={<span className="otpmodalnew_otpseprator"></span>}
          />
        </div>

        <GAlign align="between">
          <GButton onClick={handleResend}>Resend OTP</GButton>
          <GButton onClick={handleFormSubmit}>Verify</GButton>
        </GAlign>
      </div>
    </>
  );
};

export default OtpVerify;
