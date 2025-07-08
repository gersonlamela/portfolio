"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Experience {
  id: number;
  category: string;
  title: string; // ex: "ipt.title"
  dates: string;
  organization: string; // ex: "ipt.organization"
  description: string[]; // ex: ["ipt.desc.1", "ipt.desc.2", ...]
}

export default function Experience() {
  const t = useTranslations("experience");

  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => res.json())
      .then((data: Experience[]) => setExperiences(data))
      .catch((err) => console.error("Error loading experiences:", err));
  }, []);

  // Extrair categorias únicas para usar nas tabs
  const categories = Array.from(new Set(experiences.map((e) => e.category)));

  if (experiences.length === 0) {
    return <p>{t("loading", { default: "Loading experiences..." })}</p>;
  }

  return (
    <div className="w-full flex flex-col items-start">
      <h1 className="text-2xl font-semibold mb-[30px] md:mb-[60px] uppercase">
        {t("title", { default: "Experience" })}
      </h1>

      <Tabs
        defaultValue={categories[0]}
        className="w-full h-auto flex flex-col md:flex-row items-start justify-center md:gap-[40px] lg:gap-[80px]"
      >
        <TabsList className="bg-transparent md:gap-[14px] rounded-none mb-[25px] md:mb-0  md:px-0 flex items-center justify-start md:justify-center md:flex-col w-full md:w-auto overflow-x-auto md:overflow-y-auto whitespace-nowrap h-full md:h-auto scroll-smooth">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="group h-[60px] p-0 flex items-start justify-between rounded-none border-0 focus:border-0 bg-background"
            >
              <div className="w-[144px] h-[40px] flex items-center justify-center font-medium dark:group-data-[state=active]:bg-dark-200">
                {t(`categories.${category}`)}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent
            key={category}
            value={category}
            className="md:mt-0 w-full h-full flex flex-col justify-between gap-[25px] md:h-[280px]  md:max-w-[750px]"
          >
            {experiences
              .filter((exp) => exp.category === category)
              .map(({ id, title, organization, dates, description }) => (
                <div key={id} className="mb-8">
                  <div className="w-full flex items-center justify-between">
                    <h1 className="text-base md:text-2xl font-medium">
                      {t(title)}
                    </h1>
                    <span className="text-base font-medium hidden md:block">
                      {dates}
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-sm text-blue font-medium">
                      {t(organization)}
                    </h2>
                    <span className="text-xs font-medium md:hidden">
                      {dates}
                    </span>
                  </div>
                  <ul className="mt-[20px] list-disc text-sm md:text-lg text-left font-light text-black dark:text-gray-light pl-5 space-y-2">
                    {description.map((descKey, i) => (
                      <li key={i}>{t(descKey)}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
