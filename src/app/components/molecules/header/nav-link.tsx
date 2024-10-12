import Link from "next/link";
import React from "react";

export interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text font-satoshi-light hover:font-satoshi-regular text-primary uppercase text-[0.813rem]"
    >
      {children}
    </Link>
  );
};

export default NavLink;
