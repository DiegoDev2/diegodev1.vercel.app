import { Geist_Mono } from "next/font/google";
import { Cloud, Code, Monitor, RefreshCw } from "lucide-react";

const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function ThingsSection() {
  return (
    <section className="flex justify-center items-center py-16 px-6 md:px-52">
      <div className="max-w-6xl">
        <p className={`text-lime-400 font-extralight text-sm mb-4 ${geist.className}`}>
           { '// THINGS I DO' } 
        </p>
        <h2 className="text-4xl font-normal mb-4 text-white">
          The things that make me sleep late.
        </h2>
        <p className="text-neutral-400 font-light text-base mb-12">
          I'm 15yo and I started a year ago, I specialize in these things
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-md">
            <div className="text-lime-400 mb-4">
              <span className="text-2xl">
                <Cloud />
              </span>
            </div>
            <h3 className="text-xl font-light mb-2 text-white">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-300 font-extralight">
              Building scalable and reliable cloud systems using modern infrastructure.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <div className="text-lime-400 mb-4">
              <span className="text-2xl">
                <Code />
              </span>
            </div>
            <h3 className="text-xl font-light mb-2 text-white">
              CLI Development
            </h3>
            <p className="text-gray-300 font-extralight">
              Creating efficient and intuitive command-line tools for developers.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <div className="text-lime-400 mb-4">
              <span className="text-2xl">
                <Monitor />
              </span>
            </div>
            <h3 className="text-xl font-light mb-2 text-white">
              Web Development
            </h3>
            <p className="text-gray-300 font-extralight">
              Building high-performance websites with a focus on UX/UI and responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <div className="text-lime-400 mb-4">
              <span className="text-2xl">
                <RefreshCw />
              </span>
            </div>
            <h3 className="text-xl font-light mb-2 text-white">
              CI/CD Pipelines
            </h3>
            <p className="text-gray-300 font-extralight">
              Automating development workflows with robust CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

