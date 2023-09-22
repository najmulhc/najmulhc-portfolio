import Link from "next/link.js";
import ToggleThemeButton from "../Buttons/toggle.jsx";
import Logo from "../Logo/Logo.jsx";

const Header = () => {
  return (
    <header className="px-4 md:px-32 flex  justify-between text-3xl py-4">
      <Link href="/">
        <Logo
          width={32}
          height={32}
          classname="fill-[#121926] dark:fill-[#EEF2F6]"
        />
      </Link>
      <ul className="hidden md:flex  header font-medium">
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
