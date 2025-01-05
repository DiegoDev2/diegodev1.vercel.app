import Image from "next/image";
import { Geist_Mono } from "next/font/google";
const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-center items-center py-4">

        <div className="flex items-center space-x-10">
          <div className="text-white font-normal text-lg ">
            DiegoDev1
          </div>

          <div className="h-6 w-px bg-neutral-700"></div>

          <nav className={`flex space-x-4 ${geist.className}`}>
            <a
              href="#things"
              className="text-white text-sm  font-light tracking-widest hover:underline"
            >
              ABOUT-ME
            </a>
            <a
              href="#projects"
              className="text-white text-sm  font-light tracking-widest hover:underline"
            >
              PROJECTS
            </a>
          </nav>

          <div className="px-28">
            <a
              href="#start"
              className={`flex gap-x-2 items-center px-5 py-2 bg-gray-200 text-black text-sm font-light rounded-xl hover:bg-gray-300 transition-all ${geist.className}`}
            >
              START  NOW <Image src="/ui/svg/arrow-top.svg" width={20} height={20} alt={""} />
            </a>
          </div>
         
        </div>
      </div>
    </header>
  );
}
