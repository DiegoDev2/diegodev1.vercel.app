import Image from "next/image";
import { Geist_Mono } from "next/font/google";
const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-white z-20 py-12"
    >
      <div className="relative text-center z-10 flex flex-col items-center gap-4 sm:gap-6 mt-8">

        <button className={`relative flex items-center px-4 py-2 text-sm font-light text-white bg-neutral-900 shadow-inner shadow-neutral-700 hover:shadow-neutral-600 rounded-xl  transition w-auto ${geist.className}`}>
          <div className="relative flex items-center justify-center w-4 h-4 mr-2">
            <span className="absolute inline-block w-2 h-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-500 left-1/2 top-1/2"></span>
            <span className="absolute inline-block w-4 h-4 animate-ping rounded-full bg-green-500"></span>
          </div>
          BOOKING Q1-2025
        </button>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal">
        Building DevOps Solutions <br /> and Modern Web Pages
        </h1>
        <p className=" text-xs font-extralight sm:text-base md:text-lg text-gray-300">
        Specialized in DevOps workflows, cutting-edge front-end development, <br />
         and custom CLI tools for efficient, high-performance projects.
        </p>
      </div>

      <Image
        src="/ui/hands.webp"
        width={800}
        height={800}
        className="w-full"
        alt=""
        unoptimized
      />
    </div>
  );
}
