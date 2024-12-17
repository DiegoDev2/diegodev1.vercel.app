import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const StickySection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });


  const projectDetails: { [key: string]: { title: string; description: string; status: string; link?: string; logo?: string } } = {
    "Proyecto 1": {
      title: "Vaulty - Completed",
      description: "Effortless Security for Developer's Credentials. (Landing Page)",
      status: "Completed",
      link: "https://vaultyy.vercel.app/",
      logo: "/logos/Vaulty.png", 
    },
    "Proyecto 2": {
      title: "Vix - In Development",
      description: "Stream Without Fear Of CopyRight ",
      status: "In Development",
      logo: "/logos/V.png", 
    },
    "Proyecto 3": {
      title: "V - Completed",
      description: "The V Programming Language Fan Page",
      status: "Completed",
      link: "https://vlanguage.vercel.app",
      logo: "/logos/Vl.png", 
    },
    "Proyecto 4": {
      title: "Go-Github - Contributed",
      description: "Go Library For Accessing Github API v3",
      status: "Completed",
      link: "https://github.com/google/go-github",
      logo: "/logos/google.png",
    },
  };

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (project: string) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="work" className="w-screen h-screen bg-black text-white flex border-t border-neutral-800">

      <div className="w-1/3 sticky top-0 p-4 border-r border-neutral-800 flex flex-col justify-between h-screen">
        <div className="flex items-center space-x-4">
          {/* Logo del proyecto */}
          {hoveredProject && projectDetails[hoveredProject].logo && (
            <Image
              src={projectDetails[hoveredProject].logo} 
              alt={projectDetails[hoveredProject].title}
              width={40} 
              height={40} 
              className="object-contain"
            />
          )}


          <div>
            <h1 className="text-2xl font-thin">
              {hoveredProject ? projectDetails[hoveredProject].title : "My Projects & Contributions"}
            </h1>
            <p className="mt-2 text-sm font-thin">
              {hoveredProject ? projectDetails[hoveredProject].description : "Explore my work and contributions."}
            </p>
          </div>
        </div>
      </div>


      <div className="w-2/3 overflow-y-scroll scrollbar-hide">

        <div
          className="h-screen flex items-center justify-center border-b border-neutral-800 w-full relative group"
          onMouseEnter={() => handleMouseEnter("Proyecto 1")}
          onMouseLeave={handleMouseLeave}
        >
          {projectDetails["Proyecto 1"].link ? (
            <Link href={projectDetails["Proyecto 1"].link} passHref>
              <Image
                src="/projects/Vaultyy.webp"
                alt="Proyecto 1"
                width={500}
                height={300}
                className="absolute top-0 left-0 w-full h-full object-cover"
                unoptimized={true}
              />
            </Link>
          ) : (
            <Image
              src="/projects/Vaultyy.webp"
              alt="Proyecto 1"
              width={500}
              height={300}
              className="absolute top-0 left-0 w-full h-full object-cover"
              unoptimized={true}
            />
          )}
        </div>

        <div
          className="h-screen flex items-center justify-center border-b border-neutral-800 w-full relative group"
          onMouseEnter={() => handleMouseEnter("Proyecto 2")}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/projects/Vix.webp"
            alt="Proyecto 2"
            width={500}
            height={300}
            className="absolute top-0 left-0 w-full h-full object-cover"
            unoptimized={true}
          />
        </div>


        <div
          className="h-screen flex items-center justify-center w-full border-b border-neutral-800 relative group"
          onMouseEnter={() => handleMouseEnter("Proyecto 3")}
          onMouseLeave={handleMouseLeave}
        >
          {projectDetails["Proyecto 3"].link ? (
            <Link href={projectDetails["Proyecto 3"].link} passHref>
              <Image
                src="/projects/V.webp"
                alt="Proyecto 3"
                width={500}
                height={300}
                className="absolute top-0 left-0 w-full h-full object-cover"
                unoptimized={true}
              />
            </Link>
          ) : (
            <Image
              src="/projects/V.webp"
              alt="Proyecto 3"
              width={500}
              height={300}
              className="absolute top-0 left-0 w-full h-full object-cover"
              unoptimized={true}
            />
          )}
        </div>

        <div
          className="h-screen flex items-center justify-center w-full border-b border-neutral-800 relative group"
          onMouseEnter={() => handleMouseEnter("Proyecto 4")}
          onMouseLeave={handleMouseLeave}
        >
          {projectDetails["Proyecto 4"].link ? (
            <Link href={projectDetails["Proyecto 4"].link} passHref>
              <Image
                src="/projects/GoGithub.webp"
                alt="Proyecto 4"
                width={500}
                height={300}
                className="absolute top-0 left-0 w-full h-full object-cover"
                unoptimized={true}
              />
            </Link>
          ) : (
            <Image
              src="/projects/GoGithub.webp"
              alt="Proyecto 4"
              width={500}
              height={300}
              className="absolute top-0 left-0 w-full h-full object-cover"
              unoptimized={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StickySection;
