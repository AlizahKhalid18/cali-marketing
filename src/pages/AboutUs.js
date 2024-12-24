import React from "react";
import aboutusimg from "../assets/aboutusimg.jpg";
const AboutUs = () => {
  return (
    <div className="px-4 py-10 md:px-16" style={{ marginTop: "8vw" }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#ccaa0d]">About Us</h1>
        <p className="text-gray-500">Discover more about Cali Marketing</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={aboutusimg}
            alt="About Cali Marketing"
            className="w-[70] rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-700 mb-4">
            At <strong>Cali Marketing</strong>, we are dedicated to helping
            businesses thrive in the digital world. Our expert team specializes
            in cutting-edge technologies and proven strategies to ensure your
            brand stands out in today's competitive market.
          </p>
          <p className="text-gray-700 mb-4">
            From creating stunning websites to delivering data-driven marketing
            solutions, we aim to be your trusted partner in achieving
            sustainable growth. Our commitment to excellence drives everything
            we do, and we take pride in helping our clients succeed.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're a startup looking to make your mark or an established
            business aiming to expand, we provide tailored solutions to meet
            your unique needs. Our services are designed to not only increase
            your visibility but also to build meaningful connections with your
            target audience.
          </p>
          <p className="text-gray-700 mb-5">
            At Cali Marketing, we believe in innovation, integrity, and results.
            We work tirelessly to transform challenges into opportunities,
            ensuring your business stays ahead in the ever-changing digital
            landscape. Let us help you shape a future of success and growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">What We Do</h3>
          <p className="text-gray-600">
            Cali Marketing provides a full suite of IT and digital marketing
            services, including web development, branding, SEO, Google Ads,
            social media management, email marketing, and 1v2 marketing
            consulting.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to empower businesses to unlock their full potential
            through innovative and personalized marketing strategies. At Cali
            Marketing, we strive to build meaningful connections between brands
            and their audiences.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">Our Goal</h3>
          <p className="text-gray-600">
            Our ultimate goal is to help businesses achieve measurable success
            by leveraging the latest technologies and marketing trends. We aim
            to deliver results that not only meet but exceed our clients'
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
