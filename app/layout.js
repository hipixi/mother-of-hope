import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mother Of Hope Foundation Uganda",
  description:
    "Mother of Hope Foundation Uganda is a Community-Based non-profit organization located in Nyamwamba Division, Kasese Municipality, Uganda",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mother Of Hope Foundation Uganda",
    description:
      "Mother of Hope Foundation Uganda is a Community-Based non-profit organization located in Nyamwamba Division, Kasese Municipality, Uganda",
    images: [
      {
        url: "/logo.svg",
        alt: "Mother Of Hope Foundation Uganda Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="tCeEpBupta0WK2UTnKiQlz_PbqlCd1WOMHhbnI9T1jE"
        />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={cn("antialiased", inter.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
