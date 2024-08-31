"use client"; 

import React from 'react';
import { usePathname } from 'next/navigation';
import { FaTwitter, FaMastodon, FaDiscord, FaYoutube, FaTwitch } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Header: React.FC = () => {
  const currentPath = usePathname();

  const isActive = (path: string) => (currentPath === path ? 'text-blue-500' : 'text-gray-300 hover:text-white');

  return (
    <header className="bg-neutral-800/90 fixed w-full text-white py-4 rounded-2xl mx-auto my-4 max-w-screen-xl">
      <div className="flex flex-wrap items-center justify-between w-full px-4 md:px-8">
        <div className="flex items-center space-x-2 text-2xl md:text-3xl">
          <p>DiegoDev1</p>
        </div>
        <nav className="mt-4 md:mt-0 space-x-4 text-base sm:text-lg md:text-xl text-gray-300">
          <a href="/" className={isActive('/')}>/home/</a>
          <a href="/blog/" className={isActive('/blog/')}>/blog/</a>
          <a href="/projects/" className={isActive('/projects/')}>/projects/</a>
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://mastodon.social" aria-label="Mastodon" className="hover:text-indigo-500">
            <FaMastodon size={20} />
          </a>
          <a href="https://github.com" aria-label="GitHub" className="hover:text-gray-500">
            <FiGithub size={20} />
          </a>
          <a href="https://discord.com" aria-label="Discord" className="hover:text-blue-600">
            <FaDiscord size={20} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube size={20} />
          </a>
          <a href="https://twitch.tv" aria-label="Twitch" className="hover:text-purple-600">
            <FaTwitch size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
