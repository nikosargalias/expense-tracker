const expensesReducerDefaultState = [];

const expenseReducer = (
  prevState = expensesReducerDefaultState,
  { type, expense, id, updates }
) => {
  switch (type) {
    case "ADD_EXPENSE":
      return [...prevState, expense];
    case "REMOVE_EXPENSE":
      return prevState.filter((expense) => expense.id !== id);
    case "EDIT_EXPENSE":
      return prevState.map((expense) => {
        console.log(id);
        if (expense.id === id) {
          return {
            ...expense,
            ...updates,
          };
        }
        return expense;
      });
    default:
      return prevState;
  }
};

export { expenseReducer as default };
