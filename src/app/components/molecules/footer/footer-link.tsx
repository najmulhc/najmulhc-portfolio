"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface FooterLinkProps {
  children: string;
  Icon?: React.ReactNode;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ Icon, href, children }) => {
  const [isOnHover, setIsOnHover] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => {
        setIsOnHover(true);
      }}
      onMouseOut={() => {
        setIsOnHover(false);
      }}
    >
      <Link
        href={href}
        target="_blank"
        className="text-primary inline-flex justify-start items-center uppercase gap-2 text-[.813rem] hover:text-primaryMuted"
      >
        {Icon && (
          <p className="p-2 inline-block rounded-full border border-border bg-bgMuted text-primary ">
            {Icon}
          </p>
        )}
        <p className="text-primaryMuted flex justify-start gap-1 items-center">
          {children} {isOnHover && <MdArrowOutward />}
        </p>
      </Link>
    </div>
  );
};

export default FooterLink;
