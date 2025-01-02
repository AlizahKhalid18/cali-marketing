import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-800"
      >
        <span>{question}</span>
        <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="pl-4 pb-4 text-gray-600">{answer}</p>}
    </div>
  );
};

export default Accordion;
