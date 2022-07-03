import React from "react";
import { Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GButton from "../../../Components/GComponents/GButton";

const ProviderFirstStepMessage = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <section className="bgWhite width50 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
            <div className="pt30 pb30 pr30 pl30 text-center">
              <img src={Img.group54493} alt="" className="img-fluid mb15" />
              <h4 className="fs22 colorBlack fw600 width40 mobWidth100 tabWidth100 tabLgWidth100 mx-auto mb15">
                You have completed the first step to grow your business.
              </h4>
              <p className="colorPara width68 mobWidth100 tabWidth100 tabLgWidth100 mx-auto mb30">
                Now let's make sure to complete your profile so you can win more
                tasks.
              </p>
              <GButton>Continue</GButton>
            </div>
          </section>
        </Container>
      </section>
      <BlubisCongratulationsMessage />
    </>
  );
};

export default ProviderFirstStepMessage;

const BlubisCongratulationsMessage = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <section className="bgWhite width50 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
            <div className="pt30 pb30 pr30 pl30 text-center width75 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
              <img src={Img.group54503} alt="" className="img-fluid mb15" />
              <h4 className="fs22 colorBlack fw600 mb15">
                Congratulations!
                <br /> You're well on your way to being a Blue Ibis Member.
              </h4>
              <p className="colorPara mb30">
                Once your application is processed, you will receive a
                notification. You will then be able to receive job opportunities
                that match your profile.
              </p>
              <GButton>View Profile</GButton>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};
