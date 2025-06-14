"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/ResisableNavbar";
import { useState } from "react";
import Image from "next/image";
import { Geist_Mono } from "next/font/google";

const geist = Geist_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const NavbarDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "ABOUT-ME", href: "#things" },
    { name: "PROJECTS", href: "#projects" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-lg">
      <Navbar>
        <NavBody>
          <div className="flex items-center space-x-10 w-full justify-between">
            <div className="text-white font-normal text-lg">DiegoDev1</div>

            <div className="hidden md:flex items-center space-x-10">
              <nav className={`flex space-x-4 ${geist.className}`}>
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white text-sm font-light tracking-widest hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <a
                href="#start"
                className={`flex gap-x-2 items-center px-5 py-2 bg-gray-200 text-black text-sm font-light rounded-xl hover:bg-gray-300 transition-all ${geist.className}`}
              >
                START NOW
                <Image
                  src="/ui/svg/arrow-top.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </NavBody>

        {/* Mobile nav menu */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-1 text-neutral-300 ${geist.className}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#start"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-4 flex gap-x-2 items-center justify-center px-5 py-2 bg-gray-200 text-black text-sm font-light rounded-xl hover:bg-gray-300 transition-all ${geist.className}`}
            >
              START NOW
              <Image
                src="/ui/svg/arrow-top.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
};

export default NavbarDemo;
