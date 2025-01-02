"use client";
import React, { useState } from 'react';
import AnimatedBackground from "@/components/Background";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import  Skills  from "@/components/Skills";
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';




const Home: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (

    <AnimatedBackground >
      <section className="section-down blur-progressive"></section>
      <Header/>
      <Landing />
      <Projects />
      <AboutMe />
      <Skills /> 
      
    </AnimatedBackground>
 
    
  );
};

export default Home;
