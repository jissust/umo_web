import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  target?: "_blank" | "_self";
};

export const ButtonLink = ({
  href,
  children,
  bgColor = "bg-orange-400",
  textColor = "text-black",
  hoverBgColor = "hover:bg-orange-300",
  hoverTextColor = "",
  target = "_self",
}: ButtonLinkProps) => {
  const baseStyles = `
    inline-flex items-center mt-6 px-6 py-3 rounded-sm font-medium transition text-sm
    ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor}
  `;
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={baseStyles}
    >
      {children}
    </Link>
  );
};
