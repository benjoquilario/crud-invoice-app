import React, { useContext} from 'react';
import InvoicesList from './InvoicesList';
import { AppContext } from '../../context/context';
import { invoicesVariants } from '../../utilities/framerVariants';
import { useReducedMotion } from 'framer-motion';

const Invoices = () => {
  const { filteredInvoices } = useContext(AppContext);
  const shouldReduceMotion = useReducedMotion();
  const variant = (element, index) => {
    return shouldReduceMotion
      ? invoicesVariants.reduced
      : invoicesVariants[element](index);
  };

  return (
    <ul className="w-full mt-[44px] px-4">
      {filteredInvoices.map((invoice, index) => {
        return (
          <InvoicesList
            key={index}
            invoice={invoice}
            variants={variant('list', index)}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        );
      })}
    </ul>
  );
};

export default Invoices;
