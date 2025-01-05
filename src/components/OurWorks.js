import React from 'react';
import websitedesign from "../assets/wesite-design-work1.jpg";
import appdevelopment from "../assets/app-development-work2.jpg";
import seo from "../assets/seo-work3.jpg";
import socialmedia from "../assets/social-media-work4.jpg";
import emailmarketing from "../assets/Email-marketing-work5.jpg";
import responsivedesign from "../assets/Responsive-Design-work6.jpg";
import graphicdesign from "../assets/Graphic-design-work7.jpg";
import branding from "../assets/it-serviceimg3.jpg";
import marketingconsulting from "../assets/Marketing-Consulting-work8.jpg";

const works = [
  { title: 'Website Design', image: websitedesign },
  { title: 'Mobile Application', image: appdevelopment },
  { title: 'SEO', image: seo },
  { title: 'Social Media', image: socialmedia },
  { title: 'Email Marketing', image: emailmarketing },
  { title: 'Responsive Design', image: responsivedesign },
  { title: 'Graphic Design', image: graphicdesign },
  { title: 'Branding', image: branding },
  { title: 'Marketing Consulting', image: marketingconsulting },
];

const OurWorks = () => {
  return (
    <section className="bg-[#f5f7fa] text-white py-12 ">
      <div className="container mx-auto text-center mt-20">
        <h2 className="text-5xl font-bold mb-4 text-black">Our Works</h2>
        <p className="text-gray-500 mb-8">
          Take a look at some of our featured projects that showcase our expertise and creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <img src={work.image} alt={work.title} className="w-full h-60 object-cover group-hover:opacity-75 transition" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0d3880] text-white text-center py-4 opacity-80 group-hover:opacity-100 transition font-bold text-lg lg:text-xl">
                {work.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
