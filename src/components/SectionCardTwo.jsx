import React, { useState } from "react";
import SectionCard from "./SectionCard";

const SectionCardTwo = ({ isMobile, backedAmount, totalBackedAmount }) => {

  return (
    <SectionCard>
      <div className="flex items-center w-full mb-8 sm:flex-col">
        <div className="mr-12 sm:mr-0 sm:text-center">
          <h2 className="mb-1 text-3xl font-bold">
            {backedAmount.toLocaleString("en-US")}
          </h2>
          <p className="text-sm text-DarkGray">of $100,000 backed</p>
        </div>
        {isMobile ? (
          <div className="w-1/2 my-6 border-t-2 opacity-40 border-DarkGray"></div>
        ) : (
          <div className="h-16 border-l-2 border-opacity-20 border-DarkGray"></div>
        )}
        <div className="mx-12 sm:mx-0 sm:mr-0 sm:text-center">
          <h2 className="mb-1 text-3xl font-bold">{totalBackedAmount.length}</h2>
          <p className="text-sm text-DarkGray">total backers</p>
        </div>
        {isMobile ? (
          <div className="w-1/2 my-6 border-t-2 opacity-40 border-DarkGray"></div>
        ) : (
          <div className="h-16 border-l-2 border-opacity-20 border-DarkGray"></div>
        )}
        <div className="ml-12 sm:ml-0 sm:text-center">
          <h2 className="mb-1 text-3xl font-bold">56</h2>
          <p className="text-sm text-DarkGray">days left</p>
        </div>
      </div>
      <div className="w-full bg-DarkGray bg-opacity-20 rounded-full h-2.5 ">
        <div
          className="bg-ModerateCyan h-2.5 rounded-full"
          style={{ width: `${(backedAmount / 100000) * 100}%` }}
        ></div>
      </div>
    </SectionCard>
  );
};

export default SectionCardTwo;
