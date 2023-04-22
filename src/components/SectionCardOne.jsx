import React, { useState } from "react";
import { IconBookMark, LogoMasterCraft } from "../utils";
import Button from "./Button";
import SectionCard from "./SectionCard";

const SectionCardOne = ({ isMobile }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarked = () => {
    setIsBookmarked(() => !isBookmarked);
  };
  return (
    <SectionCard>
      <span className="absolute -top-8">
        <LogoMasterCraft />
      </span>
      <h2 className="relative mt-4 mb-3 text-2xl font-bold">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <p className="text-DarkGray">
        A beautiful & handcrafted monitor stands to reduce neck and eye strain
      </p>
      <div className="flex justify-between w-full my-8 h-fit">
        <Button className="bg-ModerateCyan sm:w-full">
          <strong>Back this project</strong>
        </Button>
        {isMobile ? (
          <button 
          onClick={handleBookmarked}
          className="grid place-items-center sm:ml-2">
            <IconBookMark
                circleFill={isBookmarked ? "#3CB4AC" : "#2F2F2F"}
                pathFill={isBookmarked ? "#FFF" : "#B1B1B1"}
              />
          </button>
        ) : (
          <Button
            onClick={handleBookmarked}
            className={`w-2/5 pl-12  bg-opacity-20 hover:bg-Black hover:text-White ${
              isBookmarked
                ? " text-DarkCyan bg-DarkCyan"
                : "text-Black bg-DarkGray text-opacity-50"
            }`}
          >
            <span className="absolute left-0 -top-1">
              <IconBookMark
                circleFill={isBookmarked ? "#147b74" : "#2F2F2F"}
                pathFill={isBookmarked ? "#FFF" : "#B1B1B1"}
              />
            </span>
            <strong className="relative">
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </strong>
          </Button>
        )}
      </div>
    </SectionCard>
  );
};

export default SectionCardOne;
