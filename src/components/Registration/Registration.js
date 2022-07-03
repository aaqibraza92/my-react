import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Col, Container, Label, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import GSpacing from "../Layout/GSpacing";
import GButton from "../Layout/GButton";
import Select from "react-select";
import { notify } from "react-notify-toast";
import { checkMobAvailable, checkEmailAvailable } from "../../helpers/backend";
import { useNavigate } from "react-router-dom";
import FileUploadWithName from "../FileUploadWithName/FileUploadWithName";
import Svg from "../../assets/svg/Svg";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetMembershipList } from "../../store/admin/membershipNameList/actions";
import AddressForm from "../AddressForm/AddressForm";
import { RegistrationStyle } from "./RegistrationStyle";
import { useForm, Controller } from "react-hook-form";
import { salonRegistrationAction } from "../../store/salon/registration/action";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const registerOptions = {
  businessType: { required: "This is required" },
  interestedmembershipid: { required: "This is required" },
};
const shopListData = [
  { value: "Shop", label: "Shop" },
  { value: "Mobile", label: "Mobile" },
  { value: "Home", label: "Home" },
];

const Registration = (props) => {


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetMembershipList());
  }, [dispatch]);

  const memnershipName = useSelector((state) => {
    return (
      state &&
      state.getMembershipListsRedux.getMembershipLists &&
      state.getMembershipListsRedux.getMembershipLists
    );
  });
  const [membershipPlanlist, setmembershipPlanlist] = useState([]);
  useEffect(() => {
    var appendPlans = [];
    memnershipName &&
      memnershipName.map((element, idnex) => {
        appendPlans.push({
          value: element._id,
          label: element.planName,
        });
      });
    setmembershipPlanlist(appendPlans);
  }, [memnershipName]);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  document.body.dir = i18n.dir();
  const [profileimg, setprofileimg] = useState(null);
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [agreeTerms, setagreeTerms] = useState(false);
  const [dataState, setDataState] = useState({
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const [Coordinates, setDataCoordinate] = useState();

  const getCallback = (val) => {
    setprofileimg(val[0]);
  };

  const checkEmail = (data) => {
    const iData = {
      email: data,
    };
    checkEmailAvailable(iData).then((res) => {
      if (res && res.status && res.status === 201) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message, "custom", 4000, myColor);

        setemail("");
      }
      if (res && res.status && res.status === 202) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show(
          "Oops! Please enter correct email",
          "custom",
          4000,
          myColor
        );
        setemail("");
      }
    });
  };

  const checkMobile = (data) => {
    const iData = {
      mobile: data,
    };
    checkMobAvailable(iData).then((res) => {
      if (res && res.status && res.status === 201) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message, "custom", 4000, myColor);
      }
      if (res && res.status && res.status === 202) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show(
          "Oops! Please enter correct mobile",
          "custom",
          4000,
          myColor
        );
        setmobile("");
      }
      if (res && res.status && res.status === 200) {
      }
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setDataState({ ...dataState, [name]: value });
  };


  const actionCallback = (message) => {
    if (message.status === 200) {
      let myColor = { background: "#4bb543", text: "#FFFFFF" };
      notify.show(message.message, "custom", 5000, myColor);
      navigate("/salon/mobile-verification", { state: { mobile: mobile } });
    }
    if (message.status === 202) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      notify.show("Email or Mobile is already in use", "custom", 5000, myColor);
    }
  };



  const onSubmit = (data) => {
    if (data?.country && data?.state && data?.city) {
      var addressGet = data.city + data.state + data.country;
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          addressGet +
          "&key=AIzaSyB0lHA_hBW6VaJFxruQ2oR0a3prK-i7d5A"
      )
        .then((response) => response.json())

        .then((latLogAddress) => {
          setDataCoordinate(latLogAddress);
        });
    }
    const iData = new FormData();
    iData.append("salonName", data?.salonName);
    iData.append("firstName", data?.firstName);
    iData.append("lastName", data?.lastName);
    iData.append("image", data?.image[0], data?.image[0]?.name);
    iData.append("mobile", data?.mobile);
    iData.append("email", data?.email);
    iData.append("postalCode", "452001");
    iData.append("password", data?.password);
    iData.append("acceptTermsPolicy", data?.acceptTermsPolicy);
    iData.append("acceptMarketingEmail", data?.acceptMarketingEmail);
    iData.append("address", data?.address);
    iData.append("country", data?.country);
    iData.append("state", data?.state);
    iData.append("city", data?.city);
    iData.append("employees", data?.employees);
    iData.append("businessType", data?.businessType?.value);
    iData.append("interestedmembershipid", data?.interestedmembershipid?.value);
    // iData.append(
    //   "coordinates[0]","22.7195687"
    // );
    // iData.append(
    //   "coordinates[1]","75.8577258"`
    // );
    iData.append(
      "coordinates[0]",
      Coordinates.results[0].geometry.location.lat
    );
    iData.append(
      "coordinates[1]",
      Coordinates.results[0].geometry.location.lng
    );
    dispatch(salonRegistrationAction(iData, actionCallback));

  };

  return (
    <>
      <LoginWrapper className="pt_45 pb_45">
        <RegistrationStyle agreeTerms={agreeTerms} />
        <section className="bg_registration">
          <Container className="sign_up_main">
            <Row className="align-items-center justify-content-center">
              <Col lg={6} md={12}>
                <div className="text-center mb40 mobMb20">
                  <h2 className="fs45 mobFs20 mb20  mobMb10 fw600 lm">
                    {t("Work")}
                  </h2>
                  <p className="mb0 fs15 colorRed">{t("Presentation")}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb20">
                    <Label>{t("Salonname")}</Label>
                    <input
                      className="inputStyle"
                      placeholder={t("Salonname")}
                      {...register("salonName", {
                        required: true,
                      })}
                    />
                    {errors.salonName && (
                      <p className="redColor fs14 mt5">This is required.</p>
                    )}
                  </div>

                  <Row>
                    <Col md={6}>
                      <div className="mb20">
                        <Label>{t("Firstname")}</Label>
                        <input
                          className="inputStyle"
                          placeholder={t("Firstname")}
                          {...register("firstName", {
                            required: true,
                          })}
                        />
                        {errors.firstName && (
                          <p className="redColor fs14 mt5">This is required.</p>
                        )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb20">
                        <Label>{t("Lastname")}</Label>
                        <input
                          className="inputStyle"
                          placeholder={t("Lastname")}
                          {...register("lastName", {
                            required: true,
                          })}
                        />
                        {errors.lastName && (
                          <p className="redColor fs14 mt5">This is required.</p>
                        )}
                      </div>
                    </Col>

                    <Col md={12}>
                      <FileUploadWithName
                        label={t("Profilephoto")}
                        iconright={Svg.input}
                        msgtopRight="Can upload a photo upto 5MB"
                        id="profilephoto"
                        name="image"
                        callback={getCallback}
                        register={register}
                        errors={errors}
                      />
                    </Col>
                    <Col md={6}>
                      <div className="mb20">
                        <Label className="fs15 mb8">{t("Email")}</Label>
                        <input
                          className="inputStyle"
                          placeholder={t("Email")}
                          {...register("email", {
                            required: "This is required",
                            pattern: {
                              value:
                                /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/i,
                              message: "This is invalid",
                            },
                          })}
                        />
                        {errors?.email ? (
                          <>
                            {errors.email.type === "required" && (
                              <p className="redColor fs14 mt5">
                                {errors.email.message}
                              </p>
                            )}
                            {errors.email.type === "pattern" && (
                              <p className="redColor fs14 mt5">
                                {errors.email.message}
                              </p>
                            )}
                          </>
                        ) : null}
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="mb20">
                        <Label className="fs15 mb8">{t("Mobile")}</Label>
                        <input
                          className="inputStyle"
                          placeholder={t("Mobile")}
                          {...register("mobile", {
                            required: "This is required",
                            pattern: {
                              value: /^\d*[]?\d{0,1}$/i,
                              message: "This is invalid",
                            },
                            minLength: {
                              value: 10,
                              message: "Please enter 10 numbers",
                            },
                          })}
                        />
                        {errors?.mobile ? (
                          <>
                            {errors.mobile.type === "required" && (
                              <p className="redColor fs14 mt5">
                                {errors.mobile.message}
                              </p>
                            )}
                            {errors.mobile.type === "pattern" && (
                              <p className="redColor fs14 mt5">
                                {errors.mobile.message}
                              </p>
                            )}
                            {errors.mobile.type === "minLength" && (
                              <p className="redColor fs14 mt5">
                                {errors.mobile.message}
                              </p>
                            )}
                          </>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb20">
                        <Label className="fs15 mb8">Address</Label>
                        <input
                          className="inputStyle"
                          placeholder="Address"
                          {...register("address", {
                            required: true,
                          })}
                        />
                        {errors.lastname && (
                          <p className="redColor fs14 mt5">This is required.</p>
                        )}
                      </div>
                    </Col>
                    <Col md={12}>
                      <Row>
                        <AddressForm
                          col={6}
                          dataState={dataState}
                          handleInputChange={handleInputChange}
                          errors={errors}
                          register={register}
                        />
                      </Row>
                    </Col>

                    <Col md={12}>
                      <div className="mb20">
                        <Label className="fs15 mb8">{t("Employee")}</Label>
                        <input
                          className="inputStyle"
                          placeholder={t("Employee")}
                          {...register("employees", {
                            required: "This is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Please insert number",
                            },
                          })}
                        />
                        {errors?.employees ? (
                          <>
                            {errors.employees.type === "required" && (
                              <p className="redColor fs14 mt5">
                                {errors.employees.message}
                              </p>
                            )}
                            {errors.employees.type === "pattern" && (
                              <p className="redColor fs14 mt5">
                                {errors.employees.message}
                              </p>
                            )}
                          </>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb20">
                        <Label htmlFor="password" className="fs15 mb8">
                          Enter password
                        </Label>
                        <input
                          type="password"
                          className="inputStyle"
                          placeholder="Enter password"
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
                    </Col>

                    <Col md={6}>
                      <div className="mb20">
                        <Label htmlFor="confirmPassword" className="fs15 mb8">
                          {t("ConfirmPassword")}
                        </Label>
                        <input
                          type="password"
                          className="inputStyle"
                          placeholder={t("ConfirmPassword")}
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
                    </Col>

                    <Col md={12} className="mb15">
                      <label className="fs16 mb8">{t("SalonType")}</label>
                      <Controller
                        name="businessType"
                        control={control}
                        defaultValue=""
                        rules={registerOptions.businessType}
                        render={({ field }) => (
                          <Select
                            options={shopListData}
                            {...field}
                            label="Text field"
                            className="w-100 themeSelect "
                            classNamePrefix="themeSelect"
                          />
                        )}
                      />
                      {errors?.businessType && (
                        <p className="redColor fs14 mt5">
                          {errors?.businessType && errors.businessType.message}
                        </p>
                      )}
                    </Col>

                    <Col md={12} className="mb15">
                      <label className="mb8 fs15">
                        Interested Membership Plan
                      </label>
                      <Controller
                        name="interestedmembershipid"
                        control={control}
                        defaultValue=""
                        rules={registerOptions.interestedmembershipid}
                        render={({ field }) => (
                          <Select
                            options={membershipPlanlist}
                            {...field}
                            label="Text field"
                            className="w-100 themeSelect "
                            classNamePrefix="themeSelect"
                          />
                        )}
                      />
                      {errors?.interestedmembershipid && (
                        <p className="redColor fs14 mt5">
                          {errors?.interestedmembershipid &&
                            errors.interestedmembershipid.message}
                        </p>
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <div className="themeCheckbox">
                        <input
                          id="acceptTermsPolicy"
                          type="checkbox"
                          {...register("acceptTermsPolicy")}
                        />
                        <Label
                          htmlFor="acceptTermsPolicy"
                          className=""
                          onClick={() => setagreeTerms(!agreeTerms)}
                        >
                          {t("AgreePolicy")}
                        </Label>
                        {errors?.acceptTermsPolicy && (
                          <p className="redColor fs14 mt5">This is required</p>
                        )}
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="themeCheckbox">
                        <input
                          id="acceptMarketingEmail"
                          type="checkbox"
                          placeholder="Agree"
                          {...register("acceptMarketingEmail")}
                        />
                        <Label htmlFor="acceptMarketingEmail" className="">
                          {t("Agree")}
                        </Label>
                      </div>
                    </Col>

                    <Col md={12}>
                      <GButton
                        type="submit"
                        //onClick={onSubmitHandler}
                        className={`${
                          agreeTerms ? "" : "disableButton"
                        } w-100 pointerdfasEvents`}
                      >
                        {t("CreateAccount")}
                      </GButton>

                    </Col>

                    <GSpacing marginTop="25px">
                      <p className="fs14 mb0 colorLightGrey text-center">
                        {t("Captcha")}
                      </p>
                    </GSpacing>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </LoginWrapper>
    </>
  );
};

export default Registration;
