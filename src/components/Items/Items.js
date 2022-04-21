import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import Item from './Item';

const Items = ({ name }) => {
  const { values } = useFormikContext();

  return (
    <div className="mt-[23px]">
      <legend className="mb-5 text-[12px] text-[#452da5] font-bold">
        ItemList
      </legend>
      <FieldArray
        name={name}
        render={helpers => (
          <div className="flex flex-col gap-4">
            {values.items.map((_, index) => (
              <Item key={index} index={index} helpers={helpers} />
            ))}
            <button
              className="w-full font-bold text-[12px] text-white bg-[#121212] py-[13px] rounded"
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
