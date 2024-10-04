import React from 'react';

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  imageUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
}) => {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0 flex place-content-center">
      <section className="max-w-[42rem] border border-[#7042f861] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 w-full">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <img
            alt="Project image"
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            src={imageUrl}
          />
        </a>
      </section>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="relative h-full w-full flex flex-col gap-10 px-10 z-[999999]">
      {/* Fondo de video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20"
        autoPlay
        loop
        muted
      >
        <source src="/hash.webm" type="video/webm" />
        Tu navegador no soporta videos.
      </video>

      {/* Texto de My Projects */}
      <h1 className="text-4xl sm:text-6xl font-bold text-white text-center mt-10">
        My Projects
      </h1>

      {/* Tarjetas de proyectos */}
      <div className="flex flex-col gap-10 z-[999999]">
        <ProjectCard
          title="psicologo.ai"
          description="🧠 Psicologe AI in Term."
          tags={['API', 'AI', 'TERMINAL']}
          link="https://github.com/CodeDiego15/psicologo.ai"
          imageUrl="ai.png"
        />
        <ProjectCard
          title="Torque 3D Page"
          description="🌱 Torque3D Engine Page."
          tags={['Page', 'Astro', 'Engine3D']}
          link="https://torque3d.vercel.app"
          imageUrl="/Torque3D.png"
        />
        <ProjectCard
          title="All projects"
          description="📍 All my projects in GitHub"
          tags={['DiegoDev1', 'GitHub', 'Public']}
          link="/projects"
          imageUrl="/GitHub.png"
        />
      </div>
    </div>
  );
};

export default Projects;
