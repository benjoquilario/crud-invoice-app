import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { renderStatusBackground } from '../../utilities/renderStatus';
import { dateToString } from '../../utilities/dateToString';

const InvoicesList = ({ invoice, variants, initial, animate, exit }) => {
  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      className="w-full grid grid-cols-1 items-center content-center bg-white h-[111px] md:h-[74px] mb-[12px] rounded-[12px] border-[1px] border-transparent border-solid hover:border-[#452da5] transition"
    >
      <Link to={`invoice/${invoice.id}`} className="h-[111px] md:h-[74px] flex justify-center items-center px-[20px]">
        <div className="text-[#121212] w-full grid grid-cols-[1fr_1fr] md:grid-cols-[7rem_9rem_1fr_auto_auto_auto] items-center">
          <h2 className="mb-3 md:mb-0 font-bold text-[14px]">#{invoice.id}</h2>
          <div className="text-[#888eb0] text-[9px] md:text-[12px]">
            {dateToString(invoice.createdAt)}
          </div>
          <div className="text-[#888eb0] text-right md:text-center text-[12px] col-[2_/_3] row-[1_/_2]">
            {invoice.clientName}
          </div>
          <div className="font-bold text-[15px] md:text-[20px] tracking-tighter">
            ${invoice.total}
          </div>
          <div
            className={`col-[2_/_3] row-[2_/_4] md:row-auto md:col-auto ml-auto md:mx-[43px] text-[14px] font-bold capitalize flex justify-center items-center w-[90px] h-[34px] md:w-[110px] md:h-[40px] rounded-[12px] ${renderStatusBackground(
              invoice.status
            )}`}
          >
            {invoice.status}
          </div>
          <span className="hidden md:block">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#7C5DFA"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.li>
  );
};

export default InvoicesList;
