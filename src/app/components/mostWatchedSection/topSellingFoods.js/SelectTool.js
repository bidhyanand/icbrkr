import React from "react";

const SelectTool = ({ options, onChange }) => {
  return (
    <div className="relative inline-block w-48  ">
      <select
        className="block appearance-none w-full   hover:border-gray-400 px-4  pr-8  bg-gray-100 rounded-md leading-tight focus:outline-none focus:ring focus:ring-gray-100 border-none "
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTool;
