"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("navbar");

  const [activeHash, setActiveHash] = useState("#home");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastClickTimeRef = useRef<number>(0);

  const navLinks = useMemo(() => {
    return [
      { href: "#home", label: t("home") },
      { href: "#aboutme", label: t("aboutme") },
      { href: "#experience", label: t("experience") },
      { href: "#projects", label: t("projects") },
    ];
  }, [t("home"), t("aboutme"), t("experience"), t("projects")]);

  // Observa a visibilidade das secções para destacar a secção atual
  const observeSections = useCallback(() => {
    if (typeof window === "undefined") return;

    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    if (observerRef.current) {
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
  }, [navLinks]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setActiveHash(window.location.hash || "#home");

    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", onHashChange);
    const timeout = setTimeout(observeSections, 100);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observerRef.current?.disconnect();
      clearTimeout(timeout);
    };
  }, [observeSections]);

  const handleClick = useCallback((href: string) => {
    lastClickTimeRef.current = Date.now();
    setActiveHash(href);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  }, []);

  return (
    <header className="fixed w-full bg-background z-30 flex items-center justify-between h-[80px] md:h-[100px] px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]">
      {/* Sidebar para mobile */}
      <div className="block md:hidden">
        <Sidebar />
      </div>

      {/* Nome ou logotipo */}
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue font-medium cursor-pointer">
        Gerson Lamela
      </h1>

      {/* Navegação principal */}
      <nav className="hidden md:flex gap-6" aria-label="Primary Navigation">
        {navLinks.map(({ href, label }) => (
          <Button
            key={href}
            onClick={() => handleClick(href)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-blue hover:text-black dark:hover:text-white focus:outline-none
              ${
                activeHash === href
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-black bg-transparent dark:text-white"
              }`}
            aria-current={activeHash === href ? "page" : undefined}
          >
            {label}
          </Button>
        ))}
      </nav>

      <div className="flex flex-row items-center justify-center gap-[10px] md:gap-[20px]">
        <ModeToggle />
        <LanguageSwitcher />
      </div>

      <div className="hidden md:inline-block md:absolute left-0 right-0 bottom-0 flex-1 h-[2px] bg-dark-200 md:mx-[50px] lg:mx-[100px] xl:mx-[180px]" />
    </header>
  );
}
