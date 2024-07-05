import Image from "next/image";
import { Button } from "./ui/button";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="max-w-screen-xl px-4 md:px-6 mx-auto">
        <div className="w-full max-w-3xl mx-auto flex justify-center items-center text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-3xl md:text-3xl text-gray-900  ">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 md:text-xl/relaxed ">
              Mother of Hope Foundation Uganda is a Community-Based non-profit
              organization located in Nyamwamba Division, Kasese Municipality,
              Uganda. Founded in 2020 as a response to the pressing economic and
              social challenges faced by the local communities.
            </p>
            <p className="text-lg text-gray-600 md:text-xl/relaxed">
              The foundation strives to enact positive change and holistic
              transformation for individuals who grapple with economic and
              social disadvantages.
            </p>

            <Button
              className="bg-yellow-400 hover:bg-yellow-500 rounded-none text-gray-950 transition duration-300 ease-in-out transform hover:scale-105 font-bold text-lg"
              size="lg"
            >
              Read The Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
