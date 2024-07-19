"use client";
import { Button } from "./ui/button";
import { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState("Once");
  const [activeAmount, setActiveAmount] = useState("20,000");

  const amounts = ["10,000", "20,000", "50,000"];
  const otherAmounts = ["100,000", "Other amount"];

  const buttons = [{ name: "Once" }, { name: "Monthly" }];
  return (
    <section
      className="relative w-full h-[650px] md:h-[720px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://live.staticflickr.com/65535/53836398621_176c33a1cb_c.jpg')",
      }}
      role="banner"
      aria-label="Building a resilient Kasese community"
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto md:mx-4 m-4 shadow-lg flex flex-col items-center bg-white max-w-xl rounded-lg p-3 py-10 md:px-6 md:py-20 text-black">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold  text-center max-w-4xl">
            Building a Resilient <span className="text-rose-600">Kasese</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-center max-w-2xl">
            Creating a community that thrives despite economic and
            sustainability challenges
          </p>

          <div className="w-full lg:w-[70%] mx-auto">
            <div className="bg-muted w-full  rounded flex items-center my-6 border border-black">
              {buttons.map((btn) => (
                <Button
                  onClick={() => setActive(btn.name)}
                  key={btn}
                  className={`rounded-none flex-1 first-of-type:border-r first-of-type:border-r-black ${
                    active === btn.name
                      ? "bg-primary text-black hover:bg-primary"
                      : "bg-white text-black hover:bg-white"
                  }`}
                >
                  {btn.name}
                </Button>
              ))}
            </div>
            <div className="rounded border w-full bg-muted space-y-2 py-6 px-3">
              <h1 className="text-center py-2 border-b font-medium">
                Choose an amount to give
              </h1>

              <div className="grid grid-cols-3 gap-1">
                {amounts.map((amt) => (
                  <div
                    onClick={() => setActiveAmount(amt)}
                    key={amt}
                    className={`rounded cursor-pointer border p-1 py-3 flex justify-center items-center ${
                      activeAmount === amt && "border-primary"
                    }`}
                  >
                    {amt}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1 ">
                {otherAmounts.map((amt) => (
                  <div
                    onClick={() => setActiveAmount(amt)}
                    key={amt}
                    className={`rounded border p-1 py-3 flex justify-center items-center first-of-type:col-span-1 cursor-pointer last-of-type:col-span-2 ${
                      activeAmount === amt && "border-primary"
                    }`}
                  >
                    {amt}
                  </div>
                ))}
              </div>

              <Button className="w-full font-bold my-3">Give</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
