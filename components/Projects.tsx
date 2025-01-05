import { Geist_Mono } from "next/font/google";
import Image from "next/image";

const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


const projects = [
  {
    title: "Vyx",
    description: "WEBSITE & BACKEND",
    image: "/projects/Vyx.png",
    technologies: "Next.js, TailwindCSS, Supabase, Go, Docker, Kubernetes",
    status: "development", 
    link: "",
  },
  {
    title: "Vaulty",
    description: "BRANDING & WEBSITE",
    image: "/projects/Vaultyy.webp",
    technologies: "Next.js, TailwindCSS",
    status: "view",
    link: "https://vaultyy.vercel.app",
  },
  {
    title: "V",
    description: "Fan-made Website",
    image: "/projects/V.webp",
    technologies: "Next.js, TailwindCSS",
    status: "view", 
    link: "https://vlanguage.vercel.app",
  },
  {
    title: "Go-GitHub",
    description: "Contributor & Reviewer Code", 
    image: "/projects/GoGitHub.webp",
    technologies: "Go",
    status: "view", 
    link: "https://github.com/google/go-github",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" py-16">
      <div className="container mx-auto px-6 lg:px-20">



        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-y-4">
              <div className="flex gap-x-5 items-center">
                <p className="text-white text-lg font-normal">{project.title}</p>
                <div className="h-4 w-px bg-neutral-700"></div>
                <p className={`text-neutral-300 text-sm font-extralight ${geist.className}`}>
                  {project.description}
                </p>
              </div>

              <div className="relative group">

                <Image
                  className="rounded-xl border border-neutral-700"
                  src={project.image}
                  width={600}
                  height={600}
                  alt={project.title}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 600px"
                />

                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
                  {project.status === "view" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      aria-label={`View Project ${project.title}`}
                      className={`flex gap-x-2 items-center px-5 py-2 bg-gray-200 text-black text-sm font-light rounded-xl hover:bg-gray-300 transition-all ${geist.className}`}
                    >
                      <p>VIEW</p>
                      <Image
                        src="/ui/svg/arrow-top.svg"
                        width={20}
                        height={20}
                        alt="Arrow Icon"
                      />
                    </a>
                  ) : (
                    <div
                      className={`px-5 py-2 bg-gray-200 text-black text-sm font-light rounded-xl ${geist.className}`}
                    >
                      <p>DEVELOPMENT</p>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs md:text-sm p-2 transition-opacity rounded group-hover:opacity-0">
                  <p className={`font-extralight ${geist.className}`}>{project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
