import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
  SheetTitle,
  SheetClose,
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
        <ul className="flex flex-col items-start text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-light w-full">
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <SheetClose asChild>
              <a href="#home" className="block h-full w-full">
                Home
              </a>
            </SheetClose>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <SheetClose asChild>
              <a href="#aboutme" className="block h-full w-full">
                About me
              </a>
            </SheetClose>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <SheetClose asChild>
              <a href="#experience" className="block h-full w-full">
                Experience
              </a>
            </SheetClose>
          </li>
          <li className=" cursor-pointer p-[15px] hover:bg-gray-light hover:text-black w-full">
            <SheetClose asChild>
              <a href="#projects" className="block h-full w-full">
                Projects
              </a>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
