import React from "react";

const Button = ({ colorBg, colorTxt, value, borderColor, hover1, hover2 }) => {
  return (
    <>
      <button
        className={`btn bg-${colorBg} font-bold text-${colorTxt} text-[18px] border-[3px] border-[${borderColor}] hover:${hover1} hover:${hover2} transition-all duration-500 `}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
