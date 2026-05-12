"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/ui/languageSwitcher/LanguageSwitcher ";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full text-white p-6 fixed top-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? "bg-black" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3">
        <h1 className="text-xl font-bold justify-self-start">
          <Link href={`/${lang}`} className="hover:text-gray-300">
            <Image
              src="/img/logo_714x195.png"
              alt="UMO logo"
              width={150}
              height={150}
              priority
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
        </h1>

        <div className="hidden items-center md:flex gap-6 text-md justify-self-center">
          <NavLinks />
        </div>

        <div className="hidden items-center md:flex gap-6 text-md justify-self-end">
          <LanguageSwitcher />
        </div>
        <button
          className="md:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLinks />
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};
