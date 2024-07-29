import dbConnect from "@/lib/dbConnect";
import Donation from "@/models/Donation";

export async function POST(req) {
  try {
    const { amount, frequency, paypalDetails } = await req.json();

    await dbConnect();

    const donation = new Donation({
      amount,
      frequency,
      paypalDetails,
    });

    await donation.save();

    return new Response(
      JSON.stringify({ message: "Donation saved successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error saving donation",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
