import Link from "next/link.js";
import Logo from "../Logo/Logo.jsx";
import ToggleThemeButton from '../Buttons/toggle.jsx'

const Header = () => {
  return (
    <header className="mx-[128px] flex justify-between text-3xl py-4">
      <Logo width={32} height={32} classname="fill-[#191919] dark:fill-[#d5d5d5]" />
      <ul className="header">
        <li>
          <Link href="/" >Home</Link>
        </li>
        <li>
          <Link href="/tech-stack">Tech Stack</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Education</Link>
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
