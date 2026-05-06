"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const locales = ["es", "en"] as const;

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const segments = pathname.split("/");
  const currentLang = segments[1] || "es";

  const changeLang = (newLang: string) => {
    segments[1] = newLang;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const availableLangs = locales.filter((lang) => lang !== currentLang);

  return (
    <div className="relative inline-block text-white w-[30px] bg-black">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 border cursor-pointer w-full text-sm"
      >
        <Image
          src={`/img/flags/${currentLang}.svg`}
          alt={currentLang}
          width={20}
          height={20}
        />
      </button>

      <div
        className={`absolute right-0 border shadow w-full transform origin-top transition-all duration-300
    ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
      >
        {availableLangs.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLang(lang)}
            className="block w-full p-1 hover:bg-gray-800 cursor-pointer text-center text-sm"
          >
            <Image
              src={`/img/flags/${lang}.svg`}
              alt={lang}
              width={20}
              height={20}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
