import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between h-[80px] md:h-[100px] px-[24px] md:px-[50px] lg:px-[100px] xl:px-[180px] relative">
      <div className="block md:hidden">
        <Sidebar />
      </div>

      <h1 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue font-medium cursor-pointer">
        Portfólio
      </h1>

      <div className="hidden md:block">
        <ul className="flex flex-row items-center md:gap-[30px] lg:gap-[60px] lg:text-lg text-gray-light">
          <li className="hover:text-white cursor-pointer">
            <a href="#aboutme" className="block h-full w-full">
              Home
            </a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#aboutme" className="block h-full w-full">
              About me
            </a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#experience" className="block h-full w-full">
              Experience
            </a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#projects" className="block h-full w-full">
              Projects
            </a>
          </li>
        </ul>
      </div>

      <ModeToggle />

      <div className="hidden md:inline-block md:absolute left-0 right-0 bottom-0  flex-1 h-[2px] bg-dark-200 md:mx-[50px] lg:mx-[100px]"></div>
    </div>
  );
}
