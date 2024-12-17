"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alternar menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-b-neutral-800 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">

        <div className="text-white font-mono text-lg">
          <a href="/">DiegoDev1</a>
        </div>


        <nav className="hidden md:flex space-x-6">
          <a
            href="#work"
            className="text-neutral-300 font-thin hover:text-gray-300 hover:underline text-sm transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="https://github.com/DiegoDev2"
            className="text-neutral-300 font-thin hover:text-gray-300 hover:underline text-sm transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:diegodev2.proton.me"
            className="text-gray-300 font-thin hover:underline text-sm transition-colors duration-300"
          >
            Start a project →
          </a>
        </nav>


        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none transition-transform duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-500 bg-black bg-opacity-95`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6">
          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-300 hover:text-white text-lg font-thin transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#linkedin"
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-300 hover:text-white text-lg font-thin transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#start"
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-300 hover:text-white text-lg font-thin transition-colors duration-300"
          >
            Start a project →
          </a>
        </nav>
      </div>
    </header>
  );
}
