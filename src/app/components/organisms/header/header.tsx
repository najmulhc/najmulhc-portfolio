import Button from "../../atoms/button";
import NavLink from "../../molecules/header/nav-link";

const Header = () => {
  return (
    <header className="w-full hidden justify-center items-center py-4 sticky-top md:flex">
      <nav className="p-2  px-4 border border-border rounded-md bg-bgMuted backdrop-blur-md flex justify-between items-center gap-4 ">
        <NavLink href="/home">
        Najmulhc</NavLink>
        <NavLink href="/projects">
        projects</NavLink>
        <NavLink href="/technologies">
        skills</NavLink>
        <NavLink href="/education" > 
        education</NavLink>
        <NavLink href="/about-me">
        about me</NavLink>
        <NavLink href="/contact-me" >
        contact </NavLink>
        <Button href="https://www.google.com">
          resume
        </Button>
      </nav>
    </header>
  );
};

export default Header;
