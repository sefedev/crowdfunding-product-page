import React from "react";
import { IconBookMark, LogoMasterCraft } from "../utils";
import Button from "./Button";
import SectionCard from "./SectionCard";

const SectionCardOne = () => {
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
      <div className="flex justify-between w-full my-8 sm:flex-col h-fit">
        <Button className="bg-ModerateCyan">
          <strong>Back this project</strong>
        </Button>
        <Button className="relative bg-opacity-20 text-DarkGray bg-DarkGray">
          <span className="absolute -top-1 right-16">
            <IconBookMark />
          </span>
          <strong className="relative">Bookmark</strong>
        </Button>
      </div>
    </SectionCard>
  );
};

export default SectionCardOne;
