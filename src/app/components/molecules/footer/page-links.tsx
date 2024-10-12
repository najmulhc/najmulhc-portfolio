import React from "react";
import FooterLink from "./footer-link";

const PageLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <FooterLink href="/projects">Projects</FooterLink>
      <FooterLink href="/technologies">skills</FooterLink>
      <FooterLink href="/education">education</FooterLink>
      <FooterLink href="/contact-me">contact me</FooterLink>
    </div>
  );
};

export default PageLinks;
