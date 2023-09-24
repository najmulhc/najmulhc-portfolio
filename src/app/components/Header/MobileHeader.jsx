"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6"; 
import ToggleThemeButton from "../Buttons/toggle";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="block md:hidden relative">
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? <FaBars /> : <FaXmark />}
      </span>

      {isOpen && (
        <ul
          className="left-[-89vw] w-[100vw] font-medium  absolute top-16  bg-white dark:bg-[#202939]  flex flex-col gap-2 p-4 z-10 items-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tech-stack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileHeader;
