import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#projects', '#skills', '#socials'];
      let currentSection = activeSection;

      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.querySelector(sections[i]);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-[1100px] border border-neutral-800 bg-[#1a1a1a] bg-opacity-70 backdrop-blur-lg rounded-3xl px-8 py-3 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/LOGOJAP.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-lg hidden sm:block"
        />
      </div>

      <nav className="flex gap-10 font-extralight text-base text-gray-400">
        {[
          { href: '#home', label: 'Home' },
          { href: '#projects', label: 'Projects' },
          { href: '#skills', label: 'Skills' },
          { href: '#socials', label: 'Socials' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`relative group px-4 py-2 rounded-3xl transition-colors ${
              activeSection === href
                ? 'bg-neutral-700 text-white'
                : 'hover:bg-neutral-700 hover:text-white'
            }`}
          >
            <span>{label}</span>
            <div
              className={`absolute top-[-10px] sm:top-[-19px] left-1/2 transform -translate-x-1/2 w-[40px] h-[4px] bg-white shadow-[0_0_10px_#ffffff] transition-all ${
                activeSection === href
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            ></div>
          </a>
        ))}
      </nav>
    </header>
  );
}
