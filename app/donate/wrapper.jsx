"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ArrowLeftIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Wrapper = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

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
      toast({
        title: "Thank you Your donation has been Successful",
      });
      router.push("/thank-you");
    } else {
      toast({
        variant: "destructive",
        title: "Opps something happened, try again",
      });
    }
  };

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    >
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-yellow-400 text-black flex flex-col-reverse items-start md:flex-row md:items-center justify-start gap-4 md:justify-between">
              <h1 className="text-2xl font-bold">Complete Your Donation</h1>
              <button
                onClick={() => router.push("/")}
                className="flex items-center text-sm bg-white px-3 py-1 rounded-full transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                Back to Home
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="text-lg font-semibold">${amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="text-sm font-semibold capitalize">{type}</p>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-center text-gray-600 mb-4">
                  Proceed with your donation.
                </p>
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
                    return actions.order
                      .capture()
                      .then(handlePaypalTransaction);
                  }}
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "rect",
                    label: "donate",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Wrapper;
