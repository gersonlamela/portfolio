"use client";

import { type ReactNode, useEffect, useId } from "react";

interface ScrollRevealSectionProps {
  children: ReactNode;
  origin?: "top" | "right" | "bottom" | "left";
  distance?: string;
  duration?: number;
  delay?: number;
}

const ScrollRevealSection = ({
  children,
  origin = "left",
  distance = "50px",
  duration = 800,
  delay = 0,
}: ScrollRevealSectionProps) => {
  const uniqueClass = useId().replace(/:/g, "-");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(`.${uniqueClass}`, {
          origin,
          distance,
          duration,
          delay,
          opacity: 0,
          easing: "ease-in-out",
          reset: false,
          mobile: true,
          cleanup: true,
          scale: 1,
          viewFactor: 0.2,
        });
      });
    }
  }, [origin, distance, duration, delay, uniqueClass]);

  return <div className={uniqueClass}>{children}</div>;
};

export default ScrollRevealSection;
