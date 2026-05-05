"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const lang = pathname.split("/")[1] || "es";

  const isActive = (path: string) => {
    if (path === "/noticias") {
      return pathname === `/${lang}/noticias` || pathname.startsWith(`/${lang}/noticia/`);
    }
    return pathname === `/${lang}${path}`;
  };

  const linkClass = (path: string) =>
    `font-semibold hover:text-gold ${
      isActive(path) ? "text-gold" : "text-white"
    }`;

  return (
    <>
      <Link href={`/${lang}/carta`} className={linkClass("/carta")}>
        Carta
      </Link>
      <Link href={`/${lang}/contacto`} className={linkClass("/contacto")}>
        Contacto
      </Link>
      <Link href={`/${lang}/noticias`} className={linkClass("/noticias")}>
        Noticias
      </Link>
    </>
  );
};
