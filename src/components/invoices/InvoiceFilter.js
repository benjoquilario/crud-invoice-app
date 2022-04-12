import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { optionsFilter } from '../../utilities/initialValues';
import ItemsOptions from '../Items/ItemsOptions';

const InvoiceFilter = () => {
   const { setFilter, onHandleFormOpen } = useContext(AppContext);
   const [options, setOption] = useState(optionsFilter);

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
      <div>
         <div>
            <h1>Invoices</h1>
            <p>There are 7 total invoices.</p>
         </div>
         <div>
            {options.map(option => {
               return (
                  <ItemsOptions
                     id={option.id}
                     checked={option.checked}
                     handleClick={onHandleClick}
                  >
                     {option.value}
                  </ItemsOptions>
               );
            })}
         </div>
         <button onClick={onHandleFormOpen}>Create Invoice</button>
      </div>
   );
};

export default InvoiceFilter;
