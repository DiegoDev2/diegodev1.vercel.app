"use client";

import React, { ReactNode, useState, useEffect } from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
  isAnimating: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, isAnimating }) => {
  const [animationClass, setAnimationClass] = useState('animate-starAnimation');

  useEffect(() => {
    setAnimationClass(isAnimating ? 'animate-starAnimation' : 'animation-none');
  }, [isAnimating]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-repeat ${animationClass}`}
        style={{ 
          backgroundImage: "url('/stars.jpg')",
          backgroundSize: '50%',
        }}
      ></div>
      <div className="relative z-10">
        {children} {/* Aquí va el contenido de tu portafolio */}
      </div>
    </div>
  );
};

export default AnimatedBackground;
