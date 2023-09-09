"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ToggleThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <a
      className="text-2xl font-normal hover:text-[#764ABC]  "
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <HiMoon /> : <HiSun />}
    </a>
  );
};

export default ToggleThemeButton;
