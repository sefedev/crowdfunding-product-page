import React from "react";
import { IconCheck } from "../utils";
import Button from "./Button";
import SectionCard from "./SectionCard";

const SuccessComp = ({ setSuccessModal }) => {
  return (
    <SectionCard className="w-2/5 text-center h-fit sm:w-full">
      <IconCheck />
      <h1 className="my-6 text-xl font-bold">Thanks for your support</h1>
      <p className="leading-7 text-DarkGray">
        Your Plegdge brings us one step closer to sharing MasterCraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button
        onClick={() => setSuccessModal(false)}
        className="px-8 my-6 font-semibold bg-ModerateCyan hover:bg-DarkCyan"
      >
        Got it!
      </Button>
    </SectionCard>
  );
};

export default SuccessComp;
