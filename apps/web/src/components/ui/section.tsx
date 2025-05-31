
// components/Section.tsx
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full max-w-screen-2xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
