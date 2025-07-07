"use client";
import { useEffect, useState } from "react";
import DecryptedText from "./decrypted-text";

export default function ProfileSummary() {
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

  return (
    <p className="font-light text-sm mt-2 text-justify leading-6 md:leading-8 whitespace-pre-line">
      <DecryptedText
        text={`Hello, I’m Gerson Lamela, a ${
          age !== null ? age : "loading..."
        } Fullstack Developer with expertise in building fast, scalable, and user-centric web applications. I work extensively with React, Next.js, TypeScript, TailwindCSS, and Node.js. I am passionate about solving complex problems, adopting new technologies, and delivering innovative solutions. Outside of work, I dedicate time to personal projects and continuous learning to further enhance my skills.`}
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
