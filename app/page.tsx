"use client";
import React, { useState } from 'react';
import AnimatedBackground from "@/components/BackgroundAnimated";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import Work from "@/components/Work"
const Home: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimatedBackground isAnimating={isAnimating}>
      <Header setIsAnimating={setIsAnimating} />
      <Landing />
      <Skills />
      <Work />
    </AnimatedBackground>
  );
};

export default Home;