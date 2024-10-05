import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pb-80 py-20 z-10"
      style={{ transform: "scale(0.9)" }}
    >
   
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          preload="none" 
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/Boll.webm" type="video/webm" />
        </video>
      </div>

   
      <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
        <AnimatedGradientText className="bg-[#1b1828b9] justify-end">
          <span
            className={cn(
              `flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Devops & Sec 
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
            <div className="rounded-xl px-5 py-3 text-white border border-[#7042f861] bg-[#0300145e]">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
