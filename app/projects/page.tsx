"use client";

import React, { useState } from 'react';
import AnimatedBackground from "@/components/BackgroundAnimated";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

const ProjectsPage: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimatedBackground isAnimating={isAnimating}>
      <Header setIsAnimating={setIsAnimating} />
      <Projects />
    </AnimatedBackground>
  );
};

export default ProjectsPage;
