"use client";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

const Opportunity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const reasons = [
    "Directly impact communities in need",
    "Contribute to sustainable environmental practices",
    "Gain valuable experience in development work",
    "Help secure resources for our poverty alleviation and conservation projects.",
  ];

  return (
    <section className="mb-4">
      <div className="mx-auto max-w-3xl bg-white rounded p-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h3 className="font-bold text-lg">What are my benefits?</h3>
          {isOpen ? (
            <Minus className="w-5 h-6" />
          ) : (
            <Plus className="w-5 h-6" />
          )}
        </div>

        {isOpen && (
          <div className="grid grid-cols-1 gap-6 mt-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg border"
              >
                <ChevronRight className="text-green-500 mr-2" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Opportunity;
