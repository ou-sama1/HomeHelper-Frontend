import { useState } from "react";

import HomeHelperLogo from "../../../../assets/logo-3.png";
import NavList from "./NavList";
import { HamburgerIcon } from "../../../../components/icons";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-10 py-5 xl:h-24">
      <nav className="border-gray-200 bg-white">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={HomeHelperLogo}
              className="h-10 sm:h-12 lg:h-16"
              alt="HomeHelper logo"
            />
          </a>

          <button
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 xl:hidden"
          >
            <HamburgerIcon />
          </button>

          <div
            className={`${expand ? "block" : "hidden"} w-full bg-white xl:block xl:w-auto`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
