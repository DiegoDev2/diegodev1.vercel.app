import Image from 'next/image';

export function SkillsSection() {
  const tools = [
    { name: "Go", description: "Programming Language", imageSrc: "./skills/go.svg" },
    { name: "C++", description: "Programming Language", imageSrc: "./skills/cpp.png" },
    { name: "C", description: "Programming Language", imageSrc: "./skills/c.svg" },
    { name: "CSS3", description: "Styling Language", imageSrc: "./skills/css.svg" },
    { name: "Figma", description: "Design Tool", imageSrc: "./skills/figma.svg" },
    { name: "GitHub", description: "Version Control", imageSrc: "./skills/github.svg" },
    { name: "Nextjs", description: "React framework", imageSrc: "/skills/nextjs.svg" },
    { name: "Nestjs", description: "Node.js framework", imageSrc: "/skills/nest.svg" },
    { name: "JS", description: "Programming Language", imageSrc: "./skills/js.svg" },
    { name: "TS", description: "Programming Language", imageSrc: "./skills/ts.svg" },
    { name: "TailwindCSS", description: "Styling Framework", imageSrc: "./skills/tailwind.svg" },
    { name: "HTML5", description: "Markup Language", imageSrc: "./skills/html.svg" },
    { name: "Docker", description: "Containerization", imageSrc: "./skills/docker.svg" },
    { name: "Kubernetes", description: "Container Orchestration", imageSrc: "./skills/kubernetes.svg" },

  ];

  return (
    <section id='skills' className="p-10 text-white">
      <p className=" text-xl text-center text-neutral-500 font-normal mb-6 tracking-wide">✦ MY STACK ✦</p>
      <h2 className="text-4xl font-normal text-center mb-6">Skills I Work With</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center space-x-4 p-4 border border-neutral-800 bg-[#1a1a1a] bg-opacity-70 backdrop-blur-lg rounded-2xl">
            <Image src={tool.imageSrc} alt={tool.name} width={40} height={40} className="rounded" unoptimized/>
            <div>
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
