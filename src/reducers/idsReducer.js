const ids = new Set();

// helper function
// const generateRandomId = (function () {
//   const randomIDs = new Set();

//   return function genRandomID() {
//     const randomID = Math.random() * 1000000000;

//     if (randomIDs.has(randomID)) {
//       return genRandomID();
//     }

//     randomIDs.add(randomID);
//     return randomID;
//   };
// })();

// helper function
const generateRandomId = (existingIds) => {
  const randomID = Math.random() * 1000000000;

  if (existingIds.has(randomID)) {
    return generateRandomId(existingIds);
  }

  return randomID;
};

const idsReducer = (prevState = ids, { type } = action) => {
  switch (type) {
    case "GENERATE_ID":
      return new Set([...prevState, generateRandomId(prevState)]);
    default:
      return prevState;
  }
};

export default idsReducer;
