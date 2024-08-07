import { createCanvas } from "canvas";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const location = searchParams.get("location");

  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#333");
  gradient.addColorStop(1, "#000");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Text settings
  ctx.fillStyle = "#fff";
  ctx.font = "bold 80px Arial";
  ctx.textAlign = "center";

  // Draw title
  ctx.fillText(title, width / 2, height / 2 - 100);

  // Draw date
  ctx.font = "bold 40px Arial";
  ctx.fillText(date, width / 2, height / 2 + 10);

  // Draw location
  ctx.font = "bold 40px Arial";
  ctx.fillText(location, width / 2, height / 2 + 70);

  // Draw MOHFU at the bottom
  ctx.font = "bold 20px Arial";
  ctx.fillText("Mother of hope foundation uganda", width / 2, height - 50); // Adjusted position to be near the bottom

  const buffer = canvas.toBuffer("image/png");
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
