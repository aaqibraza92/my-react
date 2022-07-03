import React from "react";
import { Container } from "reactstrap";
import ResetPasswordAction from "../../Authentication/ResetPasswordAction";

const ResetPassword = (props) => {
  return (
    <>
      <Container className="pt_45 pb_45">
        <ResetPasswordAction />
      </Container>
    </>
  );
};

export default ResetPassword;
