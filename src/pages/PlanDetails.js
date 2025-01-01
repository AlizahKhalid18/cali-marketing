import React from "react";
import { useParams } from "react-router-dom";

// Small and large package data
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

// Combine all packages into a single array
const allPackages = [...smallPackages, ...largePackages];

const PlanDetails = () => {
  const { planTitle } = useParams(); // Get the planTitle from URL parameters

  // Find the selected plan based on the planTitle
  const selectedPlan = allPackages.find(
    (plan) => plan.title.toLowerCase() === planTitle.toLowerCase()
  );

  if (!selectedPlan) {
    return <div className="text-center py-20 text-white">Plan not found</div>; // Handle invalid plan title
  }

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl mt-10 font-extrabold tracking-wide">
          {selectedPlan.title} Plan
        </h2>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          {selectedPlan.title} Plan offers amazing features to meet your business needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-4xl font-bold text-white mb-6">
          {selectedPlan.price}
        </h3>
        <h4 className="text-xl text-gray-300 mb-6">Features:</h4>
        <ul className="space-y-4 text-left text-white mb-8">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-3 text-[#ccaa0d]">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-[#ccaa0d] text-black py-3 px-6 rounded-lg font-medium tracking-wide hover:bg-white transition-transform duration-300 transform hover:scale-110">
          Get {selectedPlan.title} Plan
        </button>
      </div>
    </div>
  );
};

export default PlanDetails;
