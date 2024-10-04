import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Languajes from "@/components/Languajes";

export default function Landing() {
  return (
    <div className="relative py-20 h-full w-full flex items-center justify-between px-10 max-sm:flex-col">

      <div className="h-full w-full flex flex-col gap-5 justify-center text-start max-w-[600px]">
        
     
          <AnimatedGradientText className="relative bg-[#1b1828b9] justify-end">
            <span
              className={cn(
                `flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#aa6ebc] mr-[10px] h-5 w-5">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
            </svg>
              Programming & Cybersecurity Specialist
            </span>
           
          </AnimatedGradientText>
        
        {/* Texto principal */}
        <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span className="text-[2rem] md:text-[3.75rem]">
            Designing tomorrow's experiences
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> today</span>.
          </span>
        </div>

        {/* Descripción */}
        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          Experienced developer, acquiring knowledge and new training on a daily basis. Ready to turn an
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> idea</span> into a 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> reality</span>.
        </p>

        
      </div>

      {/* Sección de lenguajes */}
      <div className="languages-section ml-10">
        <Languajes />
      </div>

    </div>
  );
}
