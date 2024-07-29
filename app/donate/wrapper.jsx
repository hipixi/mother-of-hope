"use client";

import { useSearchParams } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Wrapper = () => {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const type = searchParams.get("type");

  const handlePaypalTransaction = async (details) => {
    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        frequency: type,
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
    <PayPalScriptProvider
      options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    >
      <div className="w-full  max-w-3xl mx-auto my-10 space-y-4 rounded border p-6">
        <h1 className="text-lg font-semibold">Complete your donation</h1>
        <p>Amount: {amount}</p>
        <p>Type: {type}</p>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.replace(",", ""),
                  },
                },
              ],

              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(handlePaypalTransaction);
          }}
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "donate",
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Wrapper;
