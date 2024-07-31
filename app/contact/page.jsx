import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import ContactForm from "./form";

export const metadata = {
  title: "Contact | Mother of Hope foundation Uganda",

  description: "All the relevant ways to contact us",

  openGraph: {
    title: `Contact | Mother of hope foundation uganda`,
    description: `All the relevant ways to contact us`,
    images: [
      {
        url: ``,
        width: 800,
        height: 600,
        alt: ``,
      },
    ],
  },
};
export default function Contact() {
  return (
    <div className="flex flex-col min-h-dvh bg-gray-100">
      <Header />
      <section className="w-full max-w-screen-xl mx-auto py-12 md:py-24 lg:py-32 ">
        <div className="max-w-screen-xl bg-white p-8 py-12 lg:py-24 rounded-[2.5rem] w-[95%] mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-gray-600  max-w-2xl mx-auto mb-12">
                Have questions or want to learn more about our foundation? We
                are here to help.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="w-full  py-12 md:py-24 bg-gray-100 lg:py-32">
        <div className="max-w-screen-xl mx-auto rounded-[2.5rem] bg-white px-4 md:px-6 w-[95%] p-8 py-12 lg:py-24">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Physical Address
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 flex-wrap">
                  <MapPinIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">
                      Mother of hope foundation uganda
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Kasese municipality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">+(256) 7798 49930</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Monday - Sunday, 8am - 6pm
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4 flex-wrap">
                  <MailIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">
                      motherofhopefoundationuganda@gmail.com
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get in touch with us
                    </p>
                  </div>
                </div> */}

                {/* <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">info@jinjatoursandsafaris.com</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Alternative Email
                    </p>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
            <div>
              <Image
                src="/together.svg"
                width="550"
                height="410"
                alt=""
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
