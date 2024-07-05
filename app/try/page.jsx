import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <LeafIcon className="w-6 h-6 text-green-600" />
          <h1 className="text-xl font-bold">Zero Hunger</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="#" className="text-green-600" prefetch={false}>
            Home
          </Link>
          <Link href="#" prefetch={false}>
            Pages
          </Link>
          <Link href="#" prefetch={false}>
            Donations
          </Link>
          <Link href="#" prefetch={false}>
            Events
          </Link>
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <section
        className="relative w-full h-screen min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}
        role="banner"
        aria-label="Creating a thriving community in Kasese"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center max-w-4xl">
            Creating a thriving community in{" "}
            <span className="text-rose-600">Kasese</span> despite economic and
            sustainability challenges
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white text-center max-w-2xl">
            Your support can make a difference. Every donation helps us reach
            and empower more communities in need.
          </p>
          <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Discover More
          </Button>
        </div>
      </section>
      <section className="py-16 text-center">
        <h3 className="text-lg font-semibold text-gray-500">
          WELCOME TO Zero Hunger
        </h3>
        <h2 className="mt-2 text-3xl font-bold">
          We Believe that we can Eradicate{" "}
          <span className="text-red-600">Poverty</span> with you
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <PowerIcon className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Support</h4>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <PowerIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Prayers</h4>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <VoteIcon className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Volunteers</h4>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <GiftIcon className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Donations</h4>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg"
                alt="Who We Are"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 md:pl-16">
              <h3 className="text-2xl font-bold">Who We Are</h3>
              <p className="mt-4 text-gray-600">
                A non-profit and non-Governmental Organization founded in 2022
                to promote sustainable agriculture, improve nutrition, and
                achieve food security.
              </p>
              <p className="mt-4 text-gray-600">
                We commit ourself to helping families in the poor communities,
                the marginalized and underprivileged to improve their lives and
                achieve lasting victory against poverty.
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <Button className="bg-orange-500 text-white">
                  Discover More
                </Button>
                <Button
                  variant="outline"
                  className="text-red-600 border-red-600"
                >
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">What We Do?</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">15 MILLION PEOPLE</h4>
            <p className="mt-2 text-gray-600">
              Our life-changing programs in 2022 reached 15 million people in
              Nigeria.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">36 STATES</h4>
            <p className="mt-2 text-gray-600">
              We fight hunger, improve agriculture growth and provide nutrition
              in 36 states in Nigeria.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">FARM CARETAKERS</h4>
            <p className="mt-2 text-gray-600">
              We employ farm caretakers to manage our crops. They are the key to
              the success of the program.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Core Team</h2>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Fidelis Phoebe"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Fidelis Phoebe</h4>
              <p className="mt-2 text-gray-600">MD & CEO</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Onyekachi James"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Onyekachi James</h4>
              <p className="mt-2 text-gray-600">Founder & Chairman</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Temitope Joshua"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Temitope Joshua</h4>
              <p className="mt-2 text-gray-600">Chief Operating Officer</p>
            </div>
          </div>
          <Button className="mt-8 bg-orange-500 text-white">
            View All Team
          </Button>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
          <img
            src="/placeholder.svg"
            alt="Gallery Image 1"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 2"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 3"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 4"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 5"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 7"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/placeholder.svg"
            alt="Gallery Image 8"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <Button className="mt-8 bg-orange-500 text-white">View All</Button>
      </section>
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-semibold">Get connected</h4>
            <p className="mt-4">
              Join the conversation on social, and stay connected with our
              latest events and partners around the world.
            </p>
            <div className="flex space-x-4 mt-4">
              <FacebookIcon className="w-6 h-6" />
              <TwitterIcon className="w-6 h-6" />
              <InstagramIcon className="w-6 h-6" />
              <YoutubeIcon className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="mt-4">Ojay Street, Kreg Ave, Lagos, Nigeria</p>
            <p className="mt-2">Zerohunger@awareness.com</p>
            <p className="mt-2">081xxxxxxxx | 090xxxxxxxx</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Stay Informed</h4>
            <p className="mt-4">
              Subscribe to our newsletter to receive updates of latest news and
              events.
            </p>
            <form className="mt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="mt-2 bg-orange-500 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function VoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
