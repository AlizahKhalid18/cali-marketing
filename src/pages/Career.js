import React, { useState } from "react";
import "./Career.css";
import careerbg from "../assets/careerbg.avif";

import CareerModal from "../components/CareerModal";

const Career = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "Web Developer",
      description:
        "Are you a skilled Web Developer seeking to join a dynamic and revolutionary crew? Cali Marketing is looking for a talented individual to help us create beautiful, high-performance websites for our diverse clients. As a Web Developer at Cali Marketing, you will play a vital role in building and maintaining websites that not only look great but also deliver exceptional user experiences.",
    },
    {
      title: "Graphic Designer",
      description:
        "Are you an innovative and talented Graphic Designer looking to join a creative team? Cali Marketing is searching for a skilled professional to bring visual storytelling to life through compelling designs. As a Graphic Designer at Cali Marketing, you’ll be an essential part of our team, creating visually stunning graphics that resonate with our diverse client base.",
    },
    {
      title: "Social Media Manager",
      description:
        "Are you a savvy and strategic Social Media Manager eager to join an innovative team? Cali Marketing is looking for a talented individual to enhance our online presence and drive engagement across multiple platforms. As a Social Media Manager at Cali Marketing, you will craft and execute effective social media strategies aligned with our brand and business goals.",
    },
    {
      title: "SEO Specialist",
      description:
        "Do you have a passion for search engine optimization and digital visibility? Cali Marketing is seeking an experienced SEO Specialist to improve website rankings and drive organic traffic. As an SEO Specialist, you'll analyze, optimize, and implement strategies that elevate our clients' online presence in search engine results.",
    },
    {
      title: "Google Ads Specialist",
      description:
        "Are you an expert in paid advertising and campaign management? Cali Marketing is looking for a Google Ads Specialist to design and manage high-performing ad campaigns. Join our team to help clients achieve measurable results and maximize ROI through data-driven strategies.",
    },
    {
      title: "Email Marketing Specialist",
      description:
        "Are you a creative and results-driven Email Marketing Specialist? Cali Marketing needs a professional to craft engaging email campaigns that captivate and convert. As an Email Marketing Specialist, you’ll design, test, and analyze campaigns that strengthen customer relationships and drive business growth.",
    },
    {
      title: "Brand Strategist",
      description:
        "Do you have a knack for crafting compelling brand identities? Cali Marketing is seeking a Brand Strategist to develop and implement branding strategies that resonate with our clients' audiences. Join us to create meaningful connections and elevate brand value through innovation and strategy.",
    },
    {
      title: "Marketing Consultant",
      description:
        "Are you a strategic thinker with a passion for solving marketing challenges? Cali Marketing is looking for a Marketing Consultant to provide expert insights and tailored strategies for our clients. As a Marketing Consultant, you’ll collaborate with businesses to identify opportunities and create impactful marketing solutions.",
    },
  ];
  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };
  return (
    <div className="job-section">
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${careerbg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Career</h1>
        <p className="text-lg md:text-md max-w-xl mb-8">
          Our mission at Cali Marketing is to empower talent and foster growth
          by providing innovative opportunities in web design, development,
          mobile apps, and digital content creation. Join us to turn your
          passion into impact!
        </p>
      </div>
    </section>
    <header className="header mt-10">
      <p className="vacancy-announcement">VACANCY ANNOUNCEMENT</p>
      <h1>
        Be A Part Of Our <span className="highlight">Team</span>. Join Us Now
      </h1>
    </header>
    <div className="job-container">
      {jobs.map((job, index) => (
        <div
          key={index}
          className={`job-card ${index % 3 === 2 ? "end-row" : ""}`}
        >
          <p className="job-type">FULL-TIME / PART-TIME</p>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-description">{job.description}</p>
          <button
            className="apply-button"
            onClick={() => handleApplyClick(job.title)}
          >
            APPLY NOW
          </button>
        </div>
      ))}
    </div>

    <CareerModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      jobTitle={selectedJob}
    />
  </div>
  );
};

export default Career;
