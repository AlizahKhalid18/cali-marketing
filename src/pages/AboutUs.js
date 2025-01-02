import React from "react";
import aboutusimg from "../assets/aboutusimg.jpg";
import backgroundImage from "../assets/about-bg.jpg";

const AboutUs = () => {
  return (
    <div>
     
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Pricing Plans
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            Find the perfect plan for your business. Scalable, flexible, and
            designed to meet your needs.
          </p>
        </div>
      </section>

   
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-10 px-6">
      
        <div className="w-full md:w-1/2">
          <img
            src={aboutusimg}
            alt="About Cali Marketing"
            className="w-full rounded-lg object-cover"
          />
        </div>

   
        <div className="w-full md:w-1/2 text-gray-700 space-y-4">
          <p>
            At <strong>Cali Marketing</strong>, we are dedicated to helping
            businesses thrive in the digital world. Our expert team specializes
            in cutting-edge technologies and proven strategies to ensure your
            brand stands out in today's competitive market.
          </p>
          <p>
            From creating stunning websites to delivering data-driven marketing
            solutions, we aim to be your trusted partner in achieving
            sustainable growth. Our commitment to excellence drives everything
            we do, and we take pride in helping our clients succeed.
          </p>
          <p>
            Whether you're a startup looking to make your mark or an established
            business aiming to expand, we provide tailored solutions to meet
            your unique needs. Our services are designed to not only increase
            your visibility but also to build meaningful connections with your
            target audience.
          </p>
          <p>
            At Cali Marketing, we believe in innovation, integrity, and results.
            We work tirelessly to transform challenges into opportunities,
            ensuring your business stays ahead in the ever-changing digital
            landscape. Let us help you shape a future of success and growth.
          </p>
        </div>
      </section>

    
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        
        <article className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">What We Do</h3>
          <p className="text-gray-600">
            Cali Marketing provides a full suite of IT and digital marketing
            services, including web development, branding, SEO, Google Ads,
            social media management, email marketing, and 1v2 marketing
            consulting.
          </p>
        </article>

     
        <article className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to empower businesses to unlock their full potential
            through innovative and personalized marketing strategies. At Cali
            Marketing, we strive to build meaningful connections between brands
            and their audiences.
          </p>
        </article>

    
        <article className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#ccaa0d]">
          <h3 className="text-lg font-bold mb-2">Our Goal</h3>
          <p className="text-gray-600">
            Our ultimate goal is to help businesses achieve measurable success
            by leveraging the latest technologies and marketing trends. We aim
            to deliver results that not only meet but exceed our clients'
            expectations.
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutUs;
