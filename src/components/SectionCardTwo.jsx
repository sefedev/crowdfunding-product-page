import React, { useState } from "react";
import SectionCard from "./SectionCard";

const SectionCardTwo = ({isMobile}) => {
  const [amount, setAmount] = useState(89914);

  return (
    <SectionCard>
      <div className="flex items-center w-full mb-8 sm:flex-col">
        <div className="mr-12">
          <h2 className="mb-1 text-3xl font-bold">${amount.toLocaleString("en-US")}</h2>
          <p className="text-sm text-DarkGray">of $100,000 backed</p>
        </div>
        <div className={`h-16 mr-12 ${isMobile ? "":"border-l"} border-DarkGray`}></div>
        <div className="mr-12">
          <h2 className="mb-1 text-3xl font-bold">5,007</h2>
          <p className="text-sm text-DarkGray">total backers</p>
        </div>
        <div className={`h-16 ${isMobile ? "":"border-l"} border-DarkGray`}></div>
        <div className="ml-12">
          <h2 className="mb-1 text-3xl font-bold">56</h2>
          <p className="text-sm text-DarkGray">days left</p>
        </div>
      </div>
      <div className="w-full bg-DarkGray bg-opacity-20 rounded-full h-2.5 ">
        <div
          className="bg-ModerateCyan h-2.5 rounded-full"
          style={{ width: `${(amount/100000) * 100}%` }}
        ></div>
      </div>
    </SectionCard>
  );
};

export default SectionCardTwo;
