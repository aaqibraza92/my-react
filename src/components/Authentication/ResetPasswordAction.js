import React, { useEffect } from "react";
import { CardTitle, Col, Container, Label, Row } from "reactstrap";
import GButton from "../Layout/GButton";
import GImage from "../Layout/GImage/GImage";
import Img from "../../assets/Img/Img";
import Auth from "../../helpers/Auth/Auth";
import { useParams } from "react-router-dom";
import { postResetPassword } from "../../helpers/backend/index";
import { notify } from "react-notify-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUserProfile } from "../../store/auth/profile/actions";
import { useForm } from "react-hook-form";
const ResetPasswordAction = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  let { id } = useParams();
  Auth.setToken(id);
  useEffect(() => {
    dispatch(authUserProfile());
  }, []);

  let userInfo = useSelector(
    (state) => state.authInfo && state.authInfo.authInfo.email
  );


  const navigate = useNavigate();

  const onSubmit = (val) => {
    let myColor = { background: "red", text: "#FFFFFF" };
    if (val.password !== val.confirmPassword) {
      notify.show(
        "Oops! Password and confirm password not Match",
        "custom",
        4000,
        myColor
      );
    } else if (val.password === "") {
      notify.show("Oops! Password Required", "custom", 4000, myColor);
    } else {
      postResetPassword(val).then((res) => {
        if (res && res.status && res.status === 200) {
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(res.message, "custom", 4000, myColor);
          setTimeout(() => {
            navigate("/thankyou");
          }, 1000);
        }
        if (res && res.status && res.status === 202) {
          let myColor = { background: "red", text: "#FFFFFF" };
          notify.show(
            "Oops! This account already in use, Please check email or mobile fields",
            "custom",
            4000,
            myColor
          );
        } else {
          notify.show("Oops! " + res.message, "custom", 4000, myColor);
        }
      });
    }
  };
  return (
    <>
      <Container className="pt_45 pb_45">
        <Row>
          <Col className="m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              <div className=" text-center">
                <GImage src={Img.lock} />
              </div>
              <CardTitle tag="h3" className="pt25 pb15 text-center">
                Set new password
              </CardTitle>
              <div className=" text-center">
                <span> Change password for </span>
              </div>

              <p className="lm text-center"> {userInfo}</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb20">
                  <Label htmlFor="password" className="fs15 mb8">
                    New password
                  </Label>
                  <input
                    type="password"
                    className="inputStyle"
                    placeholder="Enter Password"
                    {...register("password", {
                      required: "This is required",
                      minLength: {
                        value: 6,
                        message: "Password should be 6 character long",
                      },
                    })}
                  />
                  {errors?.password ? (
                    <>
                      {errors.password.type === "required" && (
                        <p className="redColor fs14 mt5">
                          {errors.password.message}
                        </p>
                      )}
                      {errors.password.type === "minLength" && (
                        <p className="redColor fs14 mt5">
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  ) : null}
                </div>

                <div className="mb20">
                  <Label htmlFor="confirmPassword" className="fs15 mb8">
                  Re-Enter new password
                  </Label>
                  <input
                    type="password"
                    className="inputStyle"
                    placeholder="Enter Confirm Password"
                    {...register("confirmPassword", {
                      required: "This is required",
                      minLength: {
                        value: 6,
                        message: "Password should be 6 character long",
                      },
                    })}
                  />
                  {errors?.confirmPassword ? (
                    <>
                      {errors.confirmPassword.type === "required" && (
                        <p className="redColor fs14 mt5">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                      {errors.confirmPassword.type === "minLength" && (
                        <p className="redColor fs14 mt5">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </>
                  ) : null}
                </div>
                <GButton
                type="submit"
                className="w-100 text-center mt-2"
               // onClick={onSubmit}
              >
                Change Password
              </GButton>
              </form>
             
            
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPasswordAction;
