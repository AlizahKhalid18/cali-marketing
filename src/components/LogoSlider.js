import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";

import sliderImg1 from "../assets/sliderimg1.png";
import sliderImg2 from "../assets/sliderimg2.png";
import sliderImg3 from "../assets/sliderimg3.png";
import sliderImg4 from "../assets/sliderimg4.png";
import sliderImg5 from "../assets/sliderimg5.png";
import sliderImg6 from "../assets/sliderimg6.png";
import sliderImg7 from "../assets/sliderimg7.png";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const logos = [
    { id: 1, src: sliderImg1, alt: "Kodak" },
    { id: 2, src: sliderImg2, alt: "Almarai" },
    { id: 3, src: sliderImg3, alt: "Eurail" },
    { id: 4, src: sliderImg4, alt: "Maestrani" },
    { id: 5, src: sliderImg5, alt: "La Corona" },
    { id: 6, src: sliderImg6, alt: "LG" },
    { id: 7, src: sliderImg7, alt: "orange" },
  ];

  return (
    <div className="logo-slider-container py-3">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="logo-slide">
            <img src={logo.src} alt={logo.alt} className="logo-img" />
          </div>
        ))}
      </Slider>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default LogoSlider;
