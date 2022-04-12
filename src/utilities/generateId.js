const generateID = () => {
   const idTemplate = ['X', 'X', '0', '0', '0', '0'];
   const alphabetLength = 26;
   const alphabetArr = Array.from(Array(alphabetLength)).map((_, index) =>
      String.fromCharCode(index + 65)
   );

   const uid = idTemplate.map((_, index) => {
      if (index < 2) {
         return alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
      } else {
         return Math.floor(Math.random() * 10);
      }
   });

   return uid.join('');
};

const generateUniqueId = arr => {
   const allIdentificators = arr.map(item => {
      return item.id;
   });

   while (true) {
      let id = generateID();

      if (!allIdentificators.includes(id)) {
         return id;
      }
   }
};

export default generateUniqueId;
