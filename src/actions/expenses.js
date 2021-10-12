import generateNewId from "../helpers/generateId";
import store from "../store/configureStore";

// action generator
const addExpense = (expense) => {
  const prevState = store.getState();
  return {
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: new Date().getTime(),
      ...expense,
      id: generateNewId(prevState.expenses),
    },
  };
};

const removeExpense = (id) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = ({ id, updates } = {}) => {
  console.log(id, updates);
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

export { addExpense, removeExpense, editExpense };
