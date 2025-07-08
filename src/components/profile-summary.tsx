"use client";

import { useEffect, useState } from "react";
import DecryptedText from "./decrypted-text";
import { useTranslations } from "next-intl";

export default function ProfileSummary() {
  const t = useTranslations("aboutMe");

  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthDate = new Date("2001-12-02");
    const today = new Date();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    const calculatedAge =
      today.getFullYear() -
      birthDate.getFullYear() -
      (hasHadBirthdayThisYear ? 0 : 1);

    setAge(calculatedAge);
  }, []);

  // Montar o texto com a idade (fallback para "loading..." caso seja null)
  const text = t("aboutme", { age: age !== null ? age : "loading..." });

  return (
    <p className="font-light text-sm mt-2 text-justify leading-6 md:leading-8 whitespace-pre-line">
      <DecryptedText
        text={text}
        speed={100}
        animateOn="view"
        maxIterations={20}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
    </p>
  );
}
