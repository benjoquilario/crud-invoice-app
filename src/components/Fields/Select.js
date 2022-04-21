import { useField } from 'formik';
import React from 'react';

const Select = ({ label, name, options }) => {
  const [field] = useField(name);

  return (
    <div className="flex flex-col gap-2 transition text-sm">
      <label className="text-[12px] text-[#7388c3]" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <select
          {...field}
          className="w-full bg-white text-[#121212] font-bold py-[13px] px-[15px] border-solid border-[1px] border-[#dfe3fa] rounded"
        >
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
