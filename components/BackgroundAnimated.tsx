"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff"); // Asegura que las partículas sean blancas en modo oscuro
  }, [theme]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030014] ">
      <Particles
        className="absolute inset-0 bg-fixed"
        quantity={300}
        ease={100}
        color={color}
      />
      <main className="relative z-10 w-full">
        {children}
      </main>
    </div>
  );
}
