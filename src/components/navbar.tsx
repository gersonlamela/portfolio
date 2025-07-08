"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#aboutme", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastClickTimeRef = useRef<number>(0);

  const observeSections = useCallback(() => {
    if (typeof window === "undefined") return;

    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    if (observerRef.current) {
      sections.forEach((section) => observerRef.current?.unobserve(section));
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const now = Date.now();
            if (now - lastClickTimeRef.current > 1000) {
              setActiveHash(`#${entry.target.id}`);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setActiveHash(window.location.hash || "#home");

    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", onHashChange);
    const timeout = setTimeout(() => observeSections(), 100);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      if (observerRef.current) observerRef.current.disconnect();
      clearTimeout(timeout);
    };
  }, [observeSections]);

  const handleClick = (href: string) => {
    lastClickTimeRef.current = Date.now();
    setActiveHash(href);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed w-full bg-background z-30 flex items-center justify-between h-[80px] md:h-[100px] px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]">
      <div className="block md:hidden">
        <Sidebar />
      </div>

      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue font-medium cursor-pointer">
        Gerson Lamela
      </h1>

      <nav className="hidden md:flex gap-6" aria-label="Primary Navigation">
        {navLinks.map(({ href, label }) => (
          <Button
            key={href}
            onClick={() => handleClick(href)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors hover:bg-blue hover:text-black dark:hover:text-white duration-300 focus:outline-none
              ${
                activeHash === href
                  ? "bg-black text-white dark:text-black dark:bg-white dark:hover:text-black"
                  : "text-black bg-transparent dark:text-white"
              }
            `}
            aria-current={activeHash === href ? "page" : undefined}
          >
            {label}
          </Button>
        ))}
      </nav>

      <ModeToggle />

      <div className="hidden md:inline-block md:absolute left-0 right-0 bottom-0 flex-1 h-[2px] bg-dark-200 md:mx-[50px] lg:mx-[100px] xl:mx-[180px]"></div>
    </header>
  );
}
