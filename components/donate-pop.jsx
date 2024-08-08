"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PopupDonate = () => {
  const [active, setActive] = useState("Once");
  const [activeAmount, setActiveAmount] = useState("10");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = ["5", "10", "20"];

  const buttons = [{ name: "Once" }, { name: "Monthly" }];
  const router = useRouter();

  const handleAmountClick = (amt) => {
    if (amt === "Other amoun") {
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
      <div className="">
        <div className="w-full  flex flex-col items-center text-black">
          <div className="w-full  mx-auto">
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
                    ${amt}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1 ">
                <div
                  onClick={() => handleAmountClick("50")}
                  className={`rounded border p-1 py-3 flex justify-center items-center cursor-pointer ${
                    activeAmount === "50" && "bg-primary"
                  }`}
                >
                  $50
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

export default PopupDonate;
