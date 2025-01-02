import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      question: "What IT Services Do You Offer?",
      answer:
        "We specialize in custom software development, cloud solutions, cybersecurity, and more.",
    },
    {
      question: "How Do You Determine The Cost Of IT Services?",
      answer:
        "Costs are determined based on the project scope, technology stack, and timeline.",
    },
    {
      question: "What Sets Your IT Firm Apart From Competitors?",
      answer:
        "We focus on delivering scalable, secure, and innovative IT solutions tailored to your business needs.",
    },
    {
      question: "How Long Does A Typical IT Consulting Engagement Last?",
      answer:
        "The duration depends on the complexity of the IT project and the specific requirements.",
    },
    {
      question: "Can You Explain Your Team's IT Expertise?",
      answer:
        "Our team consists of certified professionals with expertise in software development, cloud infrastructure, and cybersecurity.",
    },
    {
      question: "How Do You Measure The Success Of Your IT Solutions?",
      answer:
        "Success is measured through performance metrics, client satisfaction, and the long-term impact of the solutions on your business.",
    },
  ];

  return (
    <div className="faq-section px-4 py-8 max-w-4xl mx-auto mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0d3880] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Here are the most common questions we receive about our IT services.
          We hope they help clarify any doubts you may have.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-[#0d3880] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          <Link
            to="/contact"
            className="block px-4 py-2 hover:text-[#ccaa0d] transition"
          >
            Contact Us Via Form
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
