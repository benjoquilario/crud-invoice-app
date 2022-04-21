import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { deleteVariant } from '../../utilities/framerVariants';

const InvoiceDelete = ({ id }) => {
  const { deleteInvoice, isPopUpOpen, onHandlePopUpOpen } =
    useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to change the router URL back to home page when user delete a invoice
  const routeChange = () => {
    const path = `/`;
    navigate(path + location.search);
  };

  return (
    <>
      {isPopUpOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full min-h-screen z-20 bg-gradient-to-r from-[#00000080] to-[#00000080]">
          <motion.div
            variants={deleteVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-[480px] w-full mx-[20px] bg-white z-10 p-[40px] rounded-[14px]"
          >
            <h3 className="text-[#121212] text-[24px] mb-[16px] font-bold">
              Confirm Deletion
            </h3>
            <p className="text-[#888eb0] text-[12px]">
              Are you sure you want to delete invoice {id}? This action cannot
              be undone.
            </p>
            <div className="mt-[23px] flex justify-end gap-3 ">
              <button
                className="py-3 px-4 rounded-[50px] bg-[#fafafa] text-[#452da5] text-xs font-semibold"
                onClick={() => onHandlePopUpOpen()}
              >
                Cancel
              </button>
              <button
                className="py-3 px-4 rounded-[50px] bg-[#ec5757] text-xs text-white font-semibold"
                onClick={() => {
                  deleteInvoice(id);
                  routeChange();
                  onHandlePopUpOpen();
                }}
              >
                InvoicesDelete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default InvoiceDelete;
