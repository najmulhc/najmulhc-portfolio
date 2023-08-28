"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Button = ({ children, onclick, type, classname, link }) => {
  const router = useRouter();
  const sendToLink = () => {
    router.forward(link)
  }
  if (!link) {
    return (
      <button
        className={classname}
        type={type}
        onClick={onclick ? () => onclick() : console.log("nothing here")}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link href={link} onClick={sendToLink} className={`${classname} button`}   >
        {children}
      </Link>
    );
  }
};

export default Button;
