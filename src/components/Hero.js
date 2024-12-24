import React from "react";
import bgImage from "../assets/header-bg.gif";
import "animate.css";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Text Content */}
      <div className="text-center px-4 py-6 md:py-12 bg-black bg-opacity-50 rounded-lg animate__animated animate__fadeInUp animate__delay-1s">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight animate__animated animate__fadeInRight animate__delay-1s">
          Transforming Digital <br /> Ideas into Profitable <br /> Solutions
        </h1>
        <p
          className="mt-4 text-sm sm:text-base md:text-lg animate__animated animate__fadeInRight animate__delay-2s"
          style={{
            color: "#ccaa0d",
          }}
        >
          AT <span style={{ color: "#0d3880" }}>CALI MARKETING</span>, WE OFFER
          CUSTOMIZED SOFTWARE SOLUTIONS FOR BUSINESSES OF ALL SIZES, COVERING{" "}
          <br />
          WEB DESIGN, DEVELOPMENT, MOBILE APPS, VIDEO EDITING, AND E-BOOK
          WRITING SERVICES.
        </p>
      </div>

      {/* Button */}
      <div className="absolute bottom-5 sm:bottom-10 md:bottom-20 right-5 sm:right-10 md:right-20 animate__animated animate__bounceIn animate__delay-3s">
        <button className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#0d3880] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ccaa0d] transition transform hover:scale-110">
          <span className="text-xs sm:text-sm md:text-base text-center font-bold leading-tight">
            LET'S DISCUSS YOUR PROJECT
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
