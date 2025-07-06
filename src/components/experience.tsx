"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Experience {
  id: number;
  category: string;
  title: string;
  dates: string;
  organization: string;
  description: string[];
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("data/experiences.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Error loading experiences:", err));
  }, []);

  return (
    <div className="w-full flex flex-col items-start ">
      <h1 className="text-2xl font-semibold md:mb-[60px] uppercase">
        Experience
      </h1>
      {experiences[0] && (
        <Tabs
          defaultValue={experiences[0].category}
          className="w-full h-auto flex flex-col md:flex-row items-center justify-center md:gap-[40px] lg:gap-[80px]"
        >
          <TabsList className="bg-transparent md:gap-[14px] rounded-none mt-[25px] mb-[25px] md:mb-0  md:px-0 flex items-center justify-start md:justify-center md:flex-col w-full md:w-auto overflow-x-auto md:overflow-y-auto whitespace-nowrap h-full md:h-auto scroll-smooth">
            {experiences.map((experience) => (
              <TabsTrigger
                key={experience.id}
                value={experience.category}
                className="group h-[60px] p-0 flex items-start justify-between rounded-none border-0 focus:border-0 bg-background"
              >
                <div className="w-[144px] h-[40px] flex items-center justify-center font-medium dark:group-data-[state=active]:bg-dark-200">
                  {experience.category}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {experiences.map((experience) => (
            <TabsContent
              key={experience.id}
              value={experience.category}
              className="md:mt-0 w-full h-full flex flex-col justify-between gap-[25px]  md:max-w-[750px]"
            >
              <div className="w-full flex items-center justify-between">
                <h1 className="text-base md:text-2xl font-medium">
                  {experience.title}
                </h1>
                <span className="text-base font-medium hidden md:block">
                  {experience.dates}
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <h2 className="text-sm text-blue font-medium">
                  {experience.organization}
                </h2>
                <span className="text-xs font-medium  md:hidden">
                  {experience.dates}
                </span>
              </div>
              <ul className="list-disc text-sm md:text-lg text-left font-light text-black dark:text-gray-light pl-5 space-y-2">
                {experience.description.map((description, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
