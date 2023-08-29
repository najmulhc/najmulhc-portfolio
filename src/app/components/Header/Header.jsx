import Link from "next/link.js";
import ToggleThemeButton from "../Buttons/toggle.jsx";
import Logo from "../Logo/Logo.jsx";

const Header = () => {
  return (
    <header className="mx-[128px] flex justify-between text-3xl py-4">
      <Link href="/"> 
        <Logo
          width={32}
          height={32}
          classname="fill-[#191919] dark:fill-[#d5d5d5]"
        />
      </Link>
      <ul className="header font-medium">
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
    </header>
  );
};

export default Header;
