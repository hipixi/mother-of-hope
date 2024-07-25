"use client";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

const Requirements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const reasons = [
    "Passion for social and environmental causes",
    "Commitment to 10 hours/week for at least 3 months",
    "Relevant skills or willingness to learn",
    "Access to a computer and reliable internet connection",
  ];

  return (
    <section className="mb-4">
      <div className="mx-auto max-w-3xl bg-white rounded p-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h3 className="font-bold text-lg">Any Requirements?</h3>
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

export default Requirements;
