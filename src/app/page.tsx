import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import HelloIm from "@/components/hello-im";
import Projects from "@/components/projects";
import ScrollRevealSection from "@/components/revealSections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section
        id="home"
        className="w-full md:h-screen flex overflow-hidden px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]"
      >
        <HelloIm />
        <Image
          src="/looper.svg"
          alt="background looper"
          width={1000}
          height={625}
          loading="eager"
          className="hidden md:block absolute right-0 top-20 transition-transform duration-300 ease-in-out hover:scale-125 will-change-transform pointer-events-none select-none"
        />
      </section>
      <ScrollRevealSection origin="left">
        <section
          id="aboutme"
          className="flex w-full items-center justify-center h-auto md:h-screen mt-[55px] md:mt-0 py-[40px] px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]"
        >
          <AboutMe />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection origin="right">
        <section
          id="experience"
          className="flex w-full  items-center justify-center h-auto md:h-screen mt-[40px] mb-[40px] md:mt-0 px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]"
        >
          <Experience />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection origin="bottom">
        <section
          id="projects"
          className="flex w-full  items-center justify-center h-auto  mt-[40px] md:mt-0 px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]"
        >
          <Projects />
        </section>
      </ScrollRevealSection>

      <footer className="w-full flex items-center justify-center py-[15px] px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px]">
        <div> @ {new Date().getFullYear()} - Gerson Lamela</div>
        <div></div>
      </footer>
    </div>
  );
}
