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
    <div key={index} className="grid md:grid-cols-[1fr_min-content] gap-2">
      <div className="grid grid-cols-3 md:grid-cols-[2.5fr_47px_1.25fr_0.75fr] gap-2">
        <Input label="Item Name" name={`items[${index}].name`} />
        <Input label="Qty." name={`items[${index}].quantity`} />
        <Input label="Price" name={`items[${index}].price`} />
        <Input label="Total" name={`items[${index}].total`} disabled />
      </div>
      <button
        className="mt-[18px]"
        type="button"
        onClick={() => helpers.remove(index)}
        aria-label="delete item"
      >
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fillRule="nonzero"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Item;
