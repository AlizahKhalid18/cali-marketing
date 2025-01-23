import React from "react";
import ourstory from "../assets/our-storyimg.jpg";
const KnowOurStory = () => {
  return (
    <section className="hero-section bg-[#0d3880] text-white py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Know Our Story</h2>
          <p className="text-lg leading-7 mb-6">
            Cali Digital Marketing, based in Corona, Los Angeles, California, is
            a premier IT services company specializing in web design,
            development, digital marketing, and mobile app solutions. Founded
            with a commitment to innovation and excellence, Cali Digital
            Marketing offers tailored strategies to help businesses thrive in
            the digital landscape. By leveraging the latest technologies and
            industry trends, they deliver cutting-edge solutions that drive
            growth and engagement. Whether you're looking to enhance your online
            presence or develop custom mobile applications, Cali Digital
            Marketing is your trusted partner for achieving your business goals.
          </p>
          <button className="bg-[#ccaa0d] text-white font-bold py-3 px-6 rounded-md shadow-lg transition">
            Learn More
          </button>
        </div>

        <div className="relative">
          <img src={ourstory} alt="Team" className="rounded-lg shadow-lg" />
          {/* <div className="absolute border-4 border-orange-500 rounded-lg inset-0 top-4 left-4 -z-10"></div> */}
          <div className="absolute right-4 bottom-4 w-24 h-24 border-4 border-[#ccaa0d] z-10">
            <div className="absolute w-full h-full border-dashed border-[#ccaa0d] border-2 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowOurStory;
