import React from 'react';
import Image from 'next/image';
import { SiGo, SiAstro, SiTailwindcss, SiPython, SiReact } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "LattePkg",
    description: "LattePkg - An adorable package manager that combines functionality and aesthetics, making package management a delightful experience.",
    tech: ["Golang"],
    image: "/logoLatte.png",
    width: 100,
    height: 100,
    githubLink: "https://github.com/CodeDiego15/LattePkg",
    websiteLink: "https://lattepkg.vercel.app/",
  },
  {
    name: "Navi",
    description: "Navi is a command-line tool designed to provide an intuitive and efficient file navigation experience. With its minimalist interface, it allows you to quickly and easily explore your files and directories.",
    tech: ["Golang"],
    image: "/NaviLogo.png", 
    width: 100,
    height: 100,
    githubLink: "https://github.com/CodeDiego15/Navi",
  },
  {
    name: "Backdoor",
    description: "Backdoor with Python TCP/server.",
    tech: ["Python"],
    image: "/Door.png",
    width: 100,
    height: 100,
    githubLink: "https://github.com/CodeDiego15/backdoor",
  },
  {
    name: "Torque 3D Page",
    description: "Torque 3D page.",
    tech: ["Astro", "React", "TailwindCSS"],
    image: "/torque.png",
    width: 100,
    height: 100,
    websiteLink: "https://torque3d.vercel.app/",
  },
  {
    name: "Waifu-Pictures",
    description: "A collection of waifu pictures.",
    tech: ["Astro", "Tailwind", "API"],
    image: "/manga.png",
    width: 100,
    height: 100,
    websiteLink: "https://waifu-pictures.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white font-pixel">
      {/* Imagen encima del texto */}
      <div className="mb-8 mt-24 flex justify-center">
        <Image
          src="https://64.media.tumblr.com/37aa3a0fc78a86820d1132976e6db281/357bf94f374cba8d-95/s500x750/3d2256605360199311ec4e42e41bce72df4a1753.gif"
          alt="Decorative gif"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-3xl mb-8 text-blue-500">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="bg-neutral-800/90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-full">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} Logo`}
                  width={project.width}
                  height={project.height}
                  className="rounded-full"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">No Image</span>
                </div>
              )}
            </div>
            <h3 className="text-xl mt-4 mb-2 text-blue-500">{project.name}</h3>
            <p className="text-center mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center space-x-4">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 text-sm"
                >
                  Visit website
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 flex items-center text-sm"
                >
                  <FaGithub className="mr-2" />
                  Source code
                </a>
              )}
            </div>
            <div className="mt-4 flex flex-wrap justify-center space-x-2">
              {project.tech.includes("Golang") && (
                <div className="flex items-center space-x-1 bg-neutral-700/70 rounded-xl py-1 px-2 text-xs">
                  <SiGo className="text-blue-500 text-xs" />
                  <span>Go</span>
                </div>
              )}
              {project.tech.includes("Python") && (
                <div className="flex items-center space-x-1 bg-neutral-700/70 rounded-xl py-1 px-2 text-xs">
                  <SiPython className="text-yellow-500 text-xs" />
                  <span>Python</span>
                </div>
              )}
              {project.tech.includes("Astro") && (
                <div className="flex items-center space-x-1 bg-neutral-700/70 rounded-xl py-1 px-2 text-xs">
                  <SiAstro className="text-purple-500 text-xs" />
                  <span>Astro</span>
                </div>
              )}
              {project.tech.includes("TailwindCSS") && (
                <div className="flex items-center space-x-1 bg-neutral-700/70 rounded-xl py-1 px-2 text-xs">
                  <SiTailwindcss className="text-teal-500 text-xs" />
                  <span>Tailwind</span>
                </div>
              )}
              {project.tech.includes("React") && (
                <div className="flex items-center space-x-1 bg-neutral-700/70 rounded-xl py-1 px-2 text-xs">
                  <SiReact className="text-cyan-500 text-xs" />
                  <span>React</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
