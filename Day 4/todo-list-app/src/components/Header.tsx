"use client";

import { useTheme } from "next-themes";
import { MdNightlightRound, MdSunny } from "react-icons/md";

const Header = () => {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-[10px] text-white md:text-3xl lg:text-4xl">
        TODO
      </h1>
      <button onClick={handleToggleTheme} className="cursor-pointer text-white">
        {theme === "dark" ? (
          <MdSunny size={35} />
        ) : (
          <MdNightlightRound size={35} />
        )}
      </button>
    </header>
  );
};

export default Header;
