import React from "react";
import Button from "./Button";

const CardType = ({ type, price, about, daysLeft, setOpenModal }) => {

  const selectReward = () => {
    setOpenModal(true)
  }
  
  return (
    <section
      className={`w-full p-6 mb-6 border-2 rounded-lg shadow-sm border-DarkGray border-opacity-40 ${
        daysLeft === 0 ? "opacity-30" : null
      }`}
    >
      <div className="flex justify-between sm:flex-col">
        <h4 className="font-semibold sm:mb-2">{type}</h4>
        <a href="#" className={`text-ModerateCyan ${
            daysLeft === 0 ? "cursor-not-allowed" : null
          }`} disabled>
          Pledge ${price} or more
        </a>
      </div>
      <p className="my-6 text-sm leading-7 text-DarkGray">{about}</p>
      <div className="flex justify-between sm:flex-col">
        <span className="flex items-center sm:mb-4">
          <h2 className="mr-2 text-3xl font-bold">{daysLeft}</h2>
          <p className="text-sm text-DarkGray">left</p>
        </span>
        <Button
          onClick={selectReward}
          className={`bg-ModerateCyan font-semibold ${
            daysLeft === 0 ? "cursor-not-allowed" : null
          }`}
          disabled={true}
        >
          {
            daysLeft === 0 ? "Out of Stock" : "Select Reward"
          }
        </Button>
      </div>
    </section>
  );
};

export default CardType;
