import React from "react";
import bgImage from "../assets/header-bg.gif";
import "animate.css";

const Hero = () => {
  return (
    <section
      className="relative bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "80vh",
        backgroundPosition: "center",
      }}
    >
<div className="text-center px-4 py-4 md:py-8 bg-black bg-opacity-50 rounded-lg animate__animated animate__fadeIn animate__delay-1s">
  <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight animate__animated animate__fadeIn animate__delay-1s">
    Transforming Digital Ideas into <br /> Profitable Solutions
  </h3>
  <p
    className="mt-2 text-xs sm:text-sm md:text-base lg:text-1xl animate__animated animate__fadeIn animate__delay-2s"
    style={{
      color: "#ccaa0d",
    }}
  >
    AT <span style={{ color: "#0d3880" }}>CALI DIGITAL MARKETING</span>, WE OFFER
    CUSTOMIZED SOFTWARE SOLUTIONS FOR BUSINESSES OF ALL SIZES, COVERING{" "}
    <br />
    WEB DESIGN, DEVELOPMENT, MOBILE APPS, VIDEO EDITING, AND E-BOOK WRITING SERVICES.
  </p>
</div>


      <div className="absolute bottom-5 md:bottom-8 right-5 sm:right-10 md:right-20 animate__animated animate__bounceIn animate__delay-3s">
        <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#0d3880] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ccaa0d] transition transform hover:scale-110">
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-center font-bold leading-tight">
            LET'S DISCUSS YOUR PROJECT
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
