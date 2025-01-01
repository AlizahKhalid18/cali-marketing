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
      title: "Website Design",
      description:
        "Design and develop visually stunning, user-friendly, and responsive websites that effectively communicate your brand and captivate your audience.",
    },
    {
      id: "02",
      title: "SEO",
      description:
        "Optimize your website's performance and content to rank higher on search engines, driving organic traffic and boosting online visibility.",
    },
    {
      id: "03",
      title: "Google Ads",
      description:
        "Create and manage data-driven Google Ads campaigns to maximize reach, engagement, and conversions for your business.",
    },
    {
      id: "04",
      title: "Social Media",
      description:
        "Develop impactful social media strategies and create engaging content to grow your brand's presence across platforms like Facebook, Instagram, and LinkedIn.",
    },
    {
      id: "05",
      title: "Email Marketing",
      description:
        "Craft compelling email campaigns that nurture leads, engage customers, and drive conversions through personalized communication.",
    },
    {
      id: "06",
      title: "Branding",
      description:
        "Build a strong and memorable brand identity with professional logo design, consistent visuals, and cohesive messaging tailored to your business.",
    },
    {
      id: "07",
      title: "1V1 Marketing Consulting",
      description:
        "Offer personalized one-on-one marketing consultations to develop strategies that align with your business goals and drive measurable results.",
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
