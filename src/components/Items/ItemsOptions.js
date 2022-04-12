import React from 'react';

const ItemsOptions = ({ id, handleClick, checked, children }) => {
   return (
      <label>
         <input
            type="checkbox"
            checked={checked}
            onChange={() => handleClick(id)}
         />
         <span>{children}</span>
      </label>
   );
};

export default ItemsOptions;
