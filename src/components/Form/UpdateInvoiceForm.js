import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { Formik, Form as FormikForm } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import Fields from '../Fields/Fields';
import { validationSchema } from '../../utilities/validationSchema';
import { updateInitialValues } from '../../utilities/initialValues';
import { updateFormVariant } from '../../utilities/framerVariants';
import '../../style/scrollStyle.css';

const UpdateInvoiceForm = ({ invoice }) => {
  const { updateInvoice, isFormOpen, onHandleFormOpen } =
    useContext(AppContext);

  /**
   * Function to handle the form for updating the invoice data
   * @param {object} values this is the data of the user edited and pass it to updateInvoice fn
   */
  const onHandleSubmit = values => {
    updateInvoice(values, 'pending');
    onHandleFormOpen();
  };

  return (
    <AnimatePresence>
      {isFormOpen && (
        <Formik
          initialValues={updateInitialValues(invoice)}
          validationSchema={validationSchema}
          onSubmit={onHandleSubmit}
        >
          <motion.div
            variants={updateFormVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-[#fafafa] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-3 py-4 h-full md:h-[600px] max-w-[900px] w-full mx-auto z-30 overflow-auto rounded"
          >
            <FormikForm>
              <h1 className="pl-3 mb-4">
                Edit <span className="font-bold text-lg">#{invoice.id}</span>
              </h1>
              <Fields>
                <button
                  type="button"
                  className="text-white text-[12px] rounded-[50px] bg-[#121212] flex justify-center items-center h-[48px] w-[150px]"
                  onClick={() => onHandleFormOpen()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white text-[12px] rounded-[50px] bg-[#452da5] flex justify-center items-center h-[48px] w-[190px]"
                >
                  Save Changes
                </button>
              </Fields>
            </FormikForm>
          </motion.div>
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default UpdateInvoiceForm;
