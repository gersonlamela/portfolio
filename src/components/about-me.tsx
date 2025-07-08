"use client";

import Image from "next/image";
import ProfileSummary from "./profile-summary";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-[20px] lg:gap-[50px] xl:gap-[100px]">
      <div className="w-[250px] min-h-[250px] md:min-w-[300px] md:min-h-[300px] lg:min-w-[350px] lg:min-h-[350px] border-l-8 border-l-blue rounded-sm flex items-center justify-center bg-background">
        <Image
          src="/user.jpg"
          width={250}
          height={250}
          alt={t("photoAlt")}
          className="min-w-[250px] min-h-[250px] md:min-w-[300px] md:min-h-[300px]  lg:min-w-[350px] lg:min-h-[350px] rounded-sm"
        />
      </div>

      <div className="flex flex-col w-full md:w-auto md:max-w-[700px] mt-[32px] md:mt-0">
        <h1 className="text-2xl font-semibold uppercase">{t("title")}</h1>
        <h2 className="text-base font-medium mt-[16px]">{t("location")}</h2>
        <ProfileSummary />
        <div className="flex flex-row items-center gap-[24px] mt-[32px] md:mt-[30px] ">
          <div className="flex rounded-[4px] bg-gradient-to-r from-[#D24074] to-[#6518B4] hover:scale-120 transition-all p-[2px] shadow-lg w-max mt-4">
            <a
              href="curriculum.pdf"
              className="flex items-center justify-center gap-[14px] font-bold bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] rounded-[4px] hover:bg-background cursor-pointer"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="download-cloud.svg"
                alt={t("curriculumAlt")}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
              {t("curriculum")}
            </a>
          </div>
          <div className="flex rounded-[4px] bg-gradient-to-r from-[#9358F7] to-[#10D7E2] hover:scale-120 transition-all p-[2px] shadow-lg w-max mt-4">
            <a
              href="mailto:gersonlamela7@gmail.com"
              className="flex items-center justify-center gap-[14px] font-bold bg-background w-[144px] md:w-[155px] h-[40px] md:h-[45px] rounded-[4px] hover:bg-background cursor-pointer"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="mail.svg"
                alt={t("emailAlt")}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
              {t("email")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
