import React from "react";
import { Geist_Mono } from "next/font/google";
import Image from "next/image";

const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const HyperProcessSection = () => {
  return (
    <section className="text-white flex justify-center items-center py-16 px-6 md:px-52">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
 
        <div>
          <p
            className={`text-lime-400 uppercase font-extralight text-sm mb-4 ${geist.className}`}
          >
            {"// The Process®"}
          </p>
          <h1 className="text-5xl font-normal leading-tight mt-4">
            Unique.
            <br /> Strategic.
            <br /> Timeless.
          </h1>
          <div className="mt-24">
            <p className="text-gray-300 font-extralight mt-2">
              We keep working until you are <br />
              100% satisfied with the final result.
            </p>
            <button
              className={`flex items-center  mt-8 px-6 py-3 bg-gray-200 gap-x-2 uppercase text-black font-light rounded-xl hover:bg-gray-300 transition ${geist.className}`}
            >
              Start Your Journey{" "}
              <Image
                src="/ui/svg/arrow-top.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
          </div>
        </div>


        <div className="flex flex-col space-y-8">
          {[
            {
              title: "Mission Brief",
              description:
                "It all begins with a no-stress chat. Without compromises.",
            },
            {
              title: "Strategize",
              description:
                "We analyze your brand and plan a custom roadmap.",
            },
            {
              title: "Create",
              description:
                "Time to design and ask for feedback. We lock in and work.",
            },
            {
              title: "Lift-Off",
              description:
                "It’s go-time! We launch your project, monitor its impact, and make adjustments to maximize performance.",
            },
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <span className="text-neutral-500 text-sm font-extralight">
                  {`0${index + 1}`}
                </span>
                <div className="w-[1px] h-20 bg-neutral-700 mt-1"></div>
              </div>

              <div>
                <h3 className="text-xl font-normal">{step.title}</h3>
                <p className="text-neutral-400 font-extralight mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperProcessSection;
