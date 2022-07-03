import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GSectionTitle from "../../../Components/GSectionTitle";
import GButton from "../../../Components/GComponents/GButton";
import Img from "../../../Assets/Img/Img";
import GInfoBox from "../../../Components/GInfoBox";

const HomeBanner = () => {
  const [locationdata, setlocationdata] = useState("");
  const [searchdata, setsearchdata] = useState("");
  return (
    <>
      {/* Home Banner Section  */}
      <section className="home-banner"   style={{ backgroundImage: `url(${Img.bannerHome})` }}>
        <Container>
          {/* <GSpacing> */}
            <GSectionTitle
              title="Find local professionals for just about anything."
              subtitle="Lorem ipusm"
              className="width46 fBold mobWidth100 tabWidth100 tabLgWidth100"
            ></GSectionTitle>
            <GAlign mobWrap="wrap" >
              <div className="width18 radius mr10 mobMr0 mobMb10 mobWidth100">
                <GIconInput
                  type="text"
                  placeholder="Location"
                  paddingBottom="0"
                  // marginBottom="10px"
                  iconLeft={Svg.location}
                  value={locationdata}
                  onChange={(e) => setlocationdata(e.target.value)}
                ></GIconInput>
              </div>
              <div className="width32 radius mobWidth100 mobMb10">
                <GIconInput
                  type="text"
                  placeholder="What service you need"
                  paddingBottom="0"
                  iconLeft={Svg.search}
                  value={searchdata}
                  onChange={(e) => setsearchdata(e.target.value)}
                ></GIconInput>
              </div>
              <GButton className="mobMl0">Search</GButton>
            </GAlign>
          {/* </GSpacing> */}
        </Container>
      </section>

      {/* // Home Banner Below Section which is connected with Home Banner Image */}
      <Info />
    </>
  );
};

export default HomeBanner;

// Home Banner Below Section which is connected with Home Banner Image

const Info = () => {
  return (
    <>
      <section className="bgGrey pt15 mb80">
        <Container>
          <Row>
            <Col lg={3} md={3} xs={6}>
              <GInfoBox
                imageURL={Img.group554891}
                className="mb15"
                label="Same Day"
                text="Service"
              ></GInfoBox>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <GInfoBox
                imageURL={Img.group554892}
                className="mb15"
                label="100,000+"
                text="Bookings"
              ></GInfoBox>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <GInfoBox
                imageURL={Img.group55493}
                className="mb15"
                label="4.3 Rating"
                text="on Google"
              ></GInfoBox>
            </Col>
            <Col lg={3} md={3} xs={6}>
              <GInfoBox
                imageURL={Img.group55494}
                className="mb15"
                label="3,000+"
                text="Professionals"
              ></GInfoBox>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
