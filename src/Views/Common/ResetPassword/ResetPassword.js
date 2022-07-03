/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GPasswordInput from "../../../Components/GComponents/GPasswordInput";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";

export default function ResetPassword() {
  const { token } = useParams();
  const history = useHistory();
  const [dataState, setdataState] = useState({
    token: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (token) {
      setdataState({
        ...dataState,
        token: token,
      });
    }
  }, []);

  const clearState = () => {
    setdataState({
      token: "",
      password: "",
      confirmpassword: "",
    });
  };

  const submit = () => {
    try {
      if (dataState.password.trim().length < 8)
        return AlertModal.show(
          "Password should be minimum 8 character long and containe al least 1 number, 1 symbol, & 1 alphabet."
        );
      if (dataState.password.trim() !== dataState.confirmpassword.trim())
        return AlertModal.show("Confirm password not matched.");
      HTTP.post(API.resetPassword, dataState, false, "").then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          clearState();
          history.push("/login");
        }
      });
    } catch (e) {}
  };
  return (
    <section className="bgGrey pt30 pb30">
      <Row className="justify-content-center">
        <Col lg={3}>
          <div className="bgWhite pt30 pb30 pl20 pr20">
            <div className="text-center mb20">
              <h3>Reset Password</h3>
              <p className="fs16 colorPara">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
            </div>

            <GPasswordInput
              label="New password *"
              placeholder="Enter new password"
              value={dataState.password}
              onChange={(e) =>
                setdataState({
                  ...dataState,
                  password: e.target.value,
                })
              }
            />
            <GPasswordInput
              label="Re-Enter new password *"
              placeholder="Re-Enter new password"
              value={dataState.confirmpassword}
              onChange={(e) =>
                setdataState({
                  ...dataState,
                  confirmpassword: e.target.value,
                })
              }
            />
            <GButton
              text="Reset Password"
              type="square"
              className="w-100"
              onClick={submit}
            >
              Submit
            </GButton>
          </div>
        </Col>
      </Row>
    </section>
  );
}
