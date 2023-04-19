import React from "react";
import CardType from "./CardType";
import SectionCard from "./SectionCard";

const SectionCardThree = () => {
    const CARD_TYPE = [
        {
            type: "Bamboo Stand",
            price: 25,
            about: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer memeber list",
            daysLeft: 101,
        },
        {
            type: "Black Edition Stand",
            price: 75,
            about: "You get a Black Special Edition computer stand and a personal thank you, You'll be added to our Backer member list. Shipping is included",
            daysLeft: 64,
        },
        {
            type: "Mahogany Special Edition",
            price: 200,
            about: "You get two Special Edition Mahogany stands, a backer T-shirt, and a personal thank you, You'll be added to our Backer member list. Shipping is included",
            daysLeft: 0,
        },
    ]
  return (
    <SectionCard>
      <h3 className="flex justify-start w-full mb-6 text-lg font-semibold">
        About this Project
      </h3>
      <article className="mb-4 text-sm text-DarkGray">
      <p className="mb-4 leading-7">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        blanditiis alias beatae porro harum, quibusdam in inventore ducimus
        error necessitatibus eligendi minima optio eos. Natus error nam
        doloremque ducimus perferendis corrupti dolores dicta! Nam adipisci
        minima quod illum quidem nihil officiis quis? Ullam, assumenda porro
        suscipit soluta voluptatem impedit dolorum!
      </p>
      <p className="mb-4 leading-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        laboriosam voluptas assumenda deleniti voluptate error ea voluptates
        ipsa quis ut!
      </p>
      </article>
      {CARD_TYPE.map(({type, price, about, daysLeft, index}) => {
        return (
            <CardType 
                key={index}
                type={type}
                price={price}
                about={about}
                daysLeft={daysLeft}
            />
        )
      })}
    </SectionCard>
  );
};

export default SectionCardThree;
