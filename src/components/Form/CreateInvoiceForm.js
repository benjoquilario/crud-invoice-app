import React, { useContext } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../../context/context';
import Fields from '../Fields/Fields';
import { useNavigate, useLocation } from 'react-router-dom';
import { initialValues } from '../../utilities/initialValues';
import { validationSchema } from '../../utilities/validationSchema';
import { createFormVariant } from '../../utilities/framerVariants';

const CreateInvoiceForm = () => {
  const { createInvoice } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Function to submit a form the create a new invoice.
   * navigate fn is to change the url back to home page
   * @param {object} values data to pass in createInvoice fn
   */
  const onHandleSubmit = values => {
    createInvoice(values, 'pending');
    navigate(`/` + location.search);
  };

  /**
   * Function to submit a form the create a new invoice for draft status.
   * navigate fn is to change the url back to home page
   * @param {object} values data to pass in createInvoice fn
   */
  const onHandleDraftSubmit = values => {
    createInvoice(values, 'draft');
    navigate(`/` + location.search);
  };

  return (
    <AnimatePresence>
      <Formik
        onSubmit={onHandleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {formik => (
          <motion.div
            variants={createFormVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <FormikForm>
              <h2 className="pl-3 mb-5 text-[#121212] font-bold text-[18px]">
                Create Invoice
              </h2>
              <Fields>
                <button
                  type="button"
                  className="bg-white border-solid border-[1px] border-[#dfe3fa] text-[12px] rounded-[50px] py-[12px] px-[28px] mr-auto"
                >
                  <Link to="/">Discard</Link>
                </button>
                <button
                  className="text-white text-[12px] rounded-[50px] bg-[#121212] flex justify-center items-center h-[40px] w-[150px]"
                  type="button"
                  onClick={() => onHandleDraftSubmit(formik.values)}
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="text-white text-[12px] rounded-[50px] bg-[#452da5] flex justify-center items-center h-[40px] w-[190px]"
                >
                  Save & Send
                </button>
              </Fields>
            </FormikForm>
          </motion.div>
        )}
      </Formik>
    </AnimatePresence>
  );
};

export default CreateInvoiceForm;
