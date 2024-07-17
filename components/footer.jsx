import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-24 ">
      <div className="max-w-screen-xl mx-auto  ">
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  md:gap-6 py-8 px-3 lg:px-0">
          <div>
            <h3 className="font-semibold uppercase mb-4">get to know us</h3>
            <ul className=" md:text-base mt-2 text-slate-300">
              <li>who we are</li>
              <li>our work</li>
              <li>where we work</li>
              <li>our partners</li>
              <li>our team</li>
              <li>kasese municipality</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase mb-4">support</h3>
            <ul className=" md:text-base mt-2 text-slate-300">
              <li>donate</li>
              <li>contact us</li>
              <li>volunteer</li>
              <li>gallery</li>
              <li>blog</li>
              <li>upcoming events</li>
            </ul>
          </div>

          <div className="ring-2 ring-yellow-500 bg-white shadow text-black rounded-lg p-6 h-auto flex flex-col justify-center gap-6">
            <h3 className="uppercase font-semibold">Stay connected</h3>

            <Input placeholder="Email" className="h-11 md:h-12 rounded-none" />
            <Button
              size="lg"
              className="font-semibold bg-yellow-400 hover:bg-yellow-600 text-black uppercase rounded-none flex items-center gap-2"
            >
              Submit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </nav>

        <div className="flex justify-between items-center px-3 lg:px-0">
          <div className="flex items-center gap-6">
            <FaFacebook className="w-9 h-9 md:h-12 md:w-12" />
            <FaLinkedin className="h-9 w-9 md:h-12 md:w-12" />
            <FaSquareXTwitter className="h-9 w-9 md:h-12 md:w-12" />
          </div>

          <img src="/logo.svg" className="w-32 h-32" />
        </div>

        <Separator className="mt-4" />

        <div className="h-auto relative ">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className=" mb-6" />

            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground ">
                  © {new Date().getFullYear()} Mother of hope foundation uganda.
                  All rights reserved.
                </p>
              </div>

              <nav className="flex flex-wrap justify-center md:justify-end">
                <Link href="/terms" className="text-sm  mx-2 my-1">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm  mx-2 my-1">
                  Privacy Policy
                </Link>
                <Link href="/sitemap" className="text-sm  mx-2 my-1">
                  sitemap
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
