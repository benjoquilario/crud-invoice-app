import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import Input from '../Input';

const Item = ({ index, helpers }) => {
   const { values, setFieldValue } = useFormikContext();

   useEffect(() => {
      const total = values.items[index].quantity * values.items[index].price;
      const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
      setFieldValue(`items[${index}].total`, rounded || '0');
   }, [setFieldValue, index, values.items]);

   return (
      <div key={index}>
         <Input
            label="Item Name"
            name={`items[${index}].name`}
            // hideLabels={index > 0}
         />

         <Input
            label="Qty."
            name={`items[${index}].quantity`}
            // hideLabels={index > 0}
         />

         <Input
            label="Price"
            name={`items[${index}].price`}
            // hideLabels={index > 0}
         />

         <Input
            label="Total"
            name={`items[${index}].total`}
            // hideLabels={index > 0}
            disabled
         />

         <button type="button" onClick={() => helpers.remove(index)}>
            Remove
         </button>
      </div>
   );
};

export default Item;
