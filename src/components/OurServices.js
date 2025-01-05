import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import customSoftwareImage from "../assets/it-serviceimg1.avif";
import cloudComputingImage from "../assets/it-serviceimg2.png";
import mobileAppDevImage from "../assets/industry-img3.png";
import uiuxDesignImage from "../assets/it-serviceimg3.jpg";
import cybersecurityImage from "../assets/it-servisceimg4.jpg";
import branding from "../assets/it-serviceimg5.webp";
import Marketing from "../assets/it-serviceimg6.webp";

const itServicesData = [
  {
    id: 1,
    title: "Website Design",
    description:
      "We create visually stunning and user-friendly websites that are optimized for performance. Our team ensures that your website not only looks great but also functions seamlessly, helping you attract and retain more customers.",
    image: customSoftwareImage,
  },
  {
    id: 2,
    title: "SEO",
    description:
      "Our SEO services are designed to improve your website's visibility on search engines. We use the latest techniques to help you rank higher, drive more organic traffic, and increase your online presence.",
    image: cloudComputingImage,
  },
  {
    id: 3,
    title: "Google Ads",
    description:
      "We help you create effective Google Ads campaigns to target your ideal customers. Our strategies are designed to maximize ROI and generate high-quality leads, increasing your sales and brand awareness.",
    image: mobileAppDevImage,
  },
  {
    id: 4,
    title: "Social Media",
    description:
      "Our social media marketing services help you build a strong online presence. We manage your social media accounts, create engaging content, and run targeted campaigns to connect with your audience and drive conversions.",
    image: uiuxDesignImage,
  },
  {
    id: 5,
    title: "Email Marketing",
    description:
      "We craft personalized email marketing campaigns that engage your audience and drive action. From newsletters to promotional emails, we help you build meaningful relationships with your customers through effective communication.",
    image: cybersecurityImage,
  },
  {
    id: 6,
    title: "Branding",
    description:
      "We help businesses build a strong, recognizable brand. Our branding services include logo design, brand messaging, and visual identity, all aimed at ensuring consistency and a memorable impression in the market.",
    image: branding,
  },
  {
    id: 7,
    title: "1V1 Marketing Consulting",
    description:
      "Our one-on-one marketing consulting services provide tailored strategies for your business. We analyze your goals and offer expert advice to help you optimize your marketing efforts, boost growth, and enhance your online presence.",
    image: Marketing,
  },
];

const ITServicesSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[rgb(24,24,24)] text-white py-16 px-4 md:px-16">
      <div className="mb-8">
        <h2 className="text-5xl font-bold">OUR SERVICES</h2>
        <button className="mt-4 px-6 py-2 bg-[#0d3880] rounded-full flex items-center text-sm font-bold hover:bg-[#ccaa0d] transition">
          VIEW ALL <FaArrowRight className="ml-2" />
        </button>
      </div>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        At Cali Digital Marketing, we offer custom IT solutions to drive the digital
        transformation of your business. From website design to digital
        marketing, our services are designed to enhance your online presence and
        business growth.
      </p>

      <Slider {...sliderSettings}>
        {itServicesData.map((service) => (
          <div key={service.id} className="p-2">
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-gray-700 mt-2">
                  {service.description}
                </p>

                <button className="mt-4 bg-[#ccaa0d] px-6 py-2 text-[#0d3880] rounded-full flex items-center text-sm font-bold text-white hover:bg-[#ccaa0d] transition">
                  LEARN MORE <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ITServicesSection;
