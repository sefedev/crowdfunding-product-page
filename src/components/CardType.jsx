import React from "react";
import Button from "./Button";

const CardType = ({ type, price, about, daysLeft }) => {
    const click = () => {
        return alert(type)
    }
  return (
    <section
      className={`w-full p-6 mb-6 border-2 rounded-lg shadow-sm border-DarkGray border-opacity-40 ${
        daysLeft === 0 ? "opacity-30" : null
      }`}
    >
      <div className="flex justify-between sm:flex-col">
        <h4 className="font-semibold sm:mb-2">{type}</h4>
        <a href="#" className="text-ModerateCyan">
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
          className={`bg-ModerateCyan ${
            daysLeft === 0 ? "cursor-not-allowed" : null
          }`}
          disabled
          onClick={click}
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
