import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./ProviderUserProfile.css";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GIconInput from "../../../Components/GComponents/GIconInput";
import Svg from "../../../Assets/Svg/Svg";
import "react-datepicker/dist/react-datepicker.css";
import ProviderAccountAside from "../ProviderAccountAside/ProviderAccountAside";

import HTTP, { Notify } from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";
import Auth from "../../../Helpers/Auth/Auth";
import LoadinMsg from "../../../Components/LoadingModal/LoadingMsg";
import Global from "../../../Helpers/Global/Global";
import GImageUpload from "../../../Components/GComponents/GImageUpload/GImageUpload";

const ProviderUserProfile = () => {
  const [showProgress, setShowProgress] = useState(true);
  const [profileImage, setprofileImage] = useState(null);
  const [dataState, setdataState] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    dob: "",
    offersAccepted: false,
  });
  useEffect(() => {
    loadData().then((res) => {
      setShowProgress(false);
    });
  }, []);

  const loadData = async () => {
    try {
      await HTTP.post(
        API.getProviderInfo,
        {},
        true,
        Auth.getToken(),
        false
      ).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          console.log(res);
          setdataState({
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            mobile: res.data.mobile,
            email: res.data.email,
            dob: Global.Date(res.data.dob),
            offersAccepted: res.data.offersAccepted,
          });
          setprofileImage({
            file: null,
            url: res.data.profileImage
              ? API.imageurl + res.data.profileImage
              : null,
          });
        }
      });
    } catch (e) {
      console.log(e, "Error in the Customer profile page");
    }
  };

  const updateData = async () => {
    try {
      await HTTP.post(
        API.updateUserProfile,
        dataState,
        true,
        Auth.getToken(),
        true
      ).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          Notify("Profile updated successfully.", false);
        }
      });
    } catch (e) {
      console.log(e, "Error in the Customer profile page");
    }
  };

  const updateImage = async (image) => {
    if (image) {
      var idata = new FormData();
      idata.append("image", image);
      HTTP.postimage(API.updateProfilePhoto, idata, true, Auth.getToken()).then(
        (res) => {
          if (res && res.status && res.status.toString() === "200") {
          }
        }
      );
    }
  };

  useEffect(() => {
    if (profileImage && profileImage.file) {
      updateImage(profileImage.file);
    }
  }, [profileImage]);

  return (
    <>
      {showProgress && (
        <div className="pageWrapper">
          <LoadinMsg message="Loading..." size="small" type="grow" />
        </div>
      )}
      {!showProgress && (
        <section className="pt60 pb60">
          <Container>
            <Row>
              <Col lg={4} md={4} xl={4}>
                <ProviderAccountAside />
              </Col>
              <Col lg={8} md={8} xl={8}>
                <div className="pb6 borBottom">
                  <h3 className="fBold">User Profile</h3>
                </div>

                <section className="pt25">
                  <div className="mb25">
                    <h4 className="fs22 mb25">Profile Image</h4>
                    <GImageUpload
                      id="userprofileimage"
                      getImage={setprofileImage}
                      setImageUrl={
                        profileImage && profileImage.url
                          ? profileImage.url
                          : null
                      }
                    />
                  </div>
                  <div className="">
                    <h4 className="fs22 mb25">Personal Information</h4>
                    <Row className="mb8">
                      <Col lg={6}>
                        <GIconInput
                          label="First Name *"
                          placeholder="Praveen"
                          className="mr20"
                          type="text"
                          value={dataState.firstname}
                          onChange={(e) =>
                            setdataState({
                              ...dataState,
                              firstname: e.target.value,
                            })
                          }
                        ></GIconInput>
                      </Col>
                      <Col lg={6}>
                        <GIconInput
                          label="Last Name *"
                          placeholder="Solanki"
                          type="text"
                          value={dataState.lastname}
                          onChange={(e) =>
                            setdataState({
                              ...dataState,
                              lastname: e.target.value,
                            })
                          }
                        ></GIconInput>
                      </Col>
                    </Row>
                  </div>
                  <GIconInput
                    marginBottom="8px"
                    label="Mobile Number"
                    type="number"
                    placeholder="9876 543 210"
                    value={dataState.mobile}
                    onChange={(e) =>
                      setdataState({
                        ...dataState,
                        mobile: e.target.value,
                      })
                    }
                    readOnly={true}
                    disabled={true}
                    iconRight={Svg.verify}
                  ></GIconInput>

                  <span className="user-email">
                    <GIconInput
                      marginBottom="8px"
                      label="Email *"
                      type="email"
                      placeholder="Example@gmail.com"
                      value={dataState.email}
                      onChange={(e) =>
                        setdataState({
                          ...dataState,
                          email: e.target.value,
                        })
                      }
                      readOnly={true}
                      disabled={true}
                      iconRight={Svg.pencil}
                    ></GIconInput>
                  </span>
                  <Row className="mb8">
                    <Col>
                      <div className="position-relative mb20">
                        <GIconInput
                          marginBottom="8px"
                          label="Date of Birth *"
                          type="date"
                          placeholder="2022-02-09"
                          value={Global.Date(dataState.dob)}
                          onChange={(e) =>
                            setdataState({
                              ...dataState,
                              dob: e.target.value,
                            })
                          }
                        ></GIconInput>
                      </div>
                    </Col>
                  </Row>

                  {/* For checkbox  */}
                  <GCheckbox
                    checked={dataState.offersAccepted}
                    onChange={(e) => {
                      setdataState({
                        ...dataState,
                        offersAccepted: e.target.checked,
                      });
                    }}
                    label="I want to receive marketing and promotional offers"
                    id="agree"
                  ></GCheckbox>
                  <Row className="mt20">
                    <GAlign align="right">
                      <span className="mr20">
                        <GButton
                          backgroundColor="#F7F8F9"
                          color="#20272B"
                          border="1px solid #E8E9E9"
                        >
                          Cancel
                        </GButton>
                      </span>
                      <GButton onClick={updateData}>Update Info</GButton>
                    </GAlign>
                  </Row>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default ProviderUserProfile;
