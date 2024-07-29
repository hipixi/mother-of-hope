"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ amount, type }) => {
  const handlePaypalTransaction = async (details) => {
    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        frequency: active,
        paypalDetails: details,
      }),
    });

    if (response.ok) {
      alert("Donation successful!");
    } else {
      alert("There was an error processing your donation.");
    }
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(handlePaypalTransaction);
      }}
      style={{ layout: "vertical", shape: "rect" }}
    />
  );
};

export default DonateButton;
