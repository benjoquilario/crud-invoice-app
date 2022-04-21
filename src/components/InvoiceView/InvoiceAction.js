import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

const InvoiceAction = ({ status, invoice }) => {
  const { onHandleFormOpen, onHandlePopUpOpen, markAsPaid } =
    useContext(AppContext);

  return (
    <div className="ml-auto flex gap-3 py-5 px-4 md:px-0 md:py-0">
      <button
        className="bg-white text-sm text-[#121212] font-semibold flex justify-center items-center h-[40px] w-[80px] rounded-full transition hover:bg-[#ffffffd9]"
        onClick={() => onHandleFormOpen()}
      >
        Edit
      </button>
      <button
        className="bg-[#ec5757] text-sm text-white font-semibold flex justify-center items-center h-[40px] w-[110px] rounded-full hover:bg-[#ff9797] transition"
        onClick={() => onHandlePopUpOpen()}
      >
        Delete
      </button>
      {status !== 'paid' && (
        <button
          className="bg-[#452da5] text-sm text-white font-semibold flex justify-center items-center h-[40px] w-[180px] rounded-full hover:bg-[#9277ff] transition"
          onClick={() => markAsPaid(invoice)}
        >
          Mark As Paid
        </button>
      )}
    </div>
  );
};

export default InvoiceAction;
