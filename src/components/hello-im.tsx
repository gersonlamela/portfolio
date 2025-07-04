import Image from "next/image";
import { Button } from "./ui/button";

export default function HelloIm() {
  return (
    <div className="flex flex-col gap-[12px] mt-[150px]">
      <h1 className="text-xl font-semibold text-white">Hi, I’m</h1>
      <h2 className="text-blue text-[32px] font-semibold">Gerson lamela</h2>
      <h3 className="text-xl font-semibold text-white mt-[8px]">
        Full-Stack Engineer
      </h3>

      <div className="flex flex-row items-center gap-[24px]">
        <div className="flex rounded-[4px]  bg-gradient-to-r from-[#9358F7] via-[#6a3bf7] to-[#10D7E2] p-[2px] shadow-lg w-max mt-4">
          <Button className="flex items-center gap-[14px] font-bold text-white bg-background px-6 py-2 rounded-[4px]">
            <Image src="linkedin.svg" alt="github" width={20} height={20} />
            Linkedin
          </Button>
        </div>

        <div className="flex rounded-[4px]  bg-gradient-to-r from-[#9358F7] via-[#6a3bf7] to-[#10D7E2] p-[2px] shadow-lg w-max mt-4">
          <Button className="flex items-center gap-[14px] font-bold text-white bg-background px-6 py-2 rounded-[4px]">
            <Image src="github.svg" alt="github" width={20} height={20} />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
