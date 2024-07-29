"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Donate = () => {
  const [active, setActive] = useState("Once");
  const [activeAmount, setActiveAmount] = useState("20,000");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = ["10,000", "20,000", "50,000"];

  const buttons = [{ name: "Once" }, { name: "Monthly" }];
  const router = useRouter();

  const handleAmountClick = (amt) => {
    if (amt === "Other amount") {
      setActiveAmount("Other amount");
      setCustomAmount("");
    } else {
      setActiveAmount(amt);
    }
  };

  const handleDonateClick = () => {
    const amount =
      activeAmount === "Other amount" ? customAmount : activeAmount;
    const donationType = active;
    router.push(`/donate?amount=${amount}&type=${donationType}`);
  };

  return (
    <>
      <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto md:mx-4 m-4 shadow-lg flex flex-col items-center bg-white max-w-xl rounded-lg p-3 py-10 md:px-6 md:py-20 text-black">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold  text-center max-w-4xl">
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
                  key={btn.name}
                  className={`rounded-none flex-1 first-of-type:border-r first-of-type:rounded-tl first-of-type:rounded-bl last-of-type:rounded-tr last-of-type:rounded-br first-of-type:border-r-black ${
                    active === btn.name
                      ? "bg-primary text-black hover:bg-primary"
                      : "bg-white text-black hover:bg-white"
                  }`}
                >
                  {btn.name}
                </Button>
              ))}
            </div>
            <div className="rounded border w-full bg-muted space-y-3 py-6 px-3">
              <h1 className="text-center py-2 border-b font-medium">
                Choose an amount to give
              </h1>

              <div className="grid grid-cols-3 gap-1">
                {amounts.map((amt) => (
                  <div
                    onClick={() => handleAmountClick(amt)}
                    key={amt}
                    className={`rounded cursor-pointer border p-1 py-3 flex justify-center items-center ${
                      activeAmount === amt && "bg-primary"
                    }`}
                  >
                    {amt}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1 ">
                <div
                  onClick={() => handleAmountClick("100,000")}
                  className={`rounded border p-1 py-3 flex justify-center items-center cursor-pointer ${
                    activeAmount === "100,000" && "bg-primary"
                  }`}
                >
                  100,000
                </div>
                <div className="col-span-2">
                  {activeAmount === "Other amount" ? (
                    <input
                      type="text"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full h-full rounded border border-primary focus-visible:outline-none focus-visible:ring-0 p-1 py-3 text-center"
                    />
                  ) : (
                    <div
                      onClick={() => handleAmountClick("Other amount")}
                      className="rounded border p-1 py-3 flex justify-center items-center cursor-pointer"
                    >
                      Other amount
                    </div>
                  )}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full rounded-none text-lg font-bold my-6"
                onClick={handleDonateClick}
              >
                Donate
              </Button>
            </div>

            <div className="flex justify-center items-center text-muted-foreground my-2 gap-1">
              <Lock className="w-4 h-4" /> <span>secure donation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
