"use client";

import { type ReactNode, useEffect, useId } from "react";
import ScrollReveal from "scrollreveal";

interface ScrollRevealSectionProps {
  children: ReactNode;
  origin?: "top" | "right" | "bottom" | "left";
}

const ScrollRevealSection = ({
  children,
  origin = "left",
}: ScrollRevealSectionProps) => {
  const uniqueClass = useId().replace(/:/g, "-");

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollReveal().reveal(`.${uniqueClass}`, {
        duration: 1000,
        distance: "100%",
        origin,
      });
    }
  }, [origin, uniqueClass]);

  return <div className={uniqueClass}>{children}</div>;
};

export default ScrollRevealSection;
