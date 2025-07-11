"use client";

import {
  AtomIcon,
  FileCssIcon,
  FileJsIcon,
  FileTsIcon,
} from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { type JSX, useEffect, useState } from "react";
import Image from "next/image";
import { Earth, Github, Monitor } from "lucide-react";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  titleKey: string; // chave da tradução ex: "projects.systemPOS.title"
  image: string;
  technologies: string[];
  repoLink: string;
  liveLink?: string;
  descriptionKey: string; // chave da tradução ex: "projects.systemPOS.description"
}

const techIcons: Record<string, JSX.Element> = {
  ts: <FileTsIcon size={32} />,
  js: <FileJsIcon size={32} />,
  css: <FileCssIcon size={32} />,
  react: <AtomIcon size={32} />,
};

export default function Projects() {
  const t = useTranslations("projects");

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div className="flex flex-col w-full pb-[40px]">
      <h1 className="text-2xl font-semibold uppercase md:mb-[60px]">
        {t("title", { default: "Projects" })}
      </h1>
      <div className="md:grid md:grid-cols-2 gap-[20px] space-y-[80px]">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-[16px]">
            <div className="relative w-full h-[312px] md:w-auto border-l-4 border-dark dark:border-blue flex items-center justify-center bg-dark-200 dark:bg-dark">
              <Image
                src={`/project/${project.image}`}
                alt={t(project.titleKey)}
                fill
                className="object-contain md:object-cover min-h-[312px] w-full md:w-auto"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-base font-medium mb-[16px]">
                {t(project.titleKey)}
              </h1>
              <p className="text-sm font-light text-justify mb-[10px] h-[60px]">
                {t(project.descriptionKey)}
              </p>

              {project.technologies.length > 0 && (
                <>
                  <h2 className="text-base font-medium text-blue mb-[10px]">
                    {t("technologies", { default: "Technologies" })}
                  </h2>
                  <div className="flex gap-2 mb-[20px]">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{techIcons[tech]}</span>
                    ))}
                  </div>
                </>
              )}

              <div className="flex gap-4 mt-4 flex-wrap">
                <div className="rounded-[4px] bg-gradient-to-r from-[#9358F7] to-[#10D7E2] hover:scale-120 transition-all p-[2px] shadow-lg">
                  <Button
                    className="flex items-center hover:bg-transparent gap-[14px] font-bold hover:text-white text-black dark:text-white bg-background px-6 py-2 rounded-[4px]"
                    onClick={() => window.open(project.repoLink, "_blank")}
                  >
                    <Github className="w-32 h-32" />
                    GitHub
                  </Button>
                </div>

                {project.liveLink && (
                  <div className="rounded-[4px] bg-gradient-to-r from-[#9358F7] to-[#10D7E2] hover:scale-120 transition-all p-[2px] shadow-lg">
                    <Button
                      className="flex items-center hover:bg-transparent gap-[14px] font-bold text-black hover:text-white dark:text-white bg-background px-6 py-2 rounded-[4px]"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <Monitor className="w-32 h-32" />
                      {t("live", { default: "Live" })}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
