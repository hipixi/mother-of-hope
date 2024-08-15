import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PopupDonate from "./donate-pop";
import ScrollLink from "./scroll";
import Subscribe from "./subscribe";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-t-[2.5rem] text-white pt-12 md:pt-24 ">
      <div className="max-w-screen-xl mx-auto  ">
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  md:gap-6 py-8 px-3">
          <div className="">
            <h3 className="font-semibold uppercase mb-4 text-xl">
              get to know us
            </h3>
            <ul className=" text-lg mt-2 text-slate-300">
              <li>
                <ScrollLink href="#who-we-are">who we are</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#what-we-do">what we do</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#our-team">our team</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#get-involved">get involved</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#our-partners">our partners</ScrollLink>
              </li>
              <li>
                <Link href="/login">login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl uppercase mb-4">support</h3>
            <ul className=" text-lg mt-2 text-slate-300">
              <Dialog>
                <DialogTrigger>
                  <li>donate</li>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold  text-center ">
                        Help Build a Resilient{" "}
                        <span className="text-rose-600">Kasese</span>
                      </h1>
                    </DialogTitle>
                  </DialogHeader>
                  <PopupDonate />
                </DialogContent>
              </Dialog>
              <li>
                <Link href="/get-involved/partner">partner</Link>
              </li>
              <li>
                <Link href="/get-involved/volunteer">volunteer</Link>
              </li>
              <li>
                <Link href="/gallery">gallery</Link>
              </li>
              <li>
                <Link href="/contact">contact us</Link>
              </li>
              <li>
                <Link href={"/blog"}>blog</Link>
              </li>
            </ul>
          </div>

          <Subscribe />
        </nav>

        <div className="flex justify-between items-center px-3">
          <div className="flex items-center gap-6">
            <FaFacebook className="w-9 h-9 md:h-12 md:w-12" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/mother-of-hope-foundation-uganda/"
            >
              <FaLinkedin className="h-9 w-9 md:h-12 md:w-12" />
            </a>
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
                <p className="text-base text-muted-foreground ">
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
                <a
                  href="https://www.motherofhopefoundationuganda.org/sitemap.xml"
                  className="text-sm  mx-2 my-1"
                >
                  sitemap
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
