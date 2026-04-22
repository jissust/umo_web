// src/components/layout/Footer.tsx

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start h-full">
          <h2 className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-300">
              MiWeb
            </Link>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <NavLinks />
        </div>

        <div className="flex justify-center md:justify-end gap-6 text-xl">
          <a href="https://www.instagram.com/umo.calador26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://wa.me/34641467880" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};
