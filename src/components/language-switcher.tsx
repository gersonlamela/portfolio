"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

// Idiomas disponíveis (podes adicionar mais no futuro aqui)
const locales = [
  { code: "en", flag: "/enflag.png", label: "English" },
  { code: "pt", flag: "/ptflag.png", label: "Português" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Identifica o idioma atual com base no pathname
  const currentLocale =
    locales.find((locale) => pathname.startsWith(`/${locale.code}`))?.code ||
    "en";

  // Define próximo idioma (exemplo: PT → EN → ES → FR → PT...)
  const currentIndex = locales.findIndex((l) => l.code === currentLocale);
  const nextLocale = locales[(currentIndex + 1) % locales.length];

  const handleChangeLanguage = () => {
    const pathWithoutLocale = pathname.replace(/^\/(pt|en|es|fr)/, "") || "/";
    router.push(`/${nextLocale.code}${pathWithoutLocale}`);
  };

  return (
    <Button
      className="bg-none w-[40px] h-[30px] md:w-[50px] md:h-[36px] relative rounded-md"
      onClick={handleChangeLanguage}
      aria-label={`Mudar idioma para ${nextLocale.label}`}
    >
      <Image
        src={nextLocale.flag}
        fill
        alt={nextLocale.label}
        className="rounded-md"
        objectFit="fill"
        priority
      />
    </Button>
  );
}
