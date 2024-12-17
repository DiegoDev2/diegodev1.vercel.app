import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface ScrollEffectProps {
  children: React.ReactNode;  
}

const ScrollEffect: React.FC<ScrollEffectProps> = ({ children }) => {
  useEffect(() => {
    const container = document.querySelector(".scroll-container") as HTMLElement;

    if (container) {
      const scroll = new locomotiveScroll({
        el: container,
        smooth: true,
        multiplier: 0.5, 
        class: "is-inview",
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return <div className="scroll-container">{children}</div>; 
};

export default ScrollEffect;
