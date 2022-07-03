import React from "react";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GRadio from "../../../Components/GComponents/GRadio";

const ProviderCompanyPractice = () => {
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <section className="pt30 pb30 pl30 pr30 width50 mx-auto  mobWidth100 tabWidth100 tabLgWidth100">
            <div className="mb10">{Svg.backarrow}</div>
            <h3 className="fs22 colorBlack mb20">
              Do You Practice as a Company or an Individual ?
            </h3>
            <GRadio name="sole" id="sole" label="Sole Proprietor"></GRadio>
            <GRadio name="sole" id="register" label="Registered Sole Trader"></GRadio>
            <GRadio name="sole" id="partner" label="Registered Partnership"></GRadio>
            <GRadio name="sole" id="limited" label="Limited Liability "></GRadio>
            <GRadio name="sole" id="other" label="Other"></GRadio>
            <GAlign align="right"><GButton>Continue</GButton></GAlign>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default ProviderCompanyPractice;
