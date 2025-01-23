import React, { useState } from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaGoogle,
  FaUsers,
  FaEnvelope,
  FaBrush,
  FaChalkboardTeacher,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Website Design",
    id: "website",
    icon: <FaLaptopCode className="text-3xl" />,
  },
  { name: "SEO", id: "seo", icon: <FaChartLine className="text-3xl" /> },
  {
    name: "Google Ads",
    id: "google-ads",
    icon: <FaGoogle className="text-3xl" />,
  },
  {
    name: "Facebook Ads",
    id: "facebook-ads",
    icon: <FaFacebook className="text-3xl" />,
  },
  {
    name: "Social Media",
    id: "social-media",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    name: "Email Marketing",
    id: "email-marketing",
    icon: <FaEnvelope className="text-3xl" />,
  },
  { name: "Branding", id: "branding", icon: <FaBrush className="text-3xl" /> },
  {
    name: "Marketing Consulting",
    id: "consulting",
    icon: <FaChalkboardTeacher className="text-3xl" />,
  },
];

const ServiceDetails = {
  website: {
    title: "Website Design",
    description:
      "Create visually appealing, responsive, and user-friendly websites that enhance user experience and engagement.",
    points: [
      "Custom website design",
      "Responsive design for all devices",
      "SEO-friendly websites",
      "E-commerce solutions",
      "User-centric design approach",
    ],
    image: <FaLaptopCode className="text-[12rem] text-[#0d3880]" />,
  },
  seo: {
    title: "SEO",
    description:
      "Optimize your website for search engines to improve visibility and drive more organic traffic.",
    points: [
      "On-page and off-page SEO",
      "Keyword research and optimization",
      "Link-building strategies",
      "Content optimization",
      "Performance tracking and analysis",
    ],
    image: <FaChartLine className="text-[12rem] text-[#0d3880]" />,
  },
  "google-ads": {
    title: "Google Ads",
    description:
      "Leverage Google Ads campaigns to drive targeted traffic and increase your brand's visibility.",
    points: [
      "Targeted Google Ads campaigns",
      "Keyword and audience targeting",
      "Ad copy optimization",
      "Conversion tracking and analysis",
      "Ad performance reporting",
    ],
    image: <FaGoogle className="text-[12rem] text-[#0d3880]" />,
  },
  "facebook-ads": {
    title: "Facebook Ads",
    description:
      "Harness the power of Facebook Ads to connect with your ideal audience, increase engagement, and drive conversions with precision targeting.",
    points: [
      "Custom audience targeting",
      "Ad creative and copy optimization",
      "Campaign budget management",
      "Conversion tracking and insights",
      "Comprehensive performance reporting",
    ],
    image: <FaFacebook className="text-[12rem] text-[#0d3880]" />,
  },
  "social-media": {
    title: "Social Media",
    description:
      "Boost your brand's presence on social media platforms with tailored content strategies and campaigns.",
    points: [
      "Social media strategy development",
      "Content creation and scheduling",
      "Community engagement",
      "Paid social media advertising",
      "Analytics and reporting",
    ],
    image: <FaUsers className="text-[12rem] text-[#0d3880]" />,
  },
  "email-marketing": {
    title: "Email Marketing",
    description:
      "Create engaging email campaigns to nurture leads and drive conversions with personalized content.",
    points: [
      "Email campaign creation",
      "Email list management",
      "A/B testing for optimized results",
      "Segmentation and personalization",
      "Performance tracking and analysis",
    ],
    image: <FaEnvelope className="text-[12rem] text-[#0d3880]" />,
  },
  branding: {
    title: "Branding",
    description:
      "Develop a unique brand identity that resonates with your audience and enhances your brand's reputation.",
    points: [
      "Logo and brand identity design",
      "Brand messaging and voice",
      "Brand positioning",
      "Visual and graphic design",
      "Brand consistency across channels",
    ],
    image: <FaBrush className="text-[12rem] text-[#0d3880]" />,
  },
  consulting: {
    title: "Marketing Consulting",
    description:
      "Work one-on-one with our experts to develop personalized marketing strategies for your business.",
    points: [
      "Personalized marketing strategy",
      "Target audience analysis",
      "Marketing campaign planning",
      "Brand growth strategies",
      "Ongoing support and feedback",
    ],
    image: <FaChalkboardTeacher className="text-[12rem] text-[#0d3880]" />,
  },
};

const OurApproach = () => {
  const [activeService, setActiveService] = useState("website");

  return (
    <section className="bg-black text-white py-16 px-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">Our Approach</h2>
          <Link to="/work">
            <button className="bg-[#0d3880] text-white py-2 px-6 rounded-md hover:bg-[#ccaa0d] transition">
              How We Work →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className={`cursor-pointer py-2 text-lg flex items-center gap-2 ${
                    activeService === service.id
                      ? "text-blue-600 border-l-2 border-red-600 pl-4"
                      : "text-gray-400 hover:text-white pl-4"
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  {service.icon}
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className=" p-6 ">{ServiceDetails[activeService].image}</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              {ServiceDetails[activeService].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {ServiceDetails[activeService].description}
            </p>
            <ul className="space-y-2">
              {ServiceDetails[activeService].points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300 text-sm"
                >
                  <span className="text-red-600 mr-2">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
