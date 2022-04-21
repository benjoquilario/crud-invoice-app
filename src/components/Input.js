import React from 'react';
import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[12px] text-[#7388c3]"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`border-solid border-[1px] ${
          meta.touched && meta.error ? 'border-[#ec5757]' : 'border-[#dfe3fa]'
        } w-full text-[#121212] text-[11px] font-semibold rounded py-[10px] px-[18px]`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="text-[8px] text-[#ec5757]">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default Input;
