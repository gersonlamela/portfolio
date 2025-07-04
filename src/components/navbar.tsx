import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between h-[80px] md:h-[100px] px-[24px] md:px-[50px] lg:px-[180px] relative">
      <div className="block md:hidden">
        <Sidebar />
      </div>

      <h1 className=" text-lg text-blue font-medium cursor-pointer">
        Hey, I’m Gerson
      </h1>

      <div className="hidden md:block">
        <ul className="flex flex-row items-center md:gap-[30px] lg:gap-[60px] lg:text-lg text-gray-light">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About me</li>
          <li className="hover:text-white cursor-pointer">Experience</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
        </ul>
      </div>

      <ModeToggle />

      <div className="hidden md:inline-block md:absolute left-0 right-0 bottom-0  flex-1 h-[2px] bg-dark-200 md:mx-[50px] lg:mx-[180px]"></div>
    </div>
  );
}
