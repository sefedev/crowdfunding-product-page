import React, { useContext, useState } from "react";
import BackThisProject from "../components/BackThisProject";
import Navbar from "../components/Navbar";
import SectionCardOne from "../components/SectionCardOne";
import SectionCardThree from "../components/SectionCardThree";
import SectionCardTwo from "../components/SectionCardTwo";
import SuccessComp from "../components/SuccessComp";
import useMediaQuery from "../hooks/useMediaQuery";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [totalBackedAmount, setTotalBackedAmount] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const NAVIGATOR = ["About", "Discover", "Get Started"];

  const CARD_TYPE = [
    {
      type: "Bamboo Stand",
      price: 25,
      about:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer memeber list",
      daysLeft: 101,
    },
    {
      type: "Black Edition Stand",
      price: 75,
      about:
        "You get a Black Special Edition computer stand and a personal thank you, You'll be added to our Backer member list. Shipping is included",
      daysLeft: 64,
    },
    {
      type: "Mahogany Special Edition",
      price: 200,
      about:
        "You get two Special Edition Mahogany stands, a backer T-shirt, and a personal thank you, You'll be added to our Backer member list. Shipping is included",
      daysLeft: 0,
    },
  ];

  let backedAmount = totalBackedAmount.reduce((total, num) => {
    return total + num
  },0)



  return (
    <div className="relative w-screen h-full pb-64 sm:w-screen bg-opacity-5 bg-DarkGray">
      {openModal && (
        <div className="fixed z-50 flex justify-center w-full h-full px-4 overflow-scroll bg-DarkGray bg-opacity-30">
          <BackThisProject
            setOpenModal={setOpenModal}
            setSuccessModal={setSuccessModal}
            isMobile={isMobile}
            CARD_TYPE={CARD_TYPE}
            backedAmount={backedAmount}
            totalBackedAmount={totalBackedAmount}
            setTotalBackedAmount={setTotalBackedAmount}
          />
        </div>
      )}
      {successModal && (
        <div className="fixed z-50 flex items-center justify-center w-full h-full px-4 overflow-scroll bg-DarkGray bg-opacity-30">
          <SuccessComp setSuccessModal={setSuccessModal} />
        </div>
      )}
      {isMobile && menuOpen && (
        <div className="absolute z-30 w-full h-full px-4 bg-DarkGray bg-opacity-30">
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
        </div>
      )}
      <nav className="absolute top-0 left-0 w-full px-24 pt-8 sm:px-4 h-60 bg-hero-desktop">
        <Navbar
          isMobile={isMobile}
          navigator={NAVIGATOR}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </nav>
      <main className="relative z-20 flex flex-col items-center top-44 sm:px-4">
        <SectionCardOne
          isMobile={isMobile}
          setOpenModal={setOpenModal}
        />
        <SectionCardTwo isMobile={isMobile} backedAmount={backedAmount} totalBackedAmount={totalBackedAmount} />
        <SectionCardThree CARD_TYPE={CARD_TYPE} setOpenModal={setOpenModal}/>
      </main>
    </div>
  );
};

export default LandingPage;
