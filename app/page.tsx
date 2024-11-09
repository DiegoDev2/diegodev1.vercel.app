
"use client";
import React, { useState } from 'react';
import AnimatedBackground from "@/components/BackgroundAnimated";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { SkillsSection } from "@/components/Skills";
import Work from "@/components/Work";
import Meteors from "@/components/ui/meteors";
import Languajes from "@/components/Languajes"
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';
import SocialSection from '@/components/Socials';

const Home: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimatedBackground >

      <Header/>
      <Landing />
      <Projects />
      <SkillsSection /> 
      <SocialSection />
    </AnimatedBackground>
  );
};

export default Home;
