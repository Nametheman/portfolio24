import React from "react";

import ThemeButton from "./ThemeButton";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <nav className="bg-[#f7f7f7] dark:bg-[#333] fixed bottom-0 w-full h-[80px] flex items-center px-8 lg:sticky lg:top-0 justify-between">
      <p className="font-bold text-sm">{"< EmmyDev />"}</p>

      <div className="flex items-center gap-4">
        <ThemeButton />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBar;
