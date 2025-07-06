import Image from "next/image";
import { Button } from "./ui/button";

export default function HelloIm() {
  return (
    <div className="flex flex-col justify-center mt-[100px]  z-20">
      <h1 className="text-xl md:text-2xl font-semibold">Hi, I’m</h1>
      <h2 className="text-blue text-[32px] md:text-[64px] font-semibold">
        Gerson lamela
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold  mt-[8px]">
        Full-Stack Engineer
      </h3>

      <div className="flex flex-row items-center gap-[24px] mt-[40px] mb-[10px] md:mt-[60px]">
        <a
          href="https://www.linkedin.com/in/gersonlamela/"
          className="flex rounded-[4px]  bg-gradient-to-r from-[#9358F7] to-[#10D7E2] p-[2px] shadow-lg w-max mt-4  hover:scale-120 transition-all"
        >
          <Button className="flex items-center gap-[14px] font-bold text-dark-200 dark:text-white bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] px-6 py-2 rounded-[4px] hover:bg-background cursor-pointer">
            <Image
              src="linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
              className="invert dark:invert-0"
            />
            Linkedin
          </Button>
        </a>

        <a
          href="https://github.com/gersonlamela"
          className="flex rounded-[4px]  bg-gradient-to-r from-[#D24074] to-[#6518B4]  p-[2px] shadow-lg w-max mt-4  hover:scale-120 transition-all"
        >
          <Button className="flex items-center gap-[14px] font-bold text-dark-200 dark:text-white  bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] px-6 py-2 rounded-[4px] hover:bg-background cursor-pointer">
            <Image
              src="github.svg"
              alt="github"
              width={20}
              height={20}
              className="invert dark:invert-0"
            />
            Github
          </Button>
        </a>
      </div>
    </div>
  );
}
