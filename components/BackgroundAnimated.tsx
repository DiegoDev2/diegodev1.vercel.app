"use client";


import Image from "next/image";
import { Fullscreen } from "lucide-react";
import Particles from "@/components/ui/particles";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#000000]">
      <Particles 
      size={0.001}
      quantity={50}
      className="absolute h-[1000px] top-0 left-0 w-full" />
      <Image
        src="/Background.png"
        alt="background"
        width={1920} 
        height={1080}
        className="absolute top-0 w-full h-[130vh] opacity-50 object-cover"
      />
    
      <main className="relative z-10 flex flex-col items-center justify-center">
        {children}
        
      </main>
      
    </div>
  );
}
