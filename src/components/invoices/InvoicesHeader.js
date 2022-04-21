import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/context';
import { optionsFilter } from '../../utilities/initialValues';
import invoicesMessage from '../../utilities/invoiceMessage';
import ItemsOptions from '../Items/ItemsOptions';
import { headerVariant } from '../../utilities/framerVariants';

const InvoicesHeader = () => {
  const { filteredInvoices, filter, setFilter, width, breakpoints } =
    useContext(AppContext);

  const [options, setOption] = useState(optionsFilter);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const message = invoicesMessage(
    filteredInvoices && filteredInvoices.length,
    filter
  );

  /**
   * Functio to handle a filter event
   * @param {number} id when id is equal to option.id checked
   */
  const onHandleClick = id => {
    setOption(
      options.map(option => {
        if (id === option.id) {
          setFilter(option.checked ? null : option.value);

          return { ...option, checked: !option.checked };
        }
        return { ...option, checked: false };
      })
    );
  };

  return (
    <motion.div
      variants={headerVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex items-center w-full bg-[#121212] mt-[-2px] md:mt-[30px] px-4 md:px-[20px] py-[25px] md:rounded-[12px]"
    >
      <div className="mr-auto text-white  uppercase">
        <h1 className="text-[14px] md:text-[20px]">Invoices</h1>
        <p className="text-[8px] md:text-[12px]">{message}</p>
      </div>
      <div className="relative">
        <button
          className="text-white flex items-center"
          aria-label="filter by status"
          onClick={() => setIsOptionOpen(!isOptionOpen)}
        >
          <span className="text-[10px] md:text-[13px] mr-2">
            {width > breakpoints ? 'Filter by status' : 'Filter'}
          </span>
          <span>
            <svg
              width="12"
              height="12"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </span>
        </button>
        <div
          className={`${
            isOptionOpen ? 'h-[120px]' : 'h-0'
          } bg-white transition-all absolute top-[50px] left-[50%] translate-x-[-50%] flex flex-col justify-center gap-2 w-[200px] overflow-hidden shadow-xl px-[40px] rounded-[10px] z-10`}
        >
          {options.map(option => {
            return (
              <ItemsOptions
                key={option.id}
                id={option.id}
                checked={option.checked}
                handleClick={onHandleClick}
              >
                {option.value}
              </ItemsOptions>
            );
          })}
        </div>
      </div>
      <button className="flex justify-center items-center w-[100px] md:w-[170px] h-[47px] bg-[#452da5] text-white rounded-[50px] ml-8">
        <Link to="/create" className="flex items-center justify-center">
          <span className="bg-white rounded-full p-2 mr-2 inline0-flex">
            <svg
              aria-hidden="true"
              focusable="false"
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fillRule="nonzero"
              />
            </svg>
          </span>
          <span className="text-[11px] md:text-[13px] font-semibold">
            {width > breakpoints ? 'Create Invoices' : 'Create'}
          </span>
        </Link>
      </button>
    </motion.div>
  );
};

export default InvoicesHeader;
