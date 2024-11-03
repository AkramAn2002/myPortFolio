import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { FloatLabel } from "primereact/floatlabel";
import { classNames } from "primereact/utils";

const Input = ({ value, label, icon, onChange, name }) => {
  const [padding, setPadding] = useState(5);

  const handlePadding = () => {
    setPadding(7);
  };

  return (
    <div className={`flex items-center mb-7 relative`}>
      <i className={`fa fa-${icon} absolute ml-2 text-gray-400 opacity-50`}></i>
      <span className="p-float-label w-full">
        {icon === "phone" ? (
          <InputNumber
            name={name}
            className="p-1 border-[2px] border-[#14008e] shadow-custom-1.5px bg-transparent w-full text-[16px] pl-7 rounded-lg md:p-4 md:pl-7 focus:bg-black"
            value={value}
            style={{ background: "transparent" }}
            onValueChange={onChange}
            onClick={handlePadding}
            useGrouping={false}
          />
        ) : (
          <InputText
            name={name}
            className="p-1 border-[2px] border-[#14008e] shadow-custom-1.5px bg-transparent w-full text-[16px] pl-7 rounded-lg md:p-4 md:pl-7 focus:bg-black"
            id="in"
            value={value}
            onClick={handlePadding}
            onChange={onChange} // pour `InputText`, utilisez onChange
            required
          />
        )}
        <label htmlFor="in" className="pl-6">
          {label}
        </label>
      </span>
    </div>
  );
};

export default Input;
