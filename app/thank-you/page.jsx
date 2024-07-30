"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThankYou = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center  min-h-screen w-[95%] mx-auto">
      <div className="border h-fit p-6">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <div className="text-6xl mb-4 flex justify-center">
          <img src="/smile.svg" className="w-28 h-28" />
        </div>
        <p className="text-lg text-gray-700 max-w-md">
          We appreciate your generous donation. Your support helps us continue
          our mission and make a positive impact.
        </p>

        <Button variant="outline" size="sm" className="my-4 font-medium">
          <Link href="/">Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
