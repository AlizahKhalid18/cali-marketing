import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import serviceimg from "../assets/serviceimage.png";
import "animate.css";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Website Development",
      description:
        "Transform your web development idea into reality with the expertise of our talented team of website developers.",
    },
    {
      id: "02",
      title: "Mobile App",
      description:
        "Build responsive and user-friendly mobile applications tailored for both iOS and Android platforms.",
    },
    {
      id: "03",
      title: "UI/UX Design",
      description:
        "Design intuitive and engaging user interfaces with a focus on seamless user experience.",
    },
    {
      id: "04",
      title: "Graphic Designing",
      description:
        "Create visually appealing designs for logos, brochures, banners, and other marketing materials.",
    },
    {
      id: "05",
      title: "Video Editing",
      description:
        "Edit and produce professional videos for marketing, advertisements, and personal projects.",
    },
    {
      id: "06",
      title: "E-Book Writing",
      description:
        "Write and publish high-quality e-books tailored to your audience's preferences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`services-container flex flex-col md:flex-row items-center justify-between p-8 bg-white text-[#ccaa0d] rounded-lg shadow-lg ${
        inView ? "animate__animated animate__fadeInUp" : "opacity-0"
      }`}
    >
      <div
        className={`image-container w-full md:w-1/2 flex justify-center md:justify-start ${
          inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
        }`}
      >
        <img
          src={serviceimg}
          alt="Service Image"
          className="w-3/4 md:w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="services-list w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item pb-4 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "active" : ""
            } ${
              inView ? "animate__animated animate__fadeInRight" : "opacity-0"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center justify-start">
              <span className="service-id text-[#ccaa0d] text-xl font-semibold">
                {service.id}/
              </span>
              <h3
                className={`service-title ml-4 text-2xl transition-all ${
                  activeIndex === index
                    ? "text-[#0d3880] font-bold scale-105"
                    : "text-black font-medium"
                } hover:text-[#0d3880]`}
              >
                {service.title}
              </h3>
            </div>

            {activeIndex === index && (
              <div>
                <p className="text-gray-600 mt-2 text-sm">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center">
                  <a
                    href="#"
                    className="text-[#ccaa0d] font-semibold flex items-center hover:text-black transition duration-300"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
