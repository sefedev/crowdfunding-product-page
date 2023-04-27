import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { IconHamburger, IconMenuClose } from "../utils";

const Navbar = ({isMobile, navigator, menuOpen, setMenuOpen}) => {

  const handleMenu = () => {
    setMenuOpen(() => !menuOpen)
  }

  return (
    <div className="flex items-center justify-between w-full text-White">
      <h1 className="text-2xl font-bold">Crowdfund</h1>
      {isMobile ? (
        <button onClick={handleMenu} className="z-40">
        {menuOpen ? <IconMenuClose fillColor="#FFF" /> : <IconHamburger />}
        </button>
      ) : (
        <ul className="flex">
          {navigator.map((item, index) => {
            return (
              <li key={index} className="mr-8">
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
