/* eslint-disable react/prop-types */
const Button = ({ data, activeButton, setActiveButton }) => {
  return (
    <div>
      <button
        className={`outline-none rounded-[3px]  px-5 py-2 text-base font-medium shadow-sm ${
          activeButton.id === data.id
            ? "border-[#1b3b15] border-2 bg-white"
            : "bg-[#ebf1e2]"
        }  text-[#1b3b15]  `}
        onClick={() => setActiveButton(data)}
      >
        {data.value}
      </button>
    </div>
  );
};

export default Button;
