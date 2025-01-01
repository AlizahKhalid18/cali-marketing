import React from "react";
import ourstory from "../assets/our-storyimg.jpg"
const KnowOurStory = () => {
  return (
    <section className="hero-section bg-[#0d3880] text-white py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
   
        <div>
          <h2 className="text-4xl font-bold mb-6">Know Our Story</h2>
          <p className="text-lg leading-7 mb-6">
            Founded in 2019, Lunaria is a leading web consulting firm based in
            Malang, Indonesia. Our expert team specializes in web development,
            design, digital marketing, and strategic consulting. We craft
            tailored solutions to exceed client expectations, staying ahead of
            industry trends to provide cutting-edge solutions. Beyond projects,
            we prioritize lasting relationships, offering ongoing support for
            sustained success. Whether you're a startup or an established
            enterprise, Lunaria is your dedicated partner in achieving digital
            excellence.
          </p>
          <button className="bg-[#ccaa0d] text-white font-bold py-3 px-6 rounded-md shadow-lg transition">
            Learn More
          </button>
        </div>

      
        <div className="relative">
          <img
            src={ourstory} 
            alt="Team"
            className="rounded-lg shadow-lg"
          />
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
