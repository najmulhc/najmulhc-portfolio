"use client";
import { useTheme } from "next-themes";
import { useEffect , useState} from "react";
import {FiMoon, FiSun} from 'react-icons/fi'
 
const ToggleThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      type="button"
      className=""
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ?  <FiMoon /> :  <FiSun/>}
    </button>
  );
};

export default ToggleThemeButton;
