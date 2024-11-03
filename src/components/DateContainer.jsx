import React from "react";
const DateContainer = ({ date, postionTop, margin }) => {
  return (
    <>
      <span
        className={`bg-black border-[#14008e] border-[1px] rounded-full w-[15px] h-[15px] absolute -translate-x-1/2 ${postionTop}`}
      ></span>
      <span
        className={`absolute -translate-x-1/2 rotate-[-50deg] ${margin} lg:absolute textshadow font-bold ${postionTop} `}
      >
        {date}
      </span>
    </>
  );
};

export default DateContainer;
