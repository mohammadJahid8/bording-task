import { useState } from "react";
import FilterCategory from "./FilterCategory";
import { lotteryData } from "../utils/data";
import Ticket from "./Ticket";

const LotteryContainer = () => {
  const [activeButton, setActiveButton] = useState({ id: "3", value: "Forny" });
  const [fitleredData, setfitleredData] = useState(lotteryData[0]);

  const handleFilterLottery = (data) => {
    setActiveButton(data);

    const filtered = lotteryData.find((d) => d.category === data.value);

    setfitleredData(filtered);
  };

  return (
    <div>
      <FilterCategory
        handleFilterLottery={handleFilterLottery}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      <div className="mt-10">
        <p className="text-start text-2xl font-black text-[#1b3b15]">
          {fitleredData.title}
        </p>
        <p className="text-start text-sm py-2 text-[#1b3b15]">
          {fitleredData.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-4">
          {fitleredData.tickets.map((ticket, index) => (
            <Ticket key={index} ticket={ticket} />
          ))}
        </div>

        <button className="outline-none rounded-[3px]  text-white text-sm bg-[#497617] px-14 mt-8 py-2 font-medium shadow-sm">
          Tilfof kurven
        </button>
      </div>
    </div>
  );
};

export default LotteryContainer;
