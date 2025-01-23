import React from "react";
import "animate.css";
import "../components/Hero.css";

const Hero = () => {
  return (
    <section className="custom-bg-section text-white flex items-center justify-center relative">
      <div className="text-center px-4 py-4 md:py-8 bg-black bg-opacity-50 rounded-lg animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="heading text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold leading-tight">
          Hadi pagal h
        </h2>
        <p className="para text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
          AT CALI DIGITAL MARKETING, WE OFFER CUSTOMIZED SOFTWARE SOLUTIONS FOR
          BUSINESSES OF ALL SIZES <br />
          WEBSITE DESIGN, SEO, GOOGLE ADS, SOCIAL MEDIA, EMAIL MARKETING,
          BRANDING, 1V1 MARKETING CONSULTING
        </p>
      </div>

      <div className="absolute bottom-5 md:bottom-20 right-5 sm:right-10 md:right-20 animate__animated animate__bounceIn animate__delay-3s">
        <button className="w-16 h-16 sm:h-24 sm:w-24 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#0d3880] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ccaa0d] transition transform hover:scale-110">
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-center font-bold leading-tight">
            LET'S DISCUSS YOUR PROJECT
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
