import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import Item from './Item';

const Items = ({ name }) => {
  const { values } = useFormikContext();

  return (
    <div>
      <legend>ItemList</legend>
      <FieldArray
        name={name}
        render={helpers => (
          <div>
            {values.items.map((_, index) => (
              <Item key={index} index={index} helpers={helpers} />
            ))}
            <button
              type="button"
              onClick={() =>
                helpers.push({
                  name: '',
                  quantity: '',
                  price: '',
                  total: '',
                })
              }
            >
              + Add New Item
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Items;
