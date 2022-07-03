import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
import "./ProviderMedia.css";
import GButton from "../../../Components/GComponents/GButton";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GFileInput from "../../../Components/GComponents/GFileInput";
import CmnFileUploadFile from "../../../Components/CmnFileUploadFile/CmnFileUploadFile";
// import HTTP from "../../../Helpers/Api/Api";
// import API from "../../../Helpers/Constants/Constants";
// import Auth from "../../../Helpers/Auth/Auth";
// import GLocalStorage from "../../../Helpers/Global/GLocalStorage";

const ProviderMedia = () => {
  const [bLogo, setBLogo] = useState(null);
  const [multiImg, setmultiImg] = useState([]);
  const [gotonext, setgotonext] = useState(false);

  const getUploadedImgState = (data) => {
    if (data !== null) {
      setmultiImg(data);
    }
  };

  // const saveData = () => {
  //   try {
  //     const iData = new FormData();
  //     iData.append("logoimage", bLogo);

  //     if (multiImg.length > 0) {
  //       multiImg.forEach((f, i) => {
  //         console.log("loop", f.file);
  //         iData.append("demoworks", f.file);
  //       });
  //     } else {
  //       iData.append("demoworks", []);
  //     }

  //     const businessID = JSON.parse(GLocalStorage.Get("c-bref"));
  //     const completeUrl = API.businessUploadDemo + businessID;
  //     HTTP.put(completeUrl, iData, true, false, Auth.getToken()).then((res) => {
  //       if(res && res.status && res.status===200){
  //         setgotonext(true);
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e, "Business Media");
  //   }
  // };

  return (
    <div>
      <section className="bgLightOrange pt60 pb60">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <ProviderBusinessAside />
            </Col>
            <Col lg={9} md={9} xl={9}>
              <section className="bgWhite pt30 pb30 radius mb30 border">
                <div className="pl30 pr30">
                  <div className="mb8">{Svg.backarrow}</div>
                  <h3 className="fs20 colorBlack">Business Logo</h3>
                  <p className="fs16 mb30 colorPara">
                    You want new customers fast. So we made it easy and It is a
                    long established fact that a reader will be distracted by
                    the readable content of a page .
                  </p>

                  <div className="text-center ">
                    {bLogo !== null && (
                      <div className="mb20 w120 h128 d-flex align-items-center flex-wrap justify-content-center mx-auto">

                        <img
                          src={URL.createObjectURL(bLogo)}
                          alt=""
                          className="radius100 img-fluid height100"
                        />
                      </div>
                    )}

                    <div className="d-flex align-items-center flex-wrap justify-content-center mb30">
                      <label
                        htmlFor="busLogo"
                        className="d-flex align-items-center flex-wrap justify-content-center flex-column"
                      >
                        {bLogo === null && (
                          <div className="pointer busLogoLabel d-flex align-items-center flex-wrap justify-content-center radius100 mb20">
                            {Svg.plus}
                          </div>
                        )}

                        <GFileInput
                          type="file"
                          name="busLogo"
                          id="busLogo"
                          className="busLogo d-none"
                          accept="image/*"
                          onChange={(e) => setBLogo(e.target.files[0])}
                        />
                        <div className="pointer uploadBlack btnTheme btnBlack d-flex align-items-center flex-wrap ">
                          {bLogo === null ? (
                            <span className="mr15"> {Svg.upload}</span>
                          ) : (
                            ""
                          )}
                          <span> {bLogo === null ? "Upload" : "Change"}</span>
                        </div>
                      </label>
                    </div>

                    <h3 className="fs18 colorBlack mb10 fBold">
                      Tips for a high quality profile picture:
                    </h3>
                    <p className="fs16 width70 mx-auto mb20 b-media-para colorPara">
                      Check that the photo is good enough and make sure your
                      face is visible. We will then verify your photo.
                    </p>

                    <div className="d-flex width40 mx-auto justify-content-between mb20 b-media-center-img">
                      <div className="">
                        <img
                          src={Img.group55489}
                          alt=""
                          className="radius100 w80"
                        />
                      </div>
                      <div className="">
                        <img
                          src={Img.group55489}
                          alt=""
                          className="radius100 w80"
                        />
                      </div>
                      <div className="">
                        <img
                          src={Img.group55489}
                          alt=""
                          className="radius100 w80"
                        />
                      </div>
                    </div>
                    <p className="fs16">Examples providers</p>
                  </div>
                </div>
                <div className="bBottom mb20"></div>
                <div className="pl30 pr30">
                  <h3 className="fs20 colorBlack mb20">
                    Upload Demos of Your Work
                  </h3>
                  <p className="fs16 colorPara">
                    Seeing is believing show off you skills and win customers
                    trust.
                  </p>

                  <section className="text-center bgGrey pt80 pb80">
                    <div>
                      <label htmlFor="busLogo" className="fs16 colorPara">
                        {bLogo === null && (
                          <div className="pointer radius100 mb20">
                            {Svg.plus}
                          </div>
                        )}
                        <GFileInput
                          type="file"
                          name="busLogo"
                          id="busLogo"
                          className="busLogo d-none"
                          accept="image/*"
                          onChange={(e) => setBLogo(e.target.files[0])}
                        />
                        Upload File
                      </label>
                    </div>
                  </section>

                  <div className="d-flex justify-content-end mt20">
                    <GButton>Continue</GButton>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProviderMedia;
