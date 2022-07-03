import React, { useState } from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";

const CustomerFavouriteProviders = () => {
  const [selected, setselected] = useState(1);
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={8} md={8} xl={8}>
              <div className="pb6 borBottom">
                <h3 className="fBold">Favourite Providers</h3>
              </div>
              {/* By Default Screen if no favourite is available  */}
              {selected === 0 && <NoFavourite />}

              {selected === 1 && (
                <div>
                  <FavouriteProvider />
                  <FavouriteProvider />
                  <FavouriteProvider />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerFavouriteProviders;

{
  /* By Default Screen If No favourite providers available */
}
const NoFavourite = () => {
  return (
    <section className="text-center pt120 pb120">
      <Container>
        <div>
          <img src={Img.MaskGroup} alt="" className="img-fluid mb15" />
        </div>
        <h4 className="fs20">No favourite providers available</h4>
        <p className="colorPara">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </Container>
    </section>
  );
};

/* If favourite providers is available */
const FavouriteProvider = () => {
  return (
    <>
      <Row className="bBottom pt18 pb18">
        <Col lg={9} xs={12}>
          <Row>
            <Col lg={3} xs={12}>
              <div>
                <img
                  className="img-fluid radius100 "
                  src={Img.rectangle14009}
                  alt=""
                />
              </div>
            </Col>
            <Col lg={9} xs={12}>
              <div>
                <p className="fs18 mb5 fw600">
                  <span className="mr10">UrbanClab Cleaning Services</span>
                </p>
                <p className="colorBlack mb18">
                  4.3 <span className="ml5 mr10">{Svg.star}</span>
                  <span className="fs16 colorLight">Ratings</span>
                </p>
                <p className="fs16 mb0 colorPara">
                  Commercial and domestic cleaning, Bond cleaning, Windows
                  cleaning, Carpet steam cleaning, Washroom cleaning...
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12}>
          {/* <GAlign align="right"> */}
          <div className="text-end">
            <p className="fs18 colorBlack mb10">$40/hr</p>
            <GButton
              backgroundColor="#fff"
              color="#20272B"
              border="1px solid #E8E9E9"
              pb="2px"
              pt="2px"
              pl="13px"
              pr="13px"
              fs="14px"
            >
              View Profile
            </GButton>
            <p className="mt15 colorRed">Remove from favourite</p>
          </div>
          {/* </GAlign> */}
        </Col>
      </Row>
    </>
  );
};
