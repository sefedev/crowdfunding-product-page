import React from "react";
import CardType from "./CardType";
import SectionCard from "./SectionCard";

const SectionCardThree = ({CARD_TYPE, setOpenModal}) => {
  return (
    <SectionCard>
      <h3 className="flex justify-start w-full mb-6 text-lg font-semibold">
        About this Project
      </h3>
      <article className="mb-4 text-sm text-DarkGray">
        <p className="mb-4 leading-7">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="mb-4 leading-7">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, penis, and USB
          sticks to be stored under the stand.
        </p>
      </article>
      {CARD_TYPE.map(({ type, price, about, daysLeft }, index) => {
        return (
          <CardType
            key={index}
            type={type}
            price={price}
            about={about}
            daysLeft={daysLeft}
            setOpenModal={setOpenModal}
          />
        );
      })}
    </SectionCard>
  );
};

export default SectionCardThree;
