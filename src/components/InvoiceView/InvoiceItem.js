import React from 'react';

const InvoiceItem = ({ name, price, quantity, total }) => {
  return (
    <tr>
      <td className="pl-0 md:pl-[32px] pb-[32px]">{name}</td>
      <td className="pb-[32px] hidden md:table-cell text-center">{quantity}</td>
      <td className="pb-[32px] hidden md:table-cell">${price}</td>
      <td className="text-right pb-[32px] pr-[32px]">${total}</td>
    </tr>
  );
};

export default InvoiceItem;
