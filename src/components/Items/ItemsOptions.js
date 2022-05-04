import React from 'react';

const ItemsOptions = ({ id,  handleClick, checked, children }) => (
  <label className="flex items-center cursor-pointer" htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      className="sr-only"
      checked={checked}
      onChange={() => handleClick(id)}
    />
    <span
      className={`${
        checked ? 'bg-[#452da5]' : 'bg-[#dfe3fa]'
      } h-full w-[16px] flex justify-center items-center transition`}
    >
      {checked && (
        <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 4.5l2.124 2.124L8.97 1.28"
            stroke="#FFF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      )}
    </span>
    <span className="ml-3 capitalize text-[12px] font-bold">{children}</span>
  </label>
);

export default ItemsOptions;
