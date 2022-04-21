import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { renderStatusBackground } from '../../utilities/renderStatus';
import InvoiceAction from './InvoiceAction';

const InvoiceHeader = ({ status, invoice }) => {
  const { width, breakpoints } = useContext(AppContext);

  return (
    <div className="w-full flex items-center p-6 rounded-none md:rounded-[12px] bg-[#121212]">
      <span className="mr-4 text-[12px] md:text-[14px] text-white">Status</span>
      <div
        className={`text-[14px] font-bold capitalize flex justify-center items-center w-[90px] h-[34px] md:w-[110px] md:h-[40px] rounded-[12px] ${renderStatusBackground(
          status
        )}`}
      >
        {status}
      </div>
      {width > breakpoints && (
        <InvoiceAction status={status} invoice={invoice} />
      )}
    </div>
  );
};

export default InvoiceHeader;
