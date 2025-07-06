"use client";

import { type ReactNode, useEffect, useId } from "react";

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
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(`.${uniqueClass}`, {
          duration: 1000,
          distance: "100%",
          origin,
        });
      });
    }
  }, [origin, uniqueClass]);

  return <div className={uniqueClass}>{children}</div>;
};

export default ScrollRevealSection;
