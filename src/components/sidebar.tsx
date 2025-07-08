import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Sheet,
} from "./ui/sheet";

import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  const t = useTranslations("navbar");

  const navLinks = useMemo(() => {
    return [
      { href: "#home", label: t("home") },
      { href: "#aboutme", label: t("aboutme") },
      { href: "#experience", label: t("experience") },
      { href: "#projects", label: t("projects") },
    ];
  }, [t("home"), t("aboutme"), t("experience"), t("projects")]);

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
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="cursor-pointer p-[15px] text-black dark:text-white hover:font-bold dark:hover:font-normal dark:hover:text-white w-full"
            >
              <SheetClose asChild>
                <a href={href} className="block h-full w-full">
                  {label}
                </a>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
