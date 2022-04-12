import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InvoicesList = ({ invoice, variants, initial, animate, exit }) => {
   return (
      <motion.li
         variants={variants}
         initial={initial}
         animate={animate}
         exit={exit}
      >
         <div key={invoice.id} initial="hidden" animate="visible" exit="exit">
            <Link to={`invoice/${invoice.id}`}>{invoice.clientName}</Link>
         </div>
      </motion.li>
   );
};

export default InvoicesList;
