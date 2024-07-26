"use client";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

const WhyVolunteer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const reasons = [
    "Educate local communities on sustainable farming and economic empowerment.",
    "Assist in reforestation, clean energy initiatives, and waste management programs",
    "Gain valuable experience in development work",
    "Be part of a global movement for positive change",
    "Teach valuable skills to empower individuals economically while promoting environmental stewardship",
  ];

  return (
    <section className="mb-4">
      <div className="mx-auto max-w-3xl bg-white rounded p-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h3 className="font-bold text-lg">Why Partner with us?</h3>
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

export default WhyVolunteer;
