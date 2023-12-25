/* eslint-disable react/prop-types */
const Button = ({ data }) => {
  return (
    <div>
      <button
        className={` rounded-[3px]  px-5 py-2 text-base font-medium shadow-sm bg-[#ebf1e2] text-[#1b3b15]  `}
      >
        {data.value}
      </button>
    </div>
  );
};

export default Button;
