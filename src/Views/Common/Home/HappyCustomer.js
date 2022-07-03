import React from "react";
import Img from "../../../Assets/Img/Img";
import Slider from "react-slick";
import "./Home.css";
import GTestimonialBox from "../../../Components/GComponents/GTestimonialBox/GTestimonialBox";
import { Container } from "reactstrap";

let SliderSettings = {
  dots: false,
  infinite: true,
//   speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,
  lazyLoad: true,
  centerMode: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

let SecondSliderSettings = {
    dots: false,
    infinite: true,
    // speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    centerMode: true,
    arrows: false,
    rtl:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

const HappyCustomer = () => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }

  return (
    <>
    <Container>
    </Container>
      <section className="mb80">
        <div className="text-center mb80">
          <p className="colorBlue">What customers are saying</p>
          <h3 className="colorBlack fBold">Thousands of Happy Customer</h3>
        </div>

     
        <Slider {...SecondSliderSettings} className="mb15">
        {
            [0,1,2,3,4,5,6].map((obj,ind)=>{
              return(
                <GTestimonialBox key={ind} star={5} imageURL={Img.rectangle13157}/>
              );
            })
          }
        </Slider>
      </section>
    </>
  );
};

export default HappyCustomer;


