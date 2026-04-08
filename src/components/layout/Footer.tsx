// src/components/layout/Footer.tsx

import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
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
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
