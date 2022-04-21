import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { motion } from 'framer-motion';
import { backDropVariant } from '../../utilities/framerVariants';

const Backdrop = () => {
  const { onHandleFormOpen } = useContext(AppContext);

  return (
    <motion.div
      variants={backDropVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={() => onHandleFormOpen()}
      className="fixed top-0 left-0 flex items-center justify-center w-full min-h-screen z-20 bg-gradient-to-r from-[#00000080] to-[#00000080]"
    />
  );
};

export default Backdrop;
