"use client";
import { useState } from "react";
import Image from "next/image";

import Mint from "@/assets/img/mint.png";
import Navy from "@/assets/img/navy.png";
import Ocean from "@/assets/img/ocean.png";

const ShowImg = () => {
  const [selectedColor, setSelectedColor] = useState(Mint);

  const watches = [
    {
      name: "iWatch Mint",
      img: Mint,
      color: "bg-[#58D7C4]",
    },
    {
      name: "iWatch Navy",
      img: Navy,
      color: "bg-[#404354]",
    },
    {
      name: "iWatch Ocean",
      img: Ocean,
      color: "bg-[#DFEDF2]",
    },
  ];

  return (
    <section className="grid grid-flow-col content-center">
      <Image
        src={selectedColor}
        alt="iWatch"
        className="object-cover max-w-md"
        height={500}
        width={500}
      />
      <Options setSelectedColor={setSelectedColor} data={watches} />
      <Colors setSelectedColor={setSelectedColor} data={watches} />
    </section>
  );
};

export default ShowImg;

function Colors({ setSelectedColor, data }) {
  return (
    <ul className="grid content-center items-center space-y-4 ">
      {data.map((watch, id) => {
        return (
          <li
            key={id}
            onClick={() => setSelectedColor(watch.img)}
            className={`${watch.color} aspect-square w-4 rounded-full border border-white relative not-last:after:absolute not-last:after:top-0 not-last:after:right-1/2 not-last:after:translate-x-1/2 not-last:after:-z-10 not-last:after:h-10 not-last:after:border-l-2 not-last:after:border-dotted not-last:after:border-white hover:scale-105 cursor-pointer`}
          />
        );
      })}
    </ul>
  );
}

function Options({ data, setSelectedColor }) {
  return (
    <ul className=" row-start-2 flex gap-4">
      {data.map((watch, id) => {
        return (
          <li
            key={id}
            onClick={() => setSelectedColor(watch.img)}
            className="grid grid-rows-3 max-w-32 cursor-pointer hover:scale-105"
          >
            <Image
              src={watch.img}
              alt={watch.name}
              width={200}
              height={200}
              className="col-start-1 row-span-full z-10"
            />
            <div
              className={`${watch.color} col-start-1 row-start-2 row-span-2 rounded-lg opacity-60`}
            />
          </li>
        );
      })}
    </ul>
  );
}
