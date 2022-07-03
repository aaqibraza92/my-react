import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import "./Ourteam.css";
import Img from "../../../../Assets/Img/Img";

let SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    lazyLoad: true,
    centerMode: true,
    // className: "react__slick__slider__parent",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

const Ourteam = () => {
    return (
      <section className="bgGrey pt80 pb80 mobPt40 mobPb40 mb80 ">
        <Container>
          <div className="text-center">
            <h2 className="fBold colorBlack mb40">Our Team</h2>
          </div>
          <Slider {...SliderSettings} className="mb30">
          <div>
            <div className="wrapperImg">
              <div>
                <img src={Img.rectangle13157} className="img-fluid mb7" alt="" />
              </div>
              <span className="fs18 colorBlack">Monica Geller</span>
              <p className="colorLightBlack">-Co-Founder</p>
            </div>
          </div>
          <div>
            <div className="wrapperImg">
              <div>
                <img src={Img.rectangle13158} className="img-fluid mb7" alt="" />
              </div>
              <span className="fs18 colorBlack">Monica Geller</span>
              <p className="colorLightBlack">-Co-Founder</p>
            </div>
          </div>
          <div>
            <div className="wrapperImg">
              <div>
                <img src={Img.rectangle13159} className="img-fluid mb7" alt="" />
              </div>
              <span className="fs18 colorBlack">Monica Geller</span>
              <p className="colorLightBlack">-Co-Founder</p>
            </div>
          </div>
          <div>
            <div className="wrapperImg">
              <div>
                <img src={Img.rectangle13157} className="img-fluid mb7" alt="" />
              </div>
              <span className="fs18 colorBlack">Monica Geller</span>
              <p className="colorLightBlack">-Co-Founder</p>
            </div>
          </div>
          </Slider>
        </Container>
      </section>
    );
  };

  export default Ourteam;