import React, { useState } from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import GPasswordInput from "../../../Components/GComponents/GPasswordInput";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";
import Auth from "../../../Helpers/Auth/Auth";

const CustomerChangePassword = () => {
  const [dataState, setDataState] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const clearState = () => {
    setDataState({
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
    });
  };

  const sumbitChangePassword = (data) => {
    try {
      HTTP.post(API.changePassword, data, true, Auth.getToken()).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          clearState();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submit = () => {
    try {
      if (dataState) {
        if (dataState.oldpassword.trim().length < 8)
          return AlertModal.show(
            "Current password length should be 8 character long.",
            "oops!"
          );
        if (dataState.newpassword.trim().length < 8)
          return AlertModal.show(
            "New password length should be 8 character long. and contains minimum at least 01 symbol, 01 number, and 01 alphabet.",
            "oops!"
          );
        if (dataState.newpassword.trim() !== dataState.confirmpassword.trim())
          return AlertModal.show("Confirm password not matched.", "oops!");

        sumbitChangePassword(dataState);
      } else {
        AlertModal.show(
          "Please manage data state in change password form.",
          "oops!"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <h3 className="fBold">Change Password</h3>
              </div>

              <section className="pt25">
                <GPasswordInput
                  label="Current Password *"
                  placeholder="Enter current password"
                  value={dataState.oldpassword}
                  onChange={(e) =>
                    setDataState({ ...dataState, oldpassword: e.target.value })
                  }
                ></GPasswordInput>
                <GPasswordInput
                  label="New Password *"
                  placeholder="Enter new password"
                  value={dataState.newpassword}
                  onChange={(e) =>
                    setDataState({ ...dataState, newpassword: e.target.value })
                  }
                ></GPasswordInput>
                <GPasswordInput
                  label="Confirm New Password *"
                  placeholder="Confirm new password"
                  value={dataState.confirmpassword}
                  onChange={(e) =>
                    setDataState({
                      ...dataState,
                      confirmpassword: e.target.value,
                    })
                  }
                ></GPasswordInput>
                <div className="mt8">
                  <GAlign align="right">
                    <GButton onClick={submit}>Change Password</GButton>
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

export default CustomerChangePassword;
