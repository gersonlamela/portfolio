import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
  SheetTitle,
} from "./ui/sheet";

import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 w-[24px] h-[24px]">
          <MenuIcon className="!w-[24px] !h-[24px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader />
        <SheetTitle />
        <ul className="flex flex-col items-start lg:text-lg text-gray-light w-full">
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <a href="#home" className="block h-full w-full">
              Home
            </a>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <a href="#aboutme" className="block h-full w-full">
              About me
            </a>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <a href="#experience" className="block h-full w-full">
              Experience
            </a>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <a href="#projects" className="block h-full w-full">
              Projects
            </a>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
