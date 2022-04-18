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
      <Input label="Item Name" name={`items[${index}].name`} />
      <Input label="Qty." name={`items[${index}].quantity`} />
      <Input label="Price" name={`items[${index}].price`} />
      <Input label="Total" name={`items[${index}].total`} disabled />
      <button type="button" onClick={() => helpers.remove(index)}>
        Remove
      </button>
    </div>
  );
};

export default Item;
