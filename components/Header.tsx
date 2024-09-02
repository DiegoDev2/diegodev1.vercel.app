"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaTwitter, FaDiscord, FaYoutube, FaTwitch, FaBars, FaTimes, FaPause, FaPlay } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

interface HeaderProps {
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsAnimating }) => {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimatingLocal] = useState(true);

  const isActive = (path: string) => (currentPath === path ? 'text-blue-500' : 'text-gray-300 hover:text-white');

  const toggleAnimation = () => {
    const newState = !isAnimating;
    setIsAnimating(newState);
    setIsAnimatingLocal(newState);
  };

  return (
    <header className="bg-neutral-800/90 fixed w-full text-white py-4 rounded-2xl mx-auto my-4">
      <div className="flex flex-wrap items-center justify-between w-full px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <p className="text-2xl md:text-3xl">DiegoDev1</p>
          {/* Menú de navegación en pantalla grande */}
          <nav className="hidden md:flex space-x-4 text-base sm:text-lg md:text-xl text-gray-300">
            <a href="/" className={isActive('/')}>/home/</a>
            <a href="/projects" className={isActive('/projects')}>/projects/</a>
          </nav>
        </div>
        
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <nav className={`${
          menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-neutral-800/90 mt-2 py-4 px-4 space-y-4 text-base sm:text-lg md:text-xl text-gray-300`}>
          <Link href="/" className={isActive('/')}>/home/</Link>
          <Link href="/projects" className={isActive('/projects')}>/projects/</Link>
        </nav>
        
        <div className="hidden md:flex md:items-center md:space-x-4 mt-4 md:mt-0 items-center space-x-4">
          <a href="https://x.com/Diegodev5" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com/CodeDiego15" aria-label="GitHub" className="hover:text-gray-500">
            <FiGithub size={20} />
          </a>
          <a href="https://discord.com" aria-label="Discord" className="hover:text-blue-600">
            <FaDiscord size={20} />
          </a>
          <a href="https://www.youtube.com/@DiegoDev2" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.twitch.tv/diego_dev3" aria-label="Twitch" className="hover:text-purple-600">
            <FaTwitch size={20} />
          </a>
          <p className="text-gray-300">|</p> {/* Separador */}
          <button
            onClick={toggleAnimation}
            className={`text-white hover:text-white transition-all duration-300 ease-in-out p-2 rounded-full ${
              isAnimating ? ' hover:' : ' hover:'
            }`}
          >
            {isAnimating ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
