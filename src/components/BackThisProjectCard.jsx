import Button from "./Button";
import { IconDollar } from "../utils";
import { useState } from "react";

const BackThisProjectCard = ({
  isMobile,
  cardType,
  selectedOption,
  setSelectedOption,
  setOpenModal,
  setSuccessModal,
  backedAmount,
  setTotalBackedAmount,
}) => {
  const { type, price, about, daysLeft } = cardType;
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  const handleSelectedOption = (e) => {
    setSelectedOption(() => e.target.id);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (price > parseInt(amount)) {
      setAmountError(`enter a value greater than ${price}`);
    } else {
      setTotalBackedAmount((totalBackedAmount) => [...totalBackedAmount, parseInt(amount)])
      setAmount(backedAmount)
      setOpenModal(false);
      setSuccessModal(true);
    }

    

  };

  return (
    <div className="py-6 mb-4 border-2 rounded-lg border-DarkGray border-opacity-40">
      <label
        className={`flex-col w-full ${
          daysLeft === 0 && "opacity-40 cursor-not-allowed"
        } ${
          selectedOption === type &&
          "border-2 border-ModerateCyan border-opacity-100"
        }`}
        htmlFor={type}
      >
        <div className="flex px-6">
          {!isMobile && (
            <div className="mr-6">
              <input
                type="radio"
                name="subType"
                className="accent-ModerateCyan"
                id={type}
                onChange={handleSelectedOption}
              />
            </div>
          )}

          <div className="w-full">
            <div className="flex justify-between sm:justify-start sm:items-center">
              {isMobile && (
                <div className="mr-4">
                  <input
                    type="radio"
                    name="subType"
                    className="accent-ModerateCyan"
                    onChange={handleSelectedOption}
                    id={type}
                  />
                </div>
              )}
              <span className="flex sm:flex-col">
                <h3 className="mr-4 font-semibold">{type}</h3>
                <h3 className="font-semibold text-ModerateCyan">
                  Pledge ${price.toLocaleString("en-US")} or more
                </h3>
              </span>

              {!isMobile && (
                <span className="flex items-center">
                  <h3 className="mr-2 font-semibold">{daysLeft}</h3>
                  <p className="text-sm text-DarkGray">left</p>
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-DarkGray">{about}</p>
            {isMobile && (
              <span className="flex items-center mt-4">
                <h3 className="mr-2 font-semibold">101</h3>
                <p className="text-sm text-DarkGray">left</p>
              </span>
            )}
          </div>
        </div>

        {selectedOption === type && (
          <>
            <hr className="mt-6 text-DarkGray opacity-40" />
            <div className="flex justify-between px-6 mt-6 sm:px-2 sm:flex-col">
              <p className="flex items-center justify-center sm:mb-4 text-DarkGray">
                Enter your Pledge
              </p>
              <span className="flex items-center justify-between sm:justify-around">
                <label className="relative">
                  <IconDollar className="absolute inset-y-2 opacity-40" />
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-20 px-6 py-2 mr-2 border sm:mr-0 rounded-3xl border-DarkGray"
                  />
                </label>
                <Button
                  type="submit"
                  onClick={onSubmitHandler}
                  className="py-3 text-sm font-semibold bg-ModerateCyan"
                >
                  Continue
                </Button>
              </span>
            </div>
            {amountError && (
              <p className="text-xs text-Red text-right pr-16 sm:pr-0 sm:text-left sm:pl-8 mt-1">
                {amountError}
              </p>
            )}
          </>
        )}
      </label>
    </div>
  );
};

export default BackThisProjectCard;
