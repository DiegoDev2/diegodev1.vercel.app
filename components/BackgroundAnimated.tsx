import React, { ReactNode } from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-repeat animate-starAnimation"
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

