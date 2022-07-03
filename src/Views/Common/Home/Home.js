import React from "react";
import Categories from "./Categories";
// import About from "./About";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import HomeSlider from "./HomeSlider";
// import HappyCustomer from "./HappyCustomer";
import GButton from "../../../Components/GComponents/GButton";
import TopServices from "./TopServices";
import Price from "./Price";
import WorkCards from "./WorkCards";
import HappyCustomer from "./HappyCustomer";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import GHeroSection from "../../../Components/GComponents/GHeroSection/GHeroSection";

const Home = (props) => {

  return (
    <>
      {/* <h1>Home page</h1>
      <button
        onClick={(e) => {
          history.push({
            pathname: "/terms-conditions",
            search: "?the=search",
            state: { Userdata: Userdata },
          });
        }}
      >
        Click me
      </button> */}
      <GHeroSection/>
      <HomeBanner />
      <HomeSlider />
      <Categories />
      <WorkCards />
      <Guarantee />
      <HappyCustomer/>
      <Price />
      <TopServices />
      <TODO />
    </>
  );
};

export default Home;

const Guarantee = () => {
  return (
    <>
      <section className="need-done mb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="width81 mobWidth100">
                <h2 className="colorWhite fBold">100% Happiness Guarantee!</h2>
                <p className="colorWhite">
                  Your complete satisfaction is our ultimate quality benchmark.
                  That's why every Whizz service is assured with our 100%
                  Happiness Guarantee.
                </p>
                <p className="colorWhite">
                  This means that if you are in any way dissatisfied with your
                  service, we will have it amended for you - completely free!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const TODO = () => {
  return (
    <>
      <section className="todo pt120 pb120">
        <Container>
          <div className="text-center">
            <h2 className="colorWhite fBold mb30">
              Have something to do? Get it done today.
            </h2>
            <GButton border="1px solid #fff" color="#fff" backgroundColor="transparent" className="">Get Quote Now</GButton>
          </div>
        </Container>
      </section>
    </>
  );
};