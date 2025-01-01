import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/pricing-bg.webp"
const smallPackages = [
  {
    title: "Free",
    price: "$0",
    features: [
      "5 Users",
      "Basic Support",
      "1 GB Cloud Storage",
      "Limited Access to Tools",
    ],
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Plus",
    price: "$29",
    features: [
      "15 Users",
      "Priority Support",
      "50 GB Cloud Storage",
      "Access to Standard Tools",
    ],
    gradient: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    title: "Starter",
    price: "$15",
    features: [
      "10 Users",
      "Email Support",
      "10 GB Cloud Storage",
      "Basic Tools",
    ],
    gradient: "bg-gradient-to-r from-gray-500 to-gray-700",
  },
];

const largePackages = [
  {
    title: "Standard",
    price: "$59",
    features: [
      "50 Users",
      "Dedicated Support",
      "200 GB Cloud Storage",
      "Advanced Analytics Tools",
    ],
    gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
  },
  {
    title: "Business",
    price: "$79",
    features: [
      "Unlimited Users",
      "24/7 Premium Support",
      "1 TB Cloud Storage",
      "All Tools & Features Included",
    ],
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    title: "Enterprise",
    price: "$99",
    features: [
      "Unlimited Users",
      "Dedicated Account Manager",
      "5 TB Cloud Storage",
      "Custom Features",
    ],
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
  },
];

const PricingPlans = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pricing Plans | IT Services";
  }, []);

  const handleGetPlan = (planTitle) => {
    navigate(`/plan-details/${planTitle}`);
  };

  const renderPlans = (plans) => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 0.8 },
        },
      }}
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          className={`rounded-xl shadow-lg p-7 text-center transform transition-all duration-500 hover:scale-105 ${plan.gradient}`}
          style={{ border: "2px solid #ccaa0d" }}
          whileHover={{ scale: 0.9 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">{plan.title}</h3>
          <div className="text-6xl font-extrabold text-white mb-6">{plan.price}</div>
          <div className="text-lg text-gray-300 mb-6 uppercase tracking-wide">
            Per Month
          </div>
          <hr className="border-gray-400 mb-6" />
          <ul className="space-y-4 mb-8 text-left text-white">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-3 text-[#ccaa0d]">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="bg-[#ccaa0d] text-black py-3 px-6 rounded-lg font-medium tracking-wide hover:bg-white transition-transform duration-300 transform hover:scale-110"
            onClick={() => handleGetPlan(plan.title)}
          >
            Get Plan
          </button>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="mb-20">
        <section
        className="relative w-full h-[80vh] bg-cover bg-center "
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
     
      <div className=" py-10 px-6">
        <h3 className="text-4xl text-center font-bold mb-10">Small Packages</h3>
        {renderPlans(smallPackages)}
      </div>

      {/* Large Packages */}
      <div className="py-20 px-6">
        <h3 className="text-4xl text-center font-bold mb-10">Large Packages</h3>
        {renderPlans(largePackages)}
      </div>
    </div>
  );
};

export default PricingPlans;
