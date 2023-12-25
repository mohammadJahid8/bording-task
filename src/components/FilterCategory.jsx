/* eslint-disable react/prop-types */
import Button from "./Button";

const FilterCategory = ({ activeButton, handleFilterLottery }) => {
  const filterButtons = [
    { id: "1", value: "Mine Lodsedser" },
    { id: "2", value: "Gevinster" },
    { id: "3", value: "Forny" },
    { id: "4", value: "Klub Varelotteriet" },
    { id: "5", value: "Mine oplysninger" },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 mt-14">
      {filterButtons.map((data) => (
        <Button
          key={data.id}
          data={data}
          handleFilterLottery={handleFilterLottery}
          activeButton={activeButton}
        />
      ))}
    </div>
  );
};

export default FilterCategory;
