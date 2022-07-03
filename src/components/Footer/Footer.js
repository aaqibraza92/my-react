import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      {/* {props.footer && props.footer === 1 && (
       <div className="bgBlack pt20 pb15">
          <Container>
            <div className="d-flex align-items-center justify-content-between flex-wrap pb20 ">
              <div className="fLogo">
                <h1 className=" fw700 mb0">
                  <Link to="#" className="colorBlue">
                    Bluebis
                  </Link>
                </h1>
              </div>
              <div className="text-end">
                <ul className="noUl fs16 d-flex flex-wrap mb0">
                  <li>
                    <Link className="mr20 colorWhite" to="#">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="mr20 colorWhite" to="#">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="mr20 colorWhite" to="#">
                      Cookies Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="mr20 colorWhite" to="#">
                      Pro Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
            <div className="fBorTop pt15">
              <Container>
              <p className="colorWhite fs16 mb0">
                By continuing past this page, you agree to our Terms of Service,
                Cookie Policy, Privacy Policy and Content Policies. All
                trademarks are properties of their respective owners. 2012-2021
                © Bluebis Pvt Ltd. All rights reserved.
              </p>
              </Container>
            </div>
        </div>
      )} */}

      {!props.footer && (
        <footer className="bgBlack pt60 pb10">
          <Container className="mb30 ">
            <Row>
              <Col lg={3}>
                <section>
                  <h1 className=" fw700 mb18"><Link to="#" className="colorBlue">Bluebis</Link></h1>
                  <p className="fcolor">
                    I work in project management and joined Zaaruu because I get
                    great for less.
                  </p>
                </section>
              </Col>
              <Col lg={9}>
                <Row>
                  <Col lg={3} xs={6} md={3}>
                    <h6 className="fs18 fw700 mb16 colorWhite">Discover </h6>
                    <ul className="noUl fs16">
                      <li className="mb8"><Link to="#" className="fcolor">Sign Up </Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Become a Provider</Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">All Services </Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Deals & Discounts</Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Get a Quote </Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Career Opportunities </Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Blog </Link></li>
                      <li className="mb8"><Link to="/about" className="fcolor">About Us </Link></li>
                    </ul>
                  </Col>
                  <Col lg={3} xs={6} md={3}>
                    <h6 className="fs18  fw700 mb16 colorWhite">Support</h6>
                    <ul className="noUl fs16">
                    <li className="mb8"><Link to="#" className="fcolor">Help </Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">Contact Us</Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">FAQ</Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">How it Works</Link></li>
                      <li className="mb8"><Link to="#" className="fcolor">How to create a project</Link></li>
                    </ul>
                  </Col>
                  <Col lg={3} xs={6} md={3}>
                    <h6 className="fs18  fw700 mb16 colorWhite">Policies</h6>
                    <ul className="noUl fs16">
                      <li className="mb8"><Link to="/privacy-policy" className="fcolor">Privacy Policy </Link></li>
                      <li className="mb8"><Link to="/review-policy" className="fcolor">Review Policy</Link></li>
                      <li className="mb8"><Link to="/terms-conditions" className="fcolor">Terms of Use</Link></li>
                      <li className="mb8"><Link to="/cancellation-policy" className="fcolor">Cancellation Policy</Link></li>
                    </ul>
                  </Col>
                  <Col lg={3} xs={6} md={3}>
                    <h6 className="fs18  fw700 mb16 colorWhite">Follow Us</h6>
                    <ul className="noUl d-flex align-items-center flex-wrap">
                      <li className="mr20" rel="noreferrer">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="fb_logo"
                        >
                          {Svg.fb}
                        </a>
                      </li>
                      <li className="mr20">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="inst_logo"
                        >
                          {Svg.instagram}
                        </a>
                      </li>
                      <li className="mr20">
                        <a
                          href="https://twitter.com/?lang=en"
                          target="_blank"
                          rel="noreferrer"
                          className="twitter_logo"
                        >
                          {Svg.twitter}
                        </a>
                      </li>
                      <li className="mr20">
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="yt_logo"
                        >
                          {Svg.youtube}
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="fBorTop pt10">
            <Container>
              <p className="text-center fs14 mb0 fcolor">
                Copyright © 2021 All rights reserved
              </p>
            </Container>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
