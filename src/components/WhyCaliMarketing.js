import React from "react";
import { FaMobileAlt, FaLaptopCode, FaBullhorn } from "react-icons/fa";

const WhyCaliMarketing = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-4xl text-[#0d3880]" />,
      title: "Custom Web Solutions",
      description:
        "At Cali Digital Marketing, we specialize in crafting modern and user-friendly websites that align with your business goals. From responsive web design to dynamic development, we ensure your digital presence stands out. Our team works with the latest web technologies to create sites that are not only visually appealing but also optimized for performance. We focus on building scalable, secure, and high-performing websites that give your users a seamless experience across all devices.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#ccaa0d]" />,
      title: "Mobile App Development",
      description:
        "Our team develops innovative mobile applications tailored to your needs. Whether it's iOS or Android, we deliver seamless, high-performance apps that enhance user engagement and drive results. We focus on user-friendly design and intuitive navigation, ensuring that your app provides a smooth experience. From concept to deployment, we handle every aspect of mobile app development with attention to detail, ensuring that your app is functional, efficient, and delivers the best user experience.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-[#0d3880]" />,
      title: "Digital Marketing Strategies",
      description:
        "Boost your brand visibility with our data-driven marketing strategies. From SEO to social media campaigns, we focus on delivering measurable results to maximize your ROI and grow your business. Our team analyzes your audience and market trends to develop personalized strategies that reach the right people at the right time. We aim to increase engagement, drive conversions, and grow your online presence. Whether you're looking to improve your rankings on search engines or enhance your social media presence, we have the expertise to get you noticed.",
    },
  ];

  return (
    <section className="py-10 px-4 md:px-20 bg-gray-50">
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span className="bg-[#ccaa0d] text-white text-sm font-bold px-4 py-2 rounded-full uppercase">
          Innovative IT Solutions for Modern Businesses
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0d3880]">
          Why <span className="text-[#ccaa0d]">Cali Digital Marketing?</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Empowering Your Business with Cutting-Edge Technology and Expertise
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-left"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={`${200 * index}`}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCaliMarketing;
