import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SectionCard from "../components/SectionCard";
import SectionCardOne from "../components/SectionCardOne";
import SectionCardThree from "../components/SectionCardThree";
import SectionCardTwo from "../components/SectionCardTwo";
import useMediaQuery from "../hooks/useMediaQuery";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const NAVIGATOR = ["About", "Discover", "Get Started"];

  return (
    <div className="relative w-screen h-full pb-64 sm:w-screen bg-opacity-5 bg-DarkGray">
      {isMobile && menuOpen && <div className="absolute z-40 w-full h-full px-4 bg-DarkGray bg-opacity-30">
        <div className="z-50 flex flex-col items-center mt-20 rounded-lg shadow-md sm:w-full bg-White border-DarkGray">
          <ul className="w-full">
            {NAVIGATOR.map((item, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="w-full p-6 font-semibold border-b border-DarkGray"
                  >
                    <a href="#">{item}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>}
      <nav className="absolute top-0 left-0 w-full px-24 pt-8 sm:px-4 h-60 bg-hero-desktop">
        <Navbar isMobile={isMobile} navigator={NAVIGATOR} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>
      <main className="relative z-30 flex flex-col items-center top-44 sm:px-4">
        <SectionCardOne isMobile={isMobile} />
        <SectionCardTwo isMobile={isMobile} />
        <SectionCardThree />
      </main>
    </div>
  );
};

export default LandingPage;
