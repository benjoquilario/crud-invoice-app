import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { useNavigate, useLocation } from 'react-router-dom';

const InvoicesDelete = ({ id }) => {
   const { deleteInvoice, isPopUpOpen, onHandlePopUpOpen } =
      useContext(AppContext);
   const navigate = useNavigate();
   const location = useLocation();

   const routeChange = () => {
      const path = `/`;
      navigate(path + location.search);
   };

   return (
      <div>
         {isPopUpOpen && (
            <div>
               <button onClick={() => onHandlePopUpOpen()}>Cancel</button>
               <button
                  onClick={() => {
                     deleteInvoice(id);
                     routeChange();
                  }}
               >
                  InvoicesDelete
               </button>
            </div>
         )}
      </div>
   );
};

export default InvoicesDelete;
