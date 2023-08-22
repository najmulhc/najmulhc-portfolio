import ToggleThemeButton from "../Buttons/toggle.jsx";

const Header = () => {
  return (
    <header className="mx-[128px] flex justify-between text-3xl py-4">
      <h2>Najmul Huda Chowdhury</h2>
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
