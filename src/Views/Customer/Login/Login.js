/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GLogin from "../../../Components/GComponents/GLogin";
import GSection from "../../../Components/GComponents/GSection";
import GSignup from "../../../Components/GComponents/GSignup";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GSwitchTab from "../../../Components/GComponents/GSwitchTab";
import GSectionTitle from "../../../Components/GSectionTitle";
import HTTP from "../../../Helpers/Api/Api";
import Auth from "../../../Helpers/Auth/Auth";
import AuthHelper from "../../../Helpers/Auth/AuthHelper";
import API from "../../../Helpers/Constants/Constants";

const Login = (props) => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
    if (Auth.isUserLoggedIn()) {
      if (AuthHelper.getUserRoleFromAuth() === "Customer") {
        history.push("/customer/dashboard");
      } else if (AuthHelper.getUserRoleFromAuth() === "Provider") {
        history.push("/provider/dashboard");
      } else if (AuthHelper.getUserRoleFromAuth() === "Admin") {
        history.push("/admin/king/dashboard");
      }
    }
  }, []);

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

  const submitLogin = (data) => {
    HTTP.post(API.login, data, false, "").then(
      (res) => {
        // if (res.message === "Please verify your mobile number.") {
        //   OTPModal.show("", res.data.mobile, verifyOTP, () => {}, resendOTP);
        // }
        if (
          res.message === "logged in successfully." ||
          res.message === "Please verify your mobile number."
        ) {
          console.log(res.data);
          Auth.setLoginAuth(res.data);
          Auth.setToken(res.data.token);
          if (res.data.role === "Customer") {
            history.push("/customer/dashboard");
          } else if (res.data.role === "Provider") {
            history.push("/provider/dashboard");
          } else if (res.data.role === "Admin") {
            AuthHelper.setAdminToken();
            history.push("/admin/king/dashboard");
          }
        } else {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const submitSignup = async (data) => {
    var result = false;
    var dataState = data;
    await HTTP.post(API.register, dataState, false, "").then(
      (res) => {
        if (res && res.status && res.status.toString() === "200") {
          //OTPModal.show("", dataState.mobile, verifyOTP, () => {}, resendOTP);
          setSelectedTab(1);
          result = true;
          return result;
        }
      },
      (err) => {
        console.log(err);
        result = true;
        return result;
      }
    );
    return result;
  };

  return (
    <GSection>
      <Container>
        <Row>
          <Col lg={6} xl={6} md={6}>
            <div className="maxWidth80">
              <GSectionTitle
                titleSize="28px"
                title="#1 Trinidad and Tobago ondemand Service Provider platform for cleaning, painting & more."
              />

              <img src={Img.login} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col lg={6} xl={6} md={6}>
            <GSpacing padding="40px" paddingTop="20px">
              <GSection background="#fff" minHeight="inherit">
                <GSpacing paddingLeft="30px" paddingRight="30px">
                  <GSwitchTab
                    align="right"
                    switchTab={selectedTab}
                    firstContent={<GLogin submitCall={submitLogin} />}
                    secondContent={<GSignup submitCall={submitSignup} />}
                  />
                </GSpacing>
              </GSection>
            </GSpacing>
          </Col>
        </Row>
      </Container>
    </GSection>
  );
};

export default Login;
