"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Button = ({ children, onclick, type, classname, link }) => {
  const router = useRouter();
  
  if (!link) {
    return (
      <button
        className={`button ${classname}`}
        type={type}
        onClick={onclick ? () => onclick() :  console.log(" ")}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link href={link} target="_blank" className={`button ${classname}`}>
        {children}
      </Link>
    );
  }
};

export default Button;
