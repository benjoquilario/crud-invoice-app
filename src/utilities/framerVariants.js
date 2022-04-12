export const invoicesVariants = {
   header: {
      hidden: { opacity: 0, x: -50 },
      visible: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 1,
         },
      },
      exit: {
         opacity: 0,
      },
   },
   list: index => {
      return {
         hidden: {
            y: 10,
            opacity: 0,
         },
         visible: {
            y: 0,
            opacity: 1,
            transition: {
               type: 'spring',
               delay: 0.1 * index,
            },
         },
         exit: {
            y: 10,
            opacity: 0,
            transition: {
               type: 'spring',
               delay: 0.05 * index,
               duration: 0.45,
            },
         },
      };
   },
   errorMessage: {
      hidden: { x: -50, opacity: 0 },
      visible: {
         x: 0,
         opacity: 1,
         transition: { type: 'spring' },
      },
      exit: { opacity: 0 },
   },
   reduced: {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: { duration: 0.5, delay: 0.1 },
      },
      exit: {
         opacity: 0,
      },
   },
};
