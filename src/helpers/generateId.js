const generateNewId = (expenses) => {
  const randomID = Math.random() * 100000000;

  if (expenses.find((expense) => expense.id === randomID)) {
    return generateNewId(expenses);
  }

  return randomID;
};

export default generateNewId;
