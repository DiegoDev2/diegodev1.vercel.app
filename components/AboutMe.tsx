"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "gsap/dist/ScrollTrigger.min.js";

// Importamos la fuente Inter desde Google Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const TextReveal = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Agregar un pequeño retraso para asegurar que el DOM esté listo
    gsap.delayedCall(0.1, () => {
      gsap.fromTo(
        ".reveal-text",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".reveal-text",
            start: "top 80%", // Ajustar según lo que necesites
            end: "top 30%",
            scrub: 1, // Ajustar para mayor sincronización con el scroll
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center min-h-screen bg-black ${inter.className}`}
    >
      <div className="text-center space-y-6 px-4">
        <h2 className="reveal-text text-7xl font-extrabold uppercase tracking-wide text-white">
          I’m 15yo, An Open Source Contributor at Google
        </h2>
        <p className="reveal-text text-3xl font-bold text-white">
          Passionate about development, I specialize in full-stack, cloud, and
          DevOps. Always learning, always building.
        </p>
      </div>
    </div>
  );
};

export default TextReveal;
