"use client";
import React from "react";
import ScrollEfect from "@/components/ui/ScrollEfect"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#000000]">
   
     <video autoPlay loop muted className="absolute top-0 left-0 w-full ">
      <source src="/bg.mp4" type="video/mp4" />
     </video>

    
      <main className="relative z-10 flex flex-col items-center justify-center">
        {children}
      </main>
      
    </div>
  );
}