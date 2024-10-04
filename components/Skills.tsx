import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-10"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/Boll.webm" type="video/webm" />
        </video>
      </div>

      {/* Contenido de la sección */}
      <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
        <AnimatedGradientText className="bg-[#1b1828b9] justify-end">
          <span
            className={cn(
              `flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#aa6ebc] mr-[10px] h-5 w-5">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
            </svg>
            Devops & Sec Specialist
          </span>
        </AnimatedGradientText>
        <div className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          My latest skills ready to work
        </div>
        <div className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
          Versatile and innovative, my skills are the key to unlocking success in any project.
        </div>
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-10">
        {[
          "Python",
          "Ethical Hacking",
          "NextJS",
          "React",
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "Node JS",
          "Astro",
          "TypeScript",
          "Photoshop",
          "Docker",
          "Kubernetes",
          "Bash",
          "Go",
          "MacOS",
          "Kali Linux",
          "Black Arch",
          "ParrotSec OS",
          "C++",
          "C(Learning)",
          "Assembly(Learning)",
          "Git",
          "GitHub"


    
        ].map((skill) => (
          <div key={skill} style={{ opacity: 1 }}>
            <div className=" rounded-xl px-5 py-3 bg-white/10 text-white/80">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
