import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import Img from "../../../Assets/Img/Img";
import GImageCard from "../../../Components/GComponents/GImageCard/GImageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let SliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: true,
  centerMode: true,
  arrows: false,
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
        slidesToShow: 2,
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

// Slider 1
const HomeSliders = () => {
  return (
    <section className="mb80">
      <Container>
        <div className="text-center">
          <h3 className="fBold colorBlack mb40">What do you need done?</h3>
        </div>
        <Slider {...SliderSettings} className="mb30">
          <GImageCard src={Img.rectangle2553} title="Home Cleaning" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Full House Removals" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Few Items Removals" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Furniture Assembly" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Handyperson" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Marketing & Design" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Home & Gardening" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Home & Gardening" radius="4px" align="center" className="pl8 pr8"/>
          <GImageCard src={Img.rectangle2553} title="Marketing & Design" radius="4px" align="center" className="pl8 pr8"/>
        </Slider>
      </Container>
    </section>
  );
};

export default HomeSliders;


