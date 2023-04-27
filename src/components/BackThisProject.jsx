import React, { useState } from "react";
import { IconMenuClose } from "../utils";
import BackThisProjectCard from "./BackThisProjectCard";
import SectionCard from "./SectionCard";

const BackThisProject = ({
  setOpenModal,
  isMobile,
  CARD_TYPE,
  setSuccessModal,
  totalBackedAmount,
  setTotalBackedAmount,
  backedAmount
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <SectionCard className="w-3/5 px-10 sm:w-full sm:px-4 h-fit">
      <div className="flex flex-col items-center justify-between w-full mb-8 sm:flex-row-reverse">
        <span className="flex justify-end w-full sm:w-fit">
          <button onClick={() => setOpenModal(false)}>
            <IconMenuClose fillColor="#7a7a7a" />
          </button>
        </span>
        <h2 className="w-full text-2xl font-semibold text-left sm:w-fit">
          Back this Project
        </h2>
      </div>
      <p className="w-full mb-8 text-sm text-left text-DarkGray">
        Want to Support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      {CARD_TYPE.map((cardType, index) => {
        return (
          <BackThisProjectCard
            key={index}
            isMobile={isMobile}
            cardType={cardType}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setOpenModal={setOpenModal}
            setSuccessModal={setSuccessModal}
            backedAmount={backedAmount}
            totalBackedAmount={totalBackedAmount}
            setTotalBackedAmount={setTotalBackedAmount}
          />
        );
      })}
    </SectionCard>
  );
};

export default BackThisProject;
