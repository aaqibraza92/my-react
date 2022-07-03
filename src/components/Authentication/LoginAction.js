import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Col, Label, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import GSpacing from "../Layout/GSpacing";
import GAlign from "../Layout/GAlign";
import GButton from "../Layout/GButton";
import GCheckbox from "../Layout/GCheckbox";
import GLink from "../Layout/GLink";
import { notify } from "react-notify-toast";
import { postAuthLogin } from "../../store/auth/login/actions";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;
const LoginAction = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState(
    props.state || {
      userid: "",
      password: "",
    }
  );
  const location = useLocation();

  const callback = async (resp) => {
    if (resp && resp.status && resp.status === 201) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if (resp && resp.status && resp.status === 204) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      navigate("/mobile-verification", { state: { mobile: resp.data.mobile } });
    }
    if (resp && resp.status && resp.status === 200) {
      Cookies.set("loginSuccess", resp.data);
      if (resp.data && resp.data.mobileVerified === false) {
        navigate("/salon/mobile-verification", {
          state: { mobile: dataState.userid },
        });
      }
      switch (resp.user.userType) {
        case "Salon":
          navigate("/salon/setting/about-company");
          break;
        case "Admin":
          navigate("/admin");
          break;
        default:
          navigate("/");
          break;
      }
    }
    if (resp && resp.status && resp.status === 205) {
      navigate("/wait-for-approval", { state: { msg: resp.message } });
    }
    if (resp && resp.status && resp.status === 203) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      if (location.pathname === "/salon/login") {
        navigate("/salon/mobile-verification", {
          state: { mobile: dataState.userid },
        });
      } else {
        navigate("/mobile-verification", {
          state: { mobile: dataState.userid },
        });
      }
    }
    if (resp && resp.status && resp.status === 204) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      if (location.pathname === "/salon/login") {
        navigate("/salon/mobile-verification", {
          state: { mobile: dataState.userid },
        });
      } else {
        navigate("/mobile-verification", {
          state: { mobile: dataState.userid },
        });
      }
    }
  };
  const onChange = (e) => {
    const input = e.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    e.persist();
    setDataState({ ...dataState, [input.name]: value });
  };

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const userid = rememberMe ? localStorage.getItem("userid") : "";
    const password = rememberMe ? localStorage.getItem("password") : "";
    setDataState({ userid, rememberMe, password });
  }, []);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const onSubmit = (data) => {
    try {
      const { rememberMe } = dataState;
      localStorage.setItem("rememberMe", rememberMe);
      localStorage.setItem("userid", rememberMe ? dataState.userid : "");
      localStorage.setItem("password", rememberMe ? dataState.password : "");
      dispatch(postAuthLogin(data, callback));
    } catch (e) {}
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb20">
          <Label htmlFor="email">Mobile number/Email</Label>
          <input
            className="inputStyle"
            placeholder="Mobile number/Email *"
            {...register("username", {
              required: "Email is required",
              pattern: {
                value:
                  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/i,
                message: "Username is invalid",
              },
            })}
          />
          {errors?.username ? (
            <>
              {errors.username.type === "required" && (
                <p className="redColor fs14 mt5">{errors.username.message}</p>
              )}
              {errors.username.type === "pattern" && (
                <p className="redColor fs14 mt5">{errors.username.message}</p>
              )}
            </>
          ) : null}
        </div>

        <div className="mb20">
          <Label htmlFor="password">Enter password</Label>
          <input
            type="password"
            className="inputStyle"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be 6 character long",
              },
            })}
          />
          {errors?.password ? (
            <>
              {errors.password.type === "required" && (
                <p className="redColor fs14 mt5">{errors.password.message}</p>
              )}
              {errors.password.type === "minLength" && (
                <p className="redColor fs14 mt5">{errors.password.message}</p>
              )}
            </>
          ) : null}
        </div>

        <LoginWrapper>
          <Row>
            <Col md={12}>
              <GSpacing marginTop="10px" marginBottom="10px">
                <GAlign align="between">
                  <div>
                    <GCheckbox
                      name="rememberMe"
                      onChange={onChange}
                      checked={dataState.rememberMe}
                      id="remember"
                      label="Remember me"
                    />
                  </div>

                  <div>
                    {/* {location.pathname === "/salon/login" ? (
                    <GLink to="/salon/forgot-password" text="Reset Password" />
                  ) : (
                    <GLink to="/reset" text="Forgot Password" />
                  )} */}

                    <GLink to="/reset" text="Forgot Password" />
                  </div>
                </GAlign>
              </GSpacing>
            </Col>

            <Col md={12}>
              <GButton type="submit" width="100%">
                Log In
              </GButton>
            </Col>
            <Col md={12} className="text-center">
              <p className="mb-0 mt25">
                Don't have an account ?
                {location.pathname === "/salon/login" ? (
                  <GLink to="/become-provider" text="Sign up" />
                ) : (
                  <GLink to="/sign-up" text="Sign up" />
                )}
              </p>
            </Col>
          </Row>
        </LoginWrapper>
      </form>
  );
};

export default LoginAction;
