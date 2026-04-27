"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/noticias") {
      return pathname === "/noticias" || pathname.startsWith("/noticia/");
    }
    return pathname === path;
  };

  const linkClass = (path: string) =>
    `font-semibold hover:text-gold ${
      isActive(path) ? "text-gold" : "text-white"
    }`;

  return (
    <>
      <Link href="/carta" className={linkClass("/carta")}>
        Carta
      </Link>
      <Link href="/contacto" className={linkClass("/contacto")}>
        Contacto
      </Link>
      {/* <Link href="/noticias" className={linkClass("/noticias")}>
        Noticias
      </Link> */}
    </>
  );
};
