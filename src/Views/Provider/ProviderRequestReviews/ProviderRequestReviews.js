import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// import ProviderBusinessAside from "../ProviderBusinessAside";
import Svg from "../../../Assets/Svg/Svg";
// import "./BusinessReviews.scss";
// import CmnInput from "../../../Components/CmnInput/CmnInput";
// import CmnButton from "../../../Components/CmnButton/CmnButton";
// import CmnTextarea from "../../../Components/CmnTextarea/CmnTextarea";
// import { TagsInput } from "react-tag-input-component";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import "./ProviderRequestReviews.css";

const ProviderRequestReviews = () => {
  const [refer, setrefer] = useState({
    email: [],
    subject: "",
    message: "",
    gotoPage: "",
  });

  // const saveData=()=>{
  //   try{
  //    const iData= {
  //       "email" : refer.email,
  //       "subject" : refer.subject,
  //       "message" : refer.message
  //   }
  //   if(refer.email.length === 0){
  //      return AlertModal.show("Please fill email field","Fill Required Fields");
  //   }
  //   if(refer.subject.trim().length === 0){
  //     return AlertModal.show("Please fill subject field","Fill Required Fields");
  //   }
  //   if(refer.message.trim()===""){
  //     return AlertModal.show("Please fill message field","Fill Required Fields");
  //   }
  //   if(refer.message.trim().length < 10){
  //     return AlertModal.show("Please fill more than 10 characters","Fill Required Fields");
  //   }
  //   HTTP.post(API.referralBonusEmail,iData,true,false,Auth.getToken()).then((res)=>{
  //     console.log("res",res);
  //     if(res && res.status && res.status===200){
  //       GLocalStorage.Remove("c-bref");
  //       return AlertModal.show(
  //         <ZaruPro />,"",() => {
  //           setrefer({gotoPage: "provider/dashboard" })}, "xs"
  //       )
  //       //return AlertModal.show("Your mail has been sent.","Success!");

  //     }
  //     else if(res && res.status && res.status===201){
  //       return AlertModal.show("Please enter proper email","Oops!");
  //     }
  //   })
  //   }catch(e){
  //     console.log(e,"error in referal bonus page")
  //   }
  // }

  return (
    <div>
      <section className="bgLightOrange pt60 pb60">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <ProviderBusinessAside />
            </Col>
            <Col lg={9} md={9} xl={9}>
              <section className="bgWhite radius mb30 border">
                <div className="bgBlue mb30">
                  <div className="d-flex align-items-center justify-content-between pl30 pr30 pt30 pb30">
                    <h1 className="fs32 fBold colorWhite width51 reviews-head">
                      Request reviews from your customers for business
                    </h1>
                    <div className="reviews-head-svg">{Svg.star}</div>
                  </div>
                </div>
                <div className="pl30 pr30">
                  <div className="mb15 position-relative"></div>
                  <GIconInput
                    className="colorPara"
                    label="Enter Email Addresses Manually"
                    type="email"
                    placeholder="Separate each email address with a comma."
                    value={refer.subject}
                    onChange={(e) =>
                      setrefer({ ...refer, subject: e.target.value })
                    }
                  />
                  <GIconInput
                    className=" colorPara"
                    label="Subject"
                    type="text"
                    placeholder="Robin Rathore  wants you to join BlueBis"
                    value={refer.subject}
                    onChange={(e) =>
                      setrefer({ ...refer, subject: e.target.value })
                    }
                  />
                  <GTextarea
                    className="colorPara "
                    label="Message "
                    placeholder="Robin Rathore thinks that Zaaruu  would be a great way for you to find new customers."
                    value={refer.message}
                    onChange={(e) =>
                      setrefer({ ...refer, message: e.target.value })
                    }
                  />
                  <p className="fs14 colorPara">
                    Note: Each person will receive a separate email. This is not
                    a group email.
                  </p>

                  <div className="d-flex justify-content-end mb35">
                    {/* <GButton
                      type="noBg"
                      text="Skip"
                      className="mr10 bgLightOrange pl30 pr30 radius borderGrey"
                      onClick={() =>
                        AlertModal.show(
                          <ZaruPro />,
                          "",
                          () => {
                            setrefer({ gotoPage: "provider/dashboard" })
                          },
                          "xs"
                        )
                      }
                    /> */}
                    <span className="mr10">
                      <GButton backgroundColor="#fff" color="#000">
                        Skip
                      </GButton>
                    </span>
                    <GButton>Send Invite</GButton>
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

export default ProviderRequestReviews;

const ZaruPro = () => {
  return (
    <>
      <section className="text-center">
        <div className="mb20">{Svg.circleCheckedBlank}</div>
        <h4 className="fBold fs20 colorBlack">
          Congratulations! You are now a Zaaru pro!
        </h4>
        <p>
          You will now start to receive job opportunities that match your
          profile. Pick the jobs that you want and start winning customers!
        </p>
      </section>
    </>
  );
};
