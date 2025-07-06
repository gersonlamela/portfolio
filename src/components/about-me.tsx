import Image from "next/image";
import { Button } from "./ui/button";

export default function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-[20px] lg:gap-[50px] xl:gap-[100px]">
      <div className="w-[250px] min-h-[250px] md:min-w-[300px] md:min-h-[300px]  lg:min-w-[350px] lg:min-h-[350px] border-l-4 border-l-blue rounded-sm flex items-center justify-center bg-background">
        <span className="text-[32px] text-blue">Foto</span>
      </div>

      <div className="flex flex-col w-full md:w-auto md:max-w-[700px] mt-[32px] md:mt-0">
        <h1 className="text-2xl font-semibold text-white uppercase">
          About Me
        </h1>
        <h2 className="text-base font-medium mt-[16px]">Porto, Portugal</h2>
        <p className="font-light text-sm mt-[8px] text-justify  leading-6 md:leading-8">
          Hi, I’m <b>Gerson Lamela</b> — a passionate Fullstack JavaScript
          Developer based in Portugal. I specialize in crafting modern, scalable
          web applications using technologies like React, Next.js, TypeScript,
          TailwindCSS, and Node.js. With a degree in Multimedia Engineering and
          a strong foundation in both design and development, I bridge the gap
          between clean, intuitive user interfaces and robust backend logic.
          I’ve led and contributed to diverse projects — from SaaS platforms to
          e-commerce systems — always focusing on performance, usability, and
          maintainability. I’m currently open to freelance opportunities where I
          can help startups, agencies, or businesses turn ideas into impactful
          digital products. Whether it’s building a full-featured web app or
          refining the frontend, I’m ready to bring value. Let’s build something
          great together.
        </p>
        <div className="flex flex-row items-center gap-[24px] mt-[32px] md:mt-[30px] ">
          <div className="flex rounded-[4px]  bg-gradient-to-r from-[#D24074] to-[#6518B4]  p-[2px] shadow-lg w-max mt-4">
            <Button className="flex items-center gap-[14px] font-bold text-white bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] px-6 py-2 rounded-[4px] hover:bg-background cursor-pointer">
              <Image
                src="download-cloud.svg"
                alt="Curriculum"
                width={20}
                height={20}
              />
              Curriculum
            </Button>
          </div>
          <div className="flex rounded-[4px]  bg-gradient-to-r from-[#9358F7] to-[#10D7E2]  p-[2px] shadow-lg w-max mt-4">
            <Button className="flex items-center gap-[14px] font-bold text-white bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] px-6 py-2 rounded-[4px] hover:bg-background cursor-pointer">
              <Image src="mail.svg" alt="E-mail" width={20} height={20} />
              E-mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
