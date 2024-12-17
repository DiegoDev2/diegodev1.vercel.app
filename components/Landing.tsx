import { useEffect } from "react";
import ContactButton from "@/components/ui/contact-botton";
import { Workflow, Terminal, Container, Rocket } from "lucide-react";

export default function Landing() {
  useEffect(() => {
    // Activamos el fade-in cuando la página se cargue
    const elements = document.querySelectorAll(".fade-in");
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("opacity-100", "transition-opacity", "duration-1000");
      }, index * 300); // Cada elemento aparece con un retraso
    });
  }, []);

  return (
    <div
      id="home"
      className="relative flex flex-col items-center sm:items-start justify-center min-h-screen px-6 sm:px-12 text-white z-20"
    >
      {/* Contenido de Texto */}
      <div className="relative z-10 flex flex-col text-center sm:text-left gap-4 sm:gap-6">
        {/* Subtítulo */}
        <p
          className="text-gray-200 font-light text-sm sm:text-base opacity-0 fade-in"
        >
          Hi, I'm DiegoDev1, 15 years old.
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight opacity-0 fade-in"
        >
          Building Scalable DevOps Solutions <br />
          <span className="block mt-2">and Modern Web Applications</span>
        </h1>

        {/* Tags Responsivos */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-gray-200 text-sm font-light py-2">
          <span className="flex items-center gap-1 opacity-0 fade-in">
            <Rocket className="text-blue-400 w-5 h-5" /> Automation
          </span>
          <span className="flex items-center gap-1 opacity-0 fade-in">
            <Terminal className="text-blue-400 w-5 h-5" /> Web Development
          </span>
          <span className="flex items-center gap-1 opacity-0 fade-in">
            <Workflow className="text-blue-400 w-5 h-5" /> CI/CD Pipelines
          </span>
          <span className="flex items-center gap-1 opacity-0 fade-in">
            <Container className="text-blue-400 w-5 h-5" /> Cloud Infrastructure
          </span>
        </div>

        {/* Botón de Contacto */}
        <div className="mt-4 sm:mt-6 mx-auto sm:mx-0 opacity-0 fade-in">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
