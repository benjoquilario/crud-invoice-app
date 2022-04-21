import { useField, useFormikContext } from 'formik';
import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ label, name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex justify-between items-center w-full bg-white text-sm text-[#121212] cursor-pointer py-[13px] px-[15px] border-solid border-[1px] border-[#dfe3fa] rounded"
      type="button"
      onClick={onClick}
      ref={ref}
      value="true"
      aria-label="pick date"
    >
      <span>{value}</span>
      <span>
        <svg
          width="16"
          height="16"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
            fill="#7E88C3"
            fillRule="nonzero"
            opacity=".5"
          />
        </svg>
      </span>
    </button>
  ));

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] text-[#7388c3]" htmlFor={name} valid="true">
        {label}
      </label>
      <ReactDatePicker
        id={name}
        {...field}
        selected={field.value}
        onChange={value => setFieldValue(name, value)}
        customInput={<CustomInput />}
        dateFormat="MMM d, yyyy"
      />
    </div>
  );
};

export default DatePicker;
